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
import {Store} from "@ngxs/store";
import {DomainState} from "../../state/domain/domain.state";
import {MatButtonModule} from "@angular/material/button";
import {MatListItem, MatListModule} from "@angular/material/list";
import {FoodType, IFood, IIngredient} from "../../commons/models/domain.models";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  Subject,
  takeUntil,
} from "rxjs";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {AddFoodComponent, AddFoodModalData} from "../../components/add-food/add-food.component";
import {IAddFoodFormModel} from "../../state/form/add-food-form.state-models";
import {
  CreateFoodAction,
  DeleteFoodAction,
  EditFoodAction,
  LoadFoodsListAction,
  LoadMoreFoodsAction,
} from "../../state/domain/domain.state-models";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

@Component({
  selector: 'pfc-foods-management-page',
  standalone: true,
  imports: [CommonModule, MatTabsModule, TranslateModule, MatButtonModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './foods-management-page.component.html',
  styleUrls: ['./foods-management-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodsManagementPageComponent implements OnInit, OnDestroy, AfterViewInit {
  protected searchControl = new FormControl<string | null>(null);
  protected foods: Observable<IFood[]> = this.store.select(DomainState.foods);
  protected type = new BehaviorSubject<FoodType>('INGREDIENT');
  protected moreFoodsAvailable = this.store.select(DomainState.moreFoodsAvailable);

  @ViewChildren(MatListItem, {read: ElementRef})
  protected items!: QueryList<ElementRef>;

  protected trackFoodById: TrackByFunction<IFood> = (_, item) => {
    return item.id;
  };

  private $destroyed = new Subject<void>();

  constructor(private store: Store,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    combineLatest([
      this.searchControl.valueChanges.pipe(startWith(null), debounceTime(200), distinctUntilChanged()),
      this.type.pipe(distinctUntilChanged()),
    ]).pipe(
      takeUntil(this.$destroyed),
      map(([name, type]) => new LoadFoodsListAction(
        LoadFoodsListAction.DEFAULT_PAGE_SIZE,
        name,
        type)),
    ).subscribe(action => this.store.dispatch(action));
  }

  ngOnDestroy(): void {
    this.$destroyed.next();
    this.$destroyed.complete();
  }

  ngAfterViewInit(): void {
    //TODO: Add observer on last element
  }

  addFoodClick(type: FoodType) {
    const dialogRef = this.dialog.open<AddFoodComponent, AddFoodModalData, IAddFoodFormModel>(AddFoodComponent, {
      panelClass: 'fullscreen-dialog',
      data: {
        type: type,
        name: this.searchControl.value || undefined,
      },
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res == null || res.name == null) {
        return;
      }

      this.store.dispatch(new CreateFoodAction({
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
      }));
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

      this.store.dispatch(new EditFoodAction({
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
      }));
    });
  }

  handleDeleteClick(id: number) {
    this.store.dispatch(new DeleteFoodAction(id));
  }

  handleTabSwitched(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.type.next('INGREDIENT');
        break;
      case 1:
        this.type.next('RECIPE');
        break;
      default:
        console.warn(`Unknown tab id: ${event.index}`);
    }
  }

  handleLoadMoreClicked() {
    this.store.dispatch(new LoadMoreFoodsAction());
  }
}
