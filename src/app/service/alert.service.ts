import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  constructor(private snackBar: MatSnackBar, private translate: TranslateService) {
  }

  warn(message: string): void {
    this.translate.get(message)
      .subscribe(translatedMsg => {
        if (translatedMsg == null || translatedMsg.trim().length === 0) {
          console.warn(`Cannot find translation for alert msg: ${message}`);
          this.openWarnBar(message);
          return;
        }
        this.openWarnBar(translatedMsg);
      });
  }

  private openWarnBar(msg: string) {
    this.snackBar.open(msg, 'alert.action', {
      duration: environment.alert.duration,
      data: msg,
    });
  }
}
