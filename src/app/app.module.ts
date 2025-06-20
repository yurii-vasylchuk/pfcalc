import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {routes} from './app-routes'
import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin'
import {environment} from '../environments/environment'
import {NgxsRouterPluginModule} from '@ngxs/router-plugin'
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin'
import {NgxsModule} from '@ngxs/store'
import {AuthState} from './features/auth/auth.state'
import {HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http'
import {
  MissingTranslationHandler,
  TranslateCompiler,
  TranslateLoader,
  TranslateModule,
  TranslateParser,
} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import {HeadingComponent} from './components/heading/heading.component'
import {NgxsFormPluginModule} from '@ngxs/form-plugin'
import {UiState} from './state/ui/ui.state'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MenuComponent} from './components/menu/menu.component'
import {BaseUrlInterceptor} from './service/base-url.interceptor'
import {AuthInterceptor} from './service/auth.interceptor'
import {FoodsManagementState} from './features/foods-management/foods-management.state'
import {NgxsEmitPluginModule} from '@ngxs-labs/emitter'
import {NgxsActionsExecutingModule} from '@ngxs-labs/actions-executing'
import {NgxsSelectSnapshotModule} from '@ngxs-labs/select-snapshot'
import {DashboardState} from './features/dashboard/dashboard.state'
import {AddMealState} from './features/add-meal/add-meal.state'
import {ProfileState} from './state/profile.state'
import {provideRouter, RouterOutlet} from '@angular/router'
import {NavigationState} from './state/navigation.state'
import {AddFoodState} from './features/add-food/add-food.state'
import {PfccMissingTranslationHandler} from './commons/pfcc-missing-translation-handler'
import {PfccTranslateParser} from './commons/pfcc-translate-parser'
import {MAT_LUXON_DATE_ADAPTER_OPTIONS, provideLuxonDateAdapter} from '@angular/material-luxon-adapter'
import {SettingsState} from './features/settings/settings.state'
import {DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core'
import {PfcalcLuxonDateAdapter} from './commons/pfcalc-luxon-date-adapter'
import {ReportsState} from './features/reports/reports.state'
import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/')
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
        AuthState,
        UiState,
        FoodsManagementState,
        DashboardState,
        AddMealState,
        ProfileState,
        NavigationState,
        AddFoodState,
        SettingsState,
        ReportsState],
      {developmentMode: environment.ngxs.developmentMode}),
    NgxsRouterPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      disabled: !environment.ngxs.logging,
    }),
    NgxsFormPluginModule.forRoot(),
    NgxsEmitPluginModule.forRoot(),
    NgxsActionsExecutingModule.forRoot(),
    NgxsSelectSnapshotModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'UA',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      parser: {
        provide: TranslateParser,
        useClass: PfccTranslateParser,
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: PfccMissingTranslationHandler,
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler,
        // useClass: environment.production ? TranslateMessageFormatCompiler : TranslateMessageFormatDebugCompiler,
      },
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: !environment.ngxs.developmentMode,
    }),
    HeadingComponent,
    MatSidenavModule,
    MenuComponent,
    RouterOutlet,
  ],
  providers: [
    provideRouter(routes),
    provideLuxonDateAdapter(),
    {
      provide: DateAdapter,
      useClass: PfcalcLuxonDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {
}
