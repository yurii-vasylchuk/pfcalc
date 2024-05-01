import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../environments/environment';
import {combineLatest} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  constructor(private snackBar: MatSnackBar, private translate: TranslateService) {
  }

  warn(message: string): void {
    combineLatest(
      [
        this.translate.get(message),
        this.translate.get('alert.action'),
      ],
    ).subscribe(([translatedMsg, actionMsg]) => {
      if (translatedMsg == null || translatedMsg.trim().length === 0) {
        console.error(`Cannot find translation for alert msg: ${message}`);
        this.openBar(message, actionMsg);
        return;
      }
      this.openBar(translatedMsg, actionMsg);
    });
  }

  success(message: string): void {
    combineLatest(
      [
        this.translate.get(message),
        this.translate.get('alert.action'),
      ],
    ).subscribe(([translatedMsg, actionMsg]) => {
      if (translatedMsg == null || translatedMsg.trim().length === 0) {
        console.error(`Cannot find translation for alert msg: ${message}`);
        this.openBar(message, actionMsg);
        return;
      }
      this.openBar(translatedMsg, actionMsg);
    });
  }

  private openBar(msg: string, action: string) {
    this.snackBar.open(msg, action, {
      duration: environment.alert.duration,
      data: msg,
    });
  }
}
