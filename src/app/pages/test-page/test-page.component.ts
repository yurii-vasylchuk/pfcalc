import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {MatButtonModule} from '@angular/material/button';
import {Emittable, Emitter} from '@ngxs-labs/emitter';
import {FoodsManagementState} from '../../state/foods-management/foods-management.state';
import {FoodsManagement} from '../../state/foods-management/foods-management.state-models';
import {Select} from '@ngxs/store';
import {ActionsExecuting, actionsExecuting} from '@ngxs-labs/actions-executing';
import {Observable} from 'rxjs';
import {SelectSnapshot} from '@ngxs-labs/select-snapshot';
import {IPage} from '../../commons/models/common.models';
import {IFood} from '../../commons/models/domain.models';

@Component({
  selector: 'pfc-test-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, NgxMatSelectSearchModule, MatButtonModule],
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent {
  @Emitter(FoodsManagementState.loadProducts)
  private loadProducts$: Emittable<FoodsManagement.LoadFoodsActionPayload>;

  @Emitter(FoodsManagementState.loadMoreProducts)
  private loadMoreProducts$: Emittable;

  @Select(actionsExecuting([{type: FoodsManagement.LOAD_PRODUCTS}, {type: FoodsManagement.LOAD_MORE_PRODUCTS}]))
  protected loadingProductsExecution$: Observable<ActionsExecuting>;

  @SelectSnapshot(FoodsManagementState.products)
  protected products: IPage<IFood>;

  loadProducts() {
    this.loadProducts$.emit({page: 0, pageSize: 10, name: null});
  }

  protected loadMoreProducts() {
    this.loadMoreProducts$.emit();
  }
}
