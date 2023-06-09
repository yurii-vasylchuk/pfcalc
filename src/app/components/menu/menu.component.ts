import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";
import {Navigate} from "@ngxs/router-plugin";
import {Store} from "@ngxs/store";
import {ToggleMenuAction} from "../../state/ui/ui.state-model";

@Component({
  selector: 'pfc-menu',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, TranslateModule, MatButtonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  constructor(private store: Store) {
  }

  handleRouteClick(url: string) {
    this.store.dispatch([new Navigate([url]), new ToggleMenuAction(false)]);
  }
}
