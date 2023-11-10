import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {environment} from '../environments/environment';
import {NgxsRouterPluginModule} from '@ngxs/router-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsModule} from '@ngxs/store';
import {AuthState} from './state/auth/auth.state';
import {DomainState} from './state/domain/domain.state';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HeadingComponent} from "./components/heading/heading.component";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {AddFoodFormState} from "./state/form/add-food-form.state";
import {UiState} from "./state/ui/ui.state";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MenuComponent} from "./components/menu/menu.component";
import {BaseUrlInterceptor} from "./base-url.interceptor";
import {AuthInterceptor} from "./service/auth.interceptor";
import {UiAddFoodState} from './state/ui/ui.add-food.state';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([AuthState, DomainState, AddFoodFormState, UiState, UiAddFoodState],
      {developmentMode: !environment.production}),
    NgxsRouterPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      // disabled: environment.production,
      disabled: true,
    }),
    NgxsFormPluginModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'UA',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    HeadingComponent,
    MatSidenavModule,
    MenuComponent,
  ],
  providers: [
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
