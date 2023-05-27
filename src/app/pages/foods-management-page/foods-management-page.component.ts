import {ChangeDetectionStrategy, Component, TrackByFunction} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from "@angular/material/tabs";
import {TranslateModule} from "@ngx-translate/core";
import {Store} from "@ngxs/store";
import {DomainState} from "../../state/domain/domain.state";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {IFood} from "../../commons/models/domain.models";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {BehaviorSubject, combineLatestWith, map} from "rxjs";

@Component({
  selector: 'pfc-foods-management-page',
  standalone: true,
  imports: [CommonModule, MatTabsModule, TranslateModule, MatButtonModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './foods-management-page.component.html',
  styleUrls: ['./foods-management-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodsManagementPageComponent {
  protected search = new BehaviorSubject<string | null>(null);
  protected ingredients = this.store.select(DomainState.ingredientFoods)
    .pipe(
      combineLatestWith(this.search),
      map(([foods, search]) => search == null ? foods : foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase())))
    );
  protected recipes = this.store.select(DomainState.recipeFoods)
    .pipe(
      combineLatestWith(this.search),
      map(([foods, search]) => search == null ? foods : foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase())))
    );

  protected trackFoodById: TrackByFunction<IFood> = (_, item) => {
    return item.id;
  };

  constructor(private store: Store) {
  }

  handleSearchInput(event: Event) {
    if (!(event instanceof InputEvent)) {
      return;
    }

    this.search.next(event.data);

  }
}
