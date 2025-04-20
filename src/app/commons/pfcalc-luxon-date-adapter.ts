import {
  LuxonDateAdapter,
  MAT_LUXON_DATE_ADAPTER_OPTIONS,
  MatLuxonDateAdapterOptions,
} from '@angular/material-luxon-adapter'
import {inject, Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {Store} from '@ngxs/store'
import {ProfileState} from '../state/profile.state'
import {Language} from './models/auth.models'
import {MAT_DATE_LOCALE} from '@angular/material/core'
import {resolveLocale} from './functions'

@Injectable()
export class PfcalcLuxonDateAdapter extends LuxonDateAdapter {
  private firstDayOfWeek = 1
  private lang$: Observable<Language> = inject(Store).select(ProfileState.language)

  constructor() {
    const dateLocale = inject(MAT_DATE_LOCALE)
    const options = inject<MatLuxonDateAdapterOptions>(MAT_LUXON_DATE_ADAPTER_OPTIONS)

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
