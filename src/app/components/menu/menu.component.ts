import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'
import {TranslateModule} from '@ngx-translate/core'
import {MatButtonModule} from '@angular/material/button'
import {Navigate} from '@ngxs/router-plugin'
import {Store} from '@ngxs/store'
import {Ui} from '../../state/ui/ui.state-model'
import {EmitterAction} from '@ngxs-labs/emitter'
import * as fromRoutes from '../../commons/routes'
import {Auth} from '../../features/auth/auth.state-models'


@Component({
  selector: 'pfc-menu',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, TranslateModule, MatButtonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  protected readonly fromRoutes = fromRoutes

  constructor(private store: Store) {
  }

  handleRouteClick(url: string) {
    this.store.dispatch([new Navigate([url]), new EmitterAction(false, Ui.TOGGLE_SIDE_MENU)])
  }

  handleLogoutClick() {
    this.store.dispatch([
      new EmitterAction(null, Auth.LOG_OUT),
      new EmitterAction(false, Ui.TOGGLE_SIDE_MENU),
    ])
  }
}
