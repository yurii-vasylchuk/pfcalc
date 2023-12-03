import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  TrackByFunction,
  ViewChildren,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabChangeEvent, MatTabsModule} from "@angular/material/tabs";
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";
import {MatListItem, MatListModule} from "@angular/material/list";
import {FoodType, IFood, IIngredient} from "../../commons/models/domain.models";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {debounceTime, distinctUntilChanged, map, Subject, takeUntil} from "rxjs";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {AddFoodComponent, AddFoodModalData} from "../../components/add-food/add-food.component";
import {IAddFoodFormModel} from "../../state/form/add-food-form.state-models";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ViewSelectSnapshot} from '@ngxs-labs/select-snapshot';
import {FoodsManagementState} from '../../state/foods-management/foods-management.state';
import {Emittable, Emitter} from '@ngxs-labs/emitter';
import {FoodsManagement} from '../../state/foods-management/foods-management.state-models';
import {actionsExecuting} from '@ngxs-labs/actions-executing';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'pfc-foods-management-page',
  standalone: true,
  imports: [CommonModule, MatTabsModule, TranslateModule, MatButtonModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatDialogModule, MatProgressBarModule],
  templateUrl: './foods-management-page.component.html',
  styleUrls: ['./foods-management-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodsManagementPageComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewSelectSnapshot(FoodsManagementState.products)
  protected products: IFood[];
  @ViewSelectSnapshot(FoodsManagementState.recipes)
  protected recipes: IFood[];
  @ViewSelectSnapshot(FoodsManagementState.moreProductsAvailable)
  protected moreProductsAvailable: boolean;
  @ViewSelectSnapshot(FoodsManagementState.moreRecipesAvailable)
  protected moreRecipesAvailable: boolean;
  @ViewSelectSnapshot(actionsExecuting([{type: FoodsManagement.LOAD_PRODUCTS}, {type: FoodsManagement.LOAD_MORE_PRODUCTS}]))
  protected productsLoading: boolean;
  @ViewSelectSnapshot(actionsExecuting([{type: FoodsManagement.LOAD_RECIPES}, {type: FoodsManagement.LOAD_MORE_RECIPES}]))
  protected recipesLoading: boolean;

  @Emitter(FoodsManagementState.loadProducts)
  private loadProducts: Emittable<FoodsManagement.LoadFoodsActionPayload>;
  @Emitter(FoodsManagementState.loadRecipes)
  private loadRecipes: Emittable<FoodsManagement.LoadFoodsActionPayload>;
  @Emitter(FoodsManagementState.loadMoreProducts)
  private loadMoreProducts: Emittable;
  @Emitter(FoodsManagementState.loadMoreRecipes)
  private loadMoreRecipes: Emittable;
  @Emitter(FoodsManagementState.createFood)
  private createFood: Emittable<FoodsManagement.CreateFoodActionPayload>;
  @Emitter(FoodsManagementState.editFood)
  private editFood: Emittable<FoodsManagement.EditFoodActionPayload>;
  @Emitter(FoodsManagementState.deleteFood)
  private deleteFood: Emittable<FoodsManagement.DeleteFoodActionPayload>;

  protected type: FoodType = 'INGREDIENT';

  @ViewChildren(MatListItem, {read: ElementRef})
  protected items!: QueryList<ElementRef>;
  protected searchControl = new FormControl<string | null>(null);

  protected trackFoodById: TrackByFunction<IFood> = (_, item) => {
    return item.id;
  };

  private $destroyed = new Subject<void>();

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadProducts.emit({name: null, page: 0, pageSize: 10});
    this.loadRecipes.emit({name: null, page: 0, pageSize: 10});
    this.searchControl.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        takeUntil(this.$destroyed),
        map(search => ({
          page: 0,
          pageSize: 10,
          name: search,
        } as FoodsManagement.LoadFoodsActionPayload)))
      .subscribe((payload: FoodsManagement.LoadFoodsActionPayload) => {
        switch (this.type) {
          case 'INGREDIENT':
            this.loadProducts.emit(payload);
            break;
          case 'RECIPE':
            this.loadRecipes.emit(payload);
            break;
          default:
            console.warn(`Unknown food type: ${this.type}`);
        }
      });
  }

  ngOnDestroy(): void {
    this.$destroyed.next();
    this.$destroyed.complete();
  }

  ngAfterViewInit(): void {
    //TODO: Add observer on last element
  }

  addFoodClick() {
    const dialogRef = this.dialog.open<AddFoodComponent, AddFoodModalData, IAddFoodFormModel>(AddFoodComponent, {
      panelClass: 'fullscreen-dialog',
      data: {
        type: this.type,
        name: this.searchControl.value || undefined,
      },
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res == null || res.name == null) {
        return;
      }

      this.createFood.emit({
        name: res.name,
        type: res.ingredients.length > 0 ? 'RECIPE' : 'INGREDIENT',
        description: res.description || undefined,
        pfcc: res.pfcc,
        hidden: !!res.hidden,
        ingredients: res.ingredients.length > 0 ?
                     res.ingredients.map(i => {
                       return {
                         ...i.ingredient,
                         ingredientWeight: i.weight,
                       } as IIngredient;
                     }) :
                     null,
      });
    });
  }

  handleEditClick(id: number) {
    const ref = this.dialog.open<AddFoodComponent, AddFoodModalData, IAddFoodFormModel>(AddFoodComponent, {
      panelClass: 'fullscreen-dialog',
      data: {
        id: id,
      },
    });

    ref.afterClosed().subscribe(res => {
      if (res == null) {
        return;
      }

      this.editFood.emit({
        id: res.id!,
        name: res.name!,
        type: res.ingredients.length > 0 ? 'RECIPE' : 'INGREDIENT',
        description: res.description || undefined,
        pfcc: res.pfcc,
        hidden: res.hidden,
        ingredients: res.ingredients.length > 0 ?
                     res.ingredients.map(i => {
                       return {
                         ...i.ingredient,
                         ingredientWeight: i.weight,
                       } as IIngredient;
                     }) :
                     null,
      });
    });
  }

  handleDeleteClick(id: number) {
    this.deleteFood.emit(id);
  }

  handleTabSwitched(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.type = 'INGREDIENT';
        break;
      case 1:
        this.type = 'RECIPE';
        break;
      default:
        console.warn(`Unknown tab id: ${event.index}`);
    }
  }

  handleLoadMoreClicked() {
    switch (this.type) {
      case 'INGREDIENT':
        this.loadMoreProducts.emit();
        break;
      case 'RECIPE':
        this.loadMoreRecipes.emit();
        break;
      default:
        console.warn(`Unknown food type: ${this.type}`);
    }
  }

  protected readonly JSON = JSON;
}
