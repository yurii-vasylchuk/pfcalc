import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngxs/store';
import {AuthState} from './state/auth/auth.state';
import {filter} from 'rxjs';

@Component({
  selector: 'pfc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translateService: TranslateService, private store: Store) {
    store.select(AuthState.language)
      .pipe(
        filter(lang => lang != null)
      )
      .subscribe(lang => translateService.use(lang));

    translateService.setDefaultLang(AuthState.DEFAULT_LANGUAGE);
  }
}
