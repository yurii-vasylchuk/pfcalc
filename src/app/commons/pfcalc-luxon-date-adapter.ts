import {
  LuxonDateAdapter,
  MAT_LUXON_DATE_ADAPTER_OPTIONS,
  MatLuxonDateAdapterOptions,
} from '@angular/material-luxon-adapter'
import {Inject, Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {Select} from '@ngxs/store'
import {ProfileState} from '../state/profile.state'
import {Language} from './models/auth.models'
import {MAT_DATE_LOCALE} from '@angular/material/core'
import {resolveLocale} from './functions'

@Injectable()
export class PfcalcLuxonDateAdapter extends LuxonDateAdapter {
  private firstDayOfWeek = 1
  @Select(ProfileState.language)
  private lang$: Observable<Language>

  constructor(@Inject(MAT_DATE_LOCALE) dateLocale: string,
              @Inject(MAT_LUXON_DATE_ADAPTER_OPTIONS) options: MatLuxonDateAdapterOptions) {
    super(dateLocale, options)
    this.lang$.subscribe(lang => {
      switch (lang) {
        case 'EN':
          this.firstDayOfWeek = 7
          break
        case 'UA':
          this.firstDayOfWeek = 1
          break
      }

      this.setLocale(resolveLocale(lang))
    })
  }

  override getFirstDayOfWeek(): number {
    return this.firstDayOfWeek
  }
}
