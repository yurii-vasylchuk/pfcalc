import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, TrackByFunction} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {Store} from "@ngxs/store";
import {map, Observable, skipWhile, Subject, takeUntil} from "rxjs";
import {DOMAIN_STATE_NAME, DomainState} from "../../state/domain/domain.state";
import {FormArray, FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {IFood, IIngredient} from "../../commons/models/domain.models";
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {
  CookADishAddIngredient,
  CookADishRemoveIngredient,
  ICookADishFormModel,
  InitiateCookADishForm,
} from "../../state/domain/domain.state-models";


@Component({
  selector: 'pfc-cook-a-dish',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatSelectModule, TranslateModule, MatIconModule, NgxsFormPluginModule],
  templateUrl: './cook-a-dish.component.html',
  styleUrls: ['./cook-a-dish.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookADishComponent implements OnDestroy {
  protected form = this.fb.group({
    name: [null, Validators.required],
    ingredients: this.fb.array([]),
    cookedWeight: [0, Validators.required],
  });
  protected $allIngredients: Observable<IFood[]>;
  protected $formData: Observable<ICookADishFormModel | null>;
  protected $usedIngredientsIds: Observable<number[]>;
  protected trackIngredientByIndexFn: TrackByFunction<{
    ingredient: IFood;
    ingredientWeight: number,
    index: number
  }> = (idx, i) => `${i.index}`;

  private $destroyed = new Subject<void>();

  constructor(private store: Store,
              private dialogRef: MatDialogRef<CookADishComponent, ICookADishResult | null>,
              private cdr: ChangeDetectorRef,
              @Inject(MAT_DIALOG_DATA) private data: ICookADishDialogData,
              private fb: FormBuilder) {

    this.$formData = this.store.select(DomainState.cookADishForm)
      .pipe(map(fd => fd.model || null));

    this.$formData.pipe(
      takeUntil(this.$destroyed),
      map(fd => fd?.ingredients),
      skipWhile(i => i == null),
    ).subscribe(ingredients => {
      if (ingredients == null) {
        return;
      }

      ingredients = ingredients.filter(i => i.ingredient != null);

      if (ingredients.length || 0 > this.ingredients.length) {
        for (let i = this.ingredients.length; i < ingredients.length; i++) {
          this.ingredients.push(this.fb.group({
            ingredient: [ingredients[i].ingredient, Validators.required],
            ingredientWeight: [ingredients[i].ingredientWeight, Validators.required],
            index: [ingredients[i].index],
          }));
        }
      }
    });

    this.$allIngredients = store.select(DomainState.foods);
    this.$usedIngredientsIds = store.select(DomainState.cookADishUsedIngredients).pipe(
      map(foods => foods.map(f => f.id)),
    );

    if (data.recipeId != null) {
      this.store.dispatch(new InitiateCookADishForm(data.recipeId));
    }
  }

  ngOnDestroy(): void {
    this.$destroyed.next();
    this.$destroyed.complete();
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
    let nextIndex: number = this.ingredients.at(this.ingredients.length - 1).value.index + 1;

    this.ingredients.push(this.fb.group({
      ingredient: [null, Validators.required],
      ingredientWeight: [100, Validators.required],
      index: [nextIndex],
    }));
    this.store.dispatch(new CookADishAddIngredient({
      ingredientWeight: 100,
      index: nextIndex,
    }));
  }

  handleSubmit() {
    this.store.select(DomainState.cookADishForm)
      .pipe(
        map(form => form.model),
      )
      .subscribe(form => {
        if (form == null) {
          return;
        }
        this.dialogRef.close({
          name: form.name as string,
          cookedWeight: form.cookedWeight,
          ingredients: form.ingredients.map(i => {
            return {
              ...i.ingredient,
              ingredientWeight: i.ingredientWeight,
            };
          }),
        });
      });
  }

  removeIngredient(idx: number): void {
    (this.form.get('ingredients') as FormArray).removeAt(idx);
    this.store.dispatch(new CookADishRemoveIngredient(idx));
  }
}

export interface ICookADishResult {
  name: string;
  ingredients: IIngredient[];
  cookedWeight: number;
}

export interface ICookADishDialogData {
  recipeId: number | null;
}
