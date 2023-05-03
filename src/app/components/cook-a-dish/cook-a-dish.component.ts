import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, TrackByFunction} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {AddMealComponent, ISelectedDish} from "../add-meal/add-meal.component";
import {Store} from "@ngxs/store";
import {map, Observable, skipWhile, Subject, takeUntil, withLatestFrom} from "rxjs";
import {DOMAIN_STATE_NAME, DomainState} from "../../state/domain/domain.state";
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {IFood} from "../../commons/models/domain.models";
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {
  CookADishAddIngredient,
  CookADishRemoveIngredient, ICookADishForm,
  InitiateCookADishForm
} from "../../state/domain/domain.state-models";

interface CookADishDialogData {
  recipeId: number | null;
}

@Component({
  selector: 'pfc-cook-a-dish',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatSelectModule, TranslateModule, MatIconModule, NgxsFormPluginModule],
  templateUrl: './cook-a-dish.component.html',
  styleUrls: ['./cook-a-dish.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookADishComponent {
  protected form: FormGroup = this.fb.group({
    name: [null, Validators.required],
    ingredients: this.fb.array([]),
    cookedWeight: [0, Validators.required]
  });
  protected $allIngredients: Observable<IFood[]>;
  protected $formData: Observable<ICookADishForm | null> = this.store.select(DomainState.cookADishForm);
  protected $usedIngredientsIds: Observable<number[]>;
  protected trackFoodByIdFn: TrackByFunction<IFood> = (idx, food) => `${idx}`;
  protected trackIngredientByIdFn: TrackByFunction<{ingredient: IFood; ingredientWeight: number}> = (idx, i) => `${idx}`;
  private $destroyed: Observable<void> = new Subject();

  constructor(private store: Store,
              private dialogRef: MatDialogRef<AddMealComponent, ISelectedDish | null>,
              private cdr: ChangeDetectorRef,
              @Inject(MAT_DIALOG_DATA) private data: CookADishDialogData,
              private fb: FormBuilder) {

    this.$formData.pipe(
      takeUntil(this.$destroyed),
      map(fd => fd?.ingredients),
      skipWhile(i => i == null)
    ).subscribe(ingredients => {
      if (ingredients == null) {
        return;
      }

      ingredients = ingredients.filter(i => i.ingredient != null);

      if (ingredients.length || 0 > this.ingredients.length) {
        for (let i = this.ingredients.length; i < ingredients.length; i++) {
          this.ingredients.push(this.fb.group({
            ingredient: [ingredients[i].ingredient, Validators.required],
            weight: [ingredients[i].ingredientWeight, Validators.required]
          }));
        }
      }
    });

    this.$allIngredients = store.select(DomainState.foods);
    this.$usedIngredientsIds = store.select(DomainState.cookADishUsedIngredients).pipe(
      map(foods => foods.map(f => f.id))
    );

    if (data.recipeId != null) {
      this.store.dispatch(new InitiateCookADishForm(data.recipeId));
    }
  }

  protected get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  protected get formStateName(): string {
    return `${DOMAIN_STATE_NAME}.forms.cookADish`;
  }

  onClose() {
    this.dialogRef.close(null);
  }

  addIngredient() {
    this.ingredients.push(this.fb.group({
      ingredient: [null, Validators.required],
      weight: [100, Validators.required]
    }));
    this.store.dispatch(new CookADishAddIngredient({
      ingredientWeight: 100
    }))
  }

  handleSubmit() {
    console.log(this.form.value);
  }

  removeIngredient(idx: number): void {
    (this.form.get('ingredients') as FormArray).removeAt(idx);
    this.store.dispatch(new CookADishRemoveIngredient(idx));
  }
}
