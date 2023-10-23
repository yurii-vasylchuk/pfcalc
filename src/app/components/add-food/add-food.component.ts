import {ChangeDetectionStrategy, Component, Inject, OnDestroy, TrackByFunction} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TranslateModule} from "@ngx-translate/core";
import {MatSlideToggleChange, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {Store} from "@ngxs/store";
import {BehaviorSubject, distinct, filter, map, startWith, Subject, switchMap, take, takeUntil} from "rxjs";
import {FoodType, IFood, IIngredient} from "../../commons/models/domain.models";
import {MatSelectModule} from "@angular/material/select";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ceilPfcc, multiplyPfcc, pfccFormGroupIsNotEmpty, sumPfccs} from "../../commons/functions";
import {AddFoodFormState} from "../../state/form/add-food-form.state";
import {
    AddFoodFormResetAction,
    AddFoodFormStatusChangedEvent,
    AddFoodFormValueChangedEvent,
    IAddFoodFormModel,
    LoadEditingFoodAction,
} from "../../state/form/add-food-form.state-models";
import {emptyPfcc, IPfcc} from "../../commons/models/common.models";
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {UiAddFoodState} from '../../state/ui/ui.add-food.state';
import {AddFoodSearchIngredientTermChangedAction} from '../../state/ui/ui.add-food-models';

@Component({
    selector: 'pfc-add-food',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatFormFieldModule, TranslateModule, MatSlideToggleModule, MatInputModule, MatSelectModule, NgxMatSelectSearchModule, ReactiveFormsModule],
    templateUrl: './add-food.component.html',
    styleUrls: ['./add-food.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFoodComponent implements OnDestroy {
    private static readonly CREATE_TITLE = 'add-food.title-create';
    private static readonly EDIT_TITLE = 'add-food.title-edit';

    protected ingredientsOptions$ = this.store.select(UiAddFoodState.allIngredientsOptions);

    protected formGroup: FormGroup;

    protected titleCode = AddFoodComponent.CREATE_TITLE;

    protected ceiledPfcc = new BehaviorSubject<IPfcc>(emptyPfcc);
    protected usedIngredientsIds$ = new BehaviorSubject<number[]>([]);
    protected nextIngredientIndex = 0;

    protected trackIngredientByIndexFn: TrackByFunction<{
        ingredient: IFood;
        ingredientWeight: number,
        index: number
    }> = (_, i) => `${i.index}`;

    protected tackFoodByIdFn: TrackByFunction<IFood> = (_, item) => item.id;

    private destroy$ = new Subject<void>();

    constructor(private store: Store,
                private dialogRef: MatDialogRef<AddFoodComponent, IAddFoodFormModel>,
                @Inject(MAT_DIALOG_DATA) private data: AddFoodModalData,
                private fb: FormBuilder) {
        this.store.dispatch(new AddFoodFormResetAction());

        this.formGroup = fb.group({
            id: [data.id],
            name: [data.name, [Validators.required]],
            description: [null],
            isRecipe: [data?.type === 'RECIPE', Validators.required],
            isHidden: [false, Validators.required],
            pfcc: fb.group({
                protein: [0, [Validators.required, Validators.min(0)]],
                fat: [0, [Validators.required, Validators.min(0)]],
                carbohydrates: [0, [Validators.required, Validators.min(0)]],
                calories: [0, [Validators.required, Validators.min(0)]],
            }, {
                validators: pfccFormGroupIsNotEmpty,
            }),
            ingredients: fb.array([]),
        });

        this.formGroup.valueChanges.subscribe(formData => {
            return this.store.dispatch(new AddFoodFormValueChangedEvent(formData));
        });
        this.formGroup.statusChanges.subscribe(status => {
            this.store.dispatch(new AddFoodFormStatusChangedEvent(status, this.formGroup.errors));
        });

        if (this.data.id != null) {
            this.initializeFromFood(this.data.id);
        }

        const usedIngredients$ = this.store.select(AddFoodFormState.ingredients)
            .pipe(
                takeUntil(this.destroy$),
                filter(ingredients => ingredients != null),
                distinct(),
                map(ingredients => ingredients!.filter(i => i.ingredient != null)),
            );

        usedIngredients$
            .pipe(
                map(ingredients => ingredients != null ?
                                   ingredients.map(i => multiplyPfcc(i.ingredient.pfcc, i.weight / 100)) :
                    []),
                map(pfccs => ceilPfcc(sumPfccs(emptyPfcc, ...pfccs))),
            )
            .subscribe(pfcc => this.ceiledPfcc.next(pfcc));

        usedIngredients$.pipe(
            map(ingredients => ingredients!
                .map(i => i.ingredient.id)),
        ).subscribe(usedIngredientsIds => this.usedIngredientsIds$.next(usedIngredientsIds));

        this.formGroup.get('ingredients')!.valueChanges
            .pipe(switchMap(_ => usedIngredients$))
            .subscribe(ingredients => {
                const mapped = ingredients!.map(i => {
                    return {
                        ...i.ingredient,
                        ingredientWeight: i.weight,
                    } as IIngredient;
                });
                this.recalculatePfcc(mapped);
            });
    }

    private initializeFromFood(id: number) {
        this.store.select(UiAddFoodState.editingFood)
            .pipe(
                //TODO: unsubscribe if loading food failed
                takeUntil(this.destroy$),
                filter(f => f != null),
                take(1),
            ).subscribe(foodToEdit => {
            this.titleCode = AddFoodComponent.EDIT_TITLE;
            let nextValue: IAddFoodFormModel = {
                id: id,
                isHidden: foodToEdit.isHidden,
                pfcc: {
                    ...foodToEdit.pfcc,
                },
                name: foodToEdit.name,
                description: foodToEdit.description || null,
                ingredients: foodToEdit.type === 'RECIPE' ? foodToEdit.ingredients.map((i, idx) => ({
                    weight: i.ingredientWeight,
                    index: idx,
                    ingredient: {
                        ...i,
                    },
                })) : [],
            };
            this.formGroup.patchValue(nextValue);
        });

        this.store.dispatch(new LoadEditingFoodAction(id));

    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    protected get ingredientsFormArray(): FormArray {
        return this.formGroup.get('ingredients') as FormArray;
    }

    protected get pfccFormGroup(): FormGroup {
        return this.formGroup.get('pfcc') as FormGroup;
    }

    protected handleCloseClicked(): void {
        this.dialogRef.close();
    }

    protected handleAddIngredientClick(): void {
        const newIngredientIdx = this.ingredientsFormArray.length;
        this.ingredientsFormArray.push(this.createIngredientFormGroup());
        this.ingredientsFormArray.at(newIngredientIdx)
            .get('ingredientSearch')
            .valueChanges
            .pipe(
                filter(search => !!search),
                startWith(''),
            )
            .subscribe(v => {
                    this.store.dispatch(new AddFoodSearchIngredientTermChangedAction(v, newIngredientIdx));
                },
            );
    }

    private createIngredientFormGroup(): FormGroup {
        return this.fb.group({
            ingredient: [null, Validators.required],
            weight: [100, [Validators.required, Validators.min(1)]],
            index: [this.nextIngredientIndex++, Validators.required],
            ingredientSearch: [null],
        });
    }

    handleSubmit(): void {
        this.dialogRef.close(this.store.selectSnapshot(AddFoodFormState.model));
    }

    handleRecipeSwitcherChanged(data: MatSlideToggleChange): void {
        if (data.checked) {
            this.pfccFormGroup.setValue(emptyPfcc);
        } else {
            this.ingredientsFormArray.clear();
        }
    }

    protected get isRecipe(): boolean {
        return (this.formGroup.get('isRecipe') as FormControl).value;
    }

    private recalculatePfcc(ingredients: IIngredient[]) {
        const ingredientsPfccs = ingredients.filter(i => i != null && i.pfcc != null && i.ingredientWeight != null)
            .map(i => multiplyPfcc(i.pfcc, (i.ingredientWeight * 0.01)));

        const accumulatedPfcc = sumPfccs(emptyPfcc, ...ingredientsPfccs);

        this.pfccFormGroup.setValue(accumulatedPfcc);
    }

    handleRemoveIngredientClick(idx: number) {
        this.ingredientsFormArray.removeAt(idx);
    }
}

export interface AddFoodModalData {
    name?: string;
    type?: FoodType;
    id?: number;
}
