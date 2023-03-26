import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngxs/store';
import {AuthState} from './state/auth/auth.state';
import {filter, map} from 'rxjs';

@Component({
  selector: 'pfc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translateService: TranslateService, private store: Store) {
    translateService.setDefaultLang('ua');
    translateService.use('ua');

    store.select(AuthState.account)
      .pipe(
        map(acc => acc?.preferredLanguage),
        filter(lang => lang != null),
      )
      .subscribe(lang => translateService.use(lang as string));
  }
}
