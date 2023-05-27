import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FoodType, IIngredient, IMeal} from '../../commons/models/domain.models';
import {MatIconModule} from '@angular/material/icon';
import {map, Observable, switchMap, take} from 'rxjs';
import {IPfcc} from '../../commons/models/common.models';
import {MatAccordion, MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {NutritionGaugeComponent} from '../nutrition-gauge/nutrition-gauge.component';
import {FormsModule} from "@angular/forms";
import {CookADishComponent, ICookADishDialogData, ICookADishResult} from "../cook-a-dish/cook-a-dish.component";
import {Store} from "@ngxs/store";
import {CreateDishAction, CreateFoodAction} from "../../state/domain/domain.state-models";
import {DateTime} from "luxon";
import {DomainState} from "../../state/domain/domain.state";
import {AddFoodComponent, AddFoodModalData} from "../add-food/add-food.component";
import {IAddFoodFormModel} from "../../state/form/add-food-form.state-models";

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
export class AddMealComponent {
  protected readonly Math = Math;
  protected meals: IMeal[] = [];

  @Output()
  protected search = new EventEmitter<string | null>();

  @ViewChild('searchField')
  protected searchField!: ElementRef<HTMLInputElement>;
  @ViewChildren('dishesOption')
  protected dishesAccordionItems!: QueryList<MatExpansionPanel>;
  @ViewChildren('dishesAccordion')
  protected dishesAccordion!: MatAccordion;
  protected selectedDishWeight = 0;
  protected selectedDish: IDishOption | null = null;

  constructor(private store: Store,
              private dialogRef: MatDialogRef<AddMealComponent, ISelectedDish | null>,
              @Inject(MAT_DIALOG_DATA) protected data: AddMealDialogData,
              private dialog: MatDialog) {
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
    const ref = this.dialog.open<CookADishComponent, ICookADishDialogData, ICookADishResult>(CookADishComponent, {
      panelClass: 'fullscreen-dialog',
      data: {recipeId: this.selectedDish!.foodId}
    });

    ref.afterClosed().subscribe(result => {
      if (result == null) {
        return;
      }
      this.store.dispatch(new CreateDishAction({
        name: result.name,
        foodId: this.selectedDish!.foodId,
        cookedOn: DateTime.now(),
        cookedWeight: result.cookedWeight,
        ingredients: result.ingredients
      })).pipe(
        switchMap(_ => this.store.select(DomainState.dishes)),
        take(1),
        map(dishes => dishes.find(dish => dish.name === result.name)),
      ).subscribe(dish => {
        if (dish == null) {
          return;
        }

        console.log(this.dishesAccordionItems.get(0));
      });
    });
  }

  handleAddFoodClick(name?: string) {
    const ref = this.dialog.open<AddFoodComponent, AddFoodModalData, IAddFoodFormModel>(AddFoodComponent, {
      panelClass: 'fullscreen-dialog',
      data: {
        name: name
      }
    });

    ref.afterClosed().subscribe(res => {
      if (res == null || res.name == null) {
        return
      }

      this.store.dispatch(new CreateFoodAction({
        name: res.name,
        type: res.ingredients.length > 0 ? 'recipe' : 'ingredient',
        description: res.description || undefined,
        pfcc: res.pfcc,
        hidden: false, // TODO: Add to form
        consistOf: res.ingredients.length > 0 ?
          res.ingredients.map(i => {
            return {
              ...i.ingredient,
              ingredientWeight: i.weight
            } as IIngredient;
          }) :
          null
      }));
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
