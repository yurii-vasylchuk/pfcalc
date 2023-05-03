import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Output,
  ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FoodType, IIngredient, IMeal} from '../../commons/models/domain.models';
import {MatIconModule} from '@angular/material/icon';
import {Observable, take} from 'rxjs';
import {IPfcc} from '../../commons/models/common.models';
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {NutritionGaugeComponent} from '../nutrition-gauge/nutrition-gauge.component';
import {FormsModule} from "@angular/forms";
import {CookADishComponent} from "../cook-a-dish/cook-a-dish.component";

export interface AddMealDialogData {
  items: Observable<IDishOption[]>;
  dailyNutrients$: Observable<IPfcc>,
  dailyAims$: Observable<IPfcc>,
  filter: (val: string) => void;
}

@Component({
  selector: 'pfc-add-meal',
  standalone: true,
  imports: [CommonModule,
    TranslateModule,
    MatIconModule,
    MatExpansionModule, MatInputModule, MatDialogModule, MatButtonModule, NutritionGaugeComponent, FormsModule],
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddMealComponent implements AfterViewInit {
  protected readonly Math = Math;
  protected meals: IMeal[] = [];

  @Output()
  protected search = new EventEmitter<string | null>();

  @ViewChild('searchField')
  protected searchField!: ElementRef<HTMLInputElement>;
  @ViewChild('dishesList')
  protected dishesList!: MatExpansionPanel;
  protected selectedDishWeight = 0;

  private selectedDish: IDishOption | null = null;

  constructor(private dialogRef: MatDialogRef<AddMealComponent, ISelectedDish | null>,
              @Inject(MAT_DIALOG_DATA) public data: AddMealDialogData,
              private dialog: MatDialog) {
  }

  ngAfterViewInit(): void {
    this.data.items
      .pipe(take(1))
      .subscribe(options => {
        const opt = options.find(o => o.foodId === 21);
        this.handleDishSelected(opt!);
        this.handleEditRecipeClicked();
      })
  }

  dishOptionTrackBy = (idx: number, item: IDishOption) => item.id;

  handleSearchChange() {
    this.data.filter(this.searchField.nativeElement.value);
  }

  handleDishSelected(option: IDishOption) {
    this.selectedDish = option;
    if (option.type === 'recipe') {
      this.selectedDishWeight = option.ingredients?.map(i => i.ingredientWeight).reduce((w1, w2) => w1 + w2, 0) || 0;
    } else {
      this.selectedDishWeight = 100;
    }
  }

  handleDeleteOptionClick(option: IDishOption) {
    if (option.type === 'dish' && option.delete != null) {
      option.delete();
    }
  }

  onClose() {
    this.dialogRef.close(null);
  }

  handleDishUnselected() {
    this.selectedDish = null;
  }

  handleSaveClick() {
    if (this.selectedDish == null) {
      this.dialogRef.close(null);
    } else {
      this.dialogRef.close({
        id: this.selectedDish.id,
        weight: this.selectedDishWeight,
      });
    }
  }

  handleEditRecipeClicked() {
    this.dialog.open(CookADishComponent, {
      panelClass: 'fullscreen-dialog',
      data: {recipeId: this.selectedDish?.foodId}
    });
  }
}

export type DishOptionType = 'dish' | FoodType;

interface IBaseDishOption {
  id: string;
  foodId: number;
  name: string;
  type: DishOptionType;
  pfcc: IPfcc;
}

export type IDishOption =
  (IBaseDishOption & { type: 'dish', delete?: (() => void), dishId: number, ingredients: null }) |
  (IBaseDishOption & { type: FoodType, ingredients: null | IIngredient[] });

export interface ISelectedDish {
  id: string;
  weight: number;
}
