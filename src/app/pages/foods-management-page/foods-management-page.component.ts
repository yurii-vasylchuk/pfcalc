import {ChangeDetectionStrategy, Component, TrackByFunction} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from "@angular/material/tabs";
import {TranslateModule} from "@ngx-translate/core";
import {Store} from "@ngxs/store";
import {DomainState} from "../../state/domain/domain.state";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {FoodType, IFood, IIngredient} from "../../commons/models/domain.models";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {combineLatestWith, map, startWith} from "rxjs";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {AddFoodComponent, AddFoodModalData} from "../../components/add-food/add-food.component";
import {IAddFoodFormModel} from "../../state/form/add-food-form.state-models";
import {CreateFoodAction} from "../../state/domain/domain.state-models";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

@Component({
  selector: 'pfc-foods-management-page',
  standalone: true,
  imports: [CommonModule, MatTabsModule, TranslateModule, MatButtonModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './foods-management-page.component.html',
  styleUrls: ['./foods-management-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodsManagementPageComponent {
  protected searchControl = new FormControl<string | null>(null);
  protected ingredients = this.store.select(DomainState.ingredientFoods)
    .pipe(
      combineLatestWith(this.searchControl.valueChanges.pipe(startWith(null))),
      map(([foods, search]) => search == null ? foods : foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase())))
    );
  protected recipes = this.store.select(DomainState.recipeFoods)
    .pipe(
      combineLatestWith(this.searchControl.valueChanges.pipe(startWith(null))),
      map(([foods, search]) => search == null ? foods : foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase())))
    );
  protected trackFoodById: TrackByFunction<IFood> = (_, item) => {
    return item.id;
  };

  constructor(private store: Store,
              private dialog: MatDialog) {
  }

  addFoodClick(type: FoodType) {
    const dialogRef = this.dialog.open<AddFoodComponent, AddFoodModalData, IAddFoodFormModel>(AddFoodComponent, {
      panelClass: 'fullscreen-dialog',
      data: {
        type: type,
        name: this.searchControl.value || undefined
      }
    });

    dialogRef.afterClosed().subscribe(res => {
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
      }))
    });
  }
}
