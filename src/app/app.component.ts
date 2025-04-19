import {Component} from '@angular/core'
import {TranslateService} from '@ngx-translate/core'
import {Store} from '@ngxs/store'
import {filter} from 'rxjs'
import {UiState} from './state/ui/ui.state'
import {ViewSelectSnapshot} from '@ngxs-labs/select-snapshot'
import {Emittable, Emitter} from '@ngxs-labs/emitter'
import {ProfileState} from './state/profile.state'
import {Profile} from './state/profile.state-model'


@Component({
  selector: 'pfc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  @ViewSelectSnapshot(UiState.sideMenuOpened)
  protected menuOpened: boolean
  @ViewSelectSnapshot(UiState.showHeader)
  protected showHeader: boolean

  @Emitter(UiState.toggleSideMenu)
  protected toggleMenuEmt: Emittable<boolean>

  constructor(private translateService: TranslateService, private store: Store) {
    store.select(ProfileState.language)
      .pipe(
        filter(lang => lang != null),
      )
      .subscribe(lang => translateService.use(lang))

    translateService.setDefaultLang(Profile.DEFAULT_LANGUAGE)
  }

  handleMenuClosed() {
    this.toggleMenuEmt.emit(false)
  }
}
