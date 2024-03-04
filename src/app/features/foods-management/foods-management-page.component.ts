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
import {FoodType, IFood} from "../../commons/models/domain.models";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {debounceTime, distinctUntilChanged, map, Subject, takeUntil} from "rxjs";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {ViewSelectSnapshot} from '@ngxs-labs/select-snapshot';
import {FoodsManagementState} from './foods-management.state';
import {Emittable, Emitter} from '@ngxs-labs/emitter';
import {FoodsManagement} from './foods-management.state-models';
import {hasActionsExecuting} from '@ngxs-labs/actions-executing';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {Store} from '@ngxs/store';
import {Navigate} from '@ngxs/router-plugin';
import * as fromRoutes from '../../commons/routes';

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
  @ViewSelectSnapshot(hasActionsExecuting([{type: FoodsManagement.LOAD_PRODUCTS}, {type: FoodsManagement.LOAD_MORE_PRODUCTS}]))
  protected productsLoading: boolean;
  @ViewSelectSnapshot(hasActionsExecuting([{type: FoodsManagement.LOAD_RECIPES}, {type: FoodsManagement.LOAD_MORE_RECIPES}]))
  protected recipesLoading: boolean;
  protected type: FoodType = 'INGREDIENT';
  @ViewChildren(MatListItem, {read: ElementRef})
  protected items!: QueryList<ElementRef>;
  protected searchControl = new FormControl<string | null>(null);
  protected readonly JSON = JSON;
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
  private $destroyed = new Subject<void>();

  constructor(private store: Store) {
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
    this.store.dispatch(new Navigate([fromRoutes.addFood], {
      type: this.type,
      name: this.searchControl.value || undefined,
    }));
  }

  handleEditClick(id: number) {
    this.store.dispatch(new Navigate([fromRoutes.addFood], {
      id: id,
    }));
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

  protected trackFoodById: TrackByFunction<IFood> = (_, item) => {
    return item.id;
  };
}
