"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _service_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/is-authenticated.guard */ 4060);
/* harmony import */ var _service_profile_configured_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/profile-configured.guard */ 1989);
/* harmony import */ var _commons_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons/routes */ 5045);
/* harmony import */ var _service_is_not_authenticated_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/is-not-authenticated.guard */ 3447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: _commons_routes__WEBPACK_IMPORTED_MODULE_2__.dashboard,
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_button_mjs-node_modules_angular_material_fesm2-8dc5ff"), __webpack_require__.e("src_app_pages_dashboard-page_dashboard-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard-page/dashboard-page.component */ 2397)).then(mod => mod.DashboardPageComponent),
  canActivate: [_service_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.IsAuthenticatedGuard, _service_profile_configured_guard__WEBPACK_IMPORTED_MODULE_1__.ProfileConfiguredGuard]
}, {
  path: _commons_routes__WEBPACK_IMPORTED_MODULE_2__.signIn,
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_button_mjs-node_modules_angular_material_fesm2-8dc5ff"), __webpack_require__.e("src_app_pages_sign-in-page_sign-in-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sign-in-page/sign-in-page.component */ 8924)).then(mod => mod.SignInPageComponent),
  canActivate: [_service_is_not_authenticated_guard__WEBPACK_IMPORTED_MODULE_3__.IsNotAuthenticatedGuard]
}, {
  path: _commons_routes__WEBPACK_IMPORTED_MODULE_2__.signUp,
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_button_mjs-node_modules_angular_material_fesm2-8dc5ff"), __webpack_require__.e("src_app_pages_sign-up-page_sign-up-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sign-up-page/sign-up-page.component */ 3540)).then(mod => mod.SignUpPageComponent),
  canActivate: [_service_is_not_authenticated_guard__WEBPACK_IMPORTED_MODULE_3__.IsNotAuthenticatedGuard]
}, {
  path: _commons_routes__WEBPACK_IMPORTED_MODULE_2__.completeProfile,
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_button_mjs-node_modules_angular_material_fesm2-8dc5ff"), __webpack_require__.e("src_app_pages_configure-profile_configure-profile_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/configure-profile/configure-profile.component */ 6678)).then(mod => mod.ConfigureProfileComponent),
  canActivate: [_service_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.IsAuthenticatedGuard]
}, {
  path: '**',
  redirectTo: `/${_commons_routes__WEBPACK_IMPORTED_MODULE_2__.dashboard}`
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _state_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/auth/auth.state */ 9305);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/heading/heading.component */ 334);







class AppComponent {
  constructor(translateService, store) {
    this.translateService = translateService;
    this.store = store;
    store.select(_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.language).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)(lang => lang != null)).subscribe(lang => translateService.use(lang));
    translateService.setDefaultLang(_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.DEFAULT_LANGUAGE);
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["pfc-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "pfc-heading")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__.HeadingComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/devtools-plugin */ 8633);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/router-plugin */ 5417);
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/logger-plugin */ 8277);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _state_auth_auth_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/auth/auth.state */ 9305);
/* harmony import */ var _state_domain_domain_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/domain/domain.state */ 908);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/heading/heading.component */ 334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);





















function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__.TranslateHttpLoader(http, './assets/i18n/');
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_6__.NgxsModule.forRoot([_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_7__.AuthState, _state_domain_domain_state__WEBPACK_IMPORTED_MODULE_8__.DomainState], {
    developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
  }), _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__.NgxsRouterPluginModule.forRoot(), _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__.NgxsLoggerPluginModule.forRoot({
    disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
  }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
    defaultLanguage: 'ua',
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient]
    }
  }), _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_2__.NgxsReduxDevtoolsPluginModule.forRoot({
    disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
  }), _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_9__.HeadingComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ɵNgxsRootModule"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__.NgxsRouterPluginModule, _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__.NgxsLoggerPluginModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_2__.NgxsReduxDevtoolsPluginModule, _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_9__.HeadingComponent]
  });
})();

/***/ }),

/***/ 8490:
/*!**************************************!*\
  !*** ./src/app/commons/functions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "ceilPfcc": () => (/* binding */ ceilPfcc),
/* harmony export */   "isOnCurrentWeek": () => (/* binding */ isOnCurrentWeek),
/* harmony export */   "isToday": () => (/* binding */ isToday),
/* harmony export */   "multiplyPfcc": () => (/* binding */ multiplyPfcc),
/* harmony export */   "sumPfccs": () => (/* binding */ sumPfccs),
/* harmony export */   "sumUndefined": () => (/* binding */ sumUndefined)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 20);

function sumUndefined(n1, n2) {
  if (isValueAbsent(n1) && isValueAbsent(n2)) {
    return undefined;
  } else if (isValueAbsent(n1) && isDefined(n2)) {
    return n2;
  } else if (isValueAbsent(n2) && isDefined(n1)) {
    return n1;
  } else if (isDefined(n1) && isDefined(n2)) {
    return n1 + n2;
  }
  throw new Error('Illegal state');
}
function isToday(date) {
  return date.set(atStartOfDay).equals(luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now().set(atStartOfDay));
}
function isOnCurrentWeek(date) {
  return date.set(atStartOfWeek).equals(luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now().set(atStartOfWeek));
}
const atStartOfDay = {
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
const atStartOfWeek = {
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
  weekday: 1
};
function isDefined(value) {
  return value != null;
}
function isValueAbsent(value) {
  return !isDefined(value);
}
function sumPfccs(...pfccs) {
  return pfccs.reduce((m1, m2) => {
    return {
      protein: (m1.protein || 0) + (m2.protein || 0),
      fat: (m1.fat || 0) + (m2.fat || 0),
      carbohydrates: (m1.carbohydrates || 0) + (m2.carbohydrates || 0),
      calories: (m1.calories || 0) + (m2.calories || 0)
    };
  }, {});
}
function ceilPfcc(pfcc, afterDotSigns = 2, caloriesAfterDotSign = 0) {
  return {
    protein: pfcc.protein != null ? ceil(pfcc.protein, afterDotSigns) : null,
    fat: pfcc.fat != null ? ceil(pfcc.fat, afterDotSigns) : null,
    carbohydrates: pfcc.carbohydrates != null ? ceil(pfcc.carbohydrates, afterDotSigns) : null,
    calories: pfcc.calories != null ? ceil(pfcc.calories, caloriesAfterDotSign) : null
  };
}
function multiplyPfcc(pfcc, multiplier) {
  return {
    protein: pfcc.protein != null ? pfcc.protein * multiplier : null,
    fat: pfcc.fat != null ? pfcc.fat * multiplier : null,
    carbohydrates: pfcc.carbohydrates != null ? pfcc.carbohydrates * multiplier : null,
    calories: pfcc.calories != null ? pfcc.calories * multiplier : null
  };
}
function ceil(value, afterDotSigns = 2) {
  const multiplier = Math.pow(10, afterDotSigns);
  return Math.ceil(value * multiplier) / multiplier;
}

/***/ }),

/***/ 5291:
/*!*************************************************!*\
  !*** ./src/app/commons/models/common.models.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnknownBoolean": () => (/* binding */ UnknownBoolean),
/* harmony export */   "emptyPfcc": () => (/* binding */ emptyPfcc)
/* harmony export */ });
const emptyPfcc = {
  protein: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0
};
class UnknownBoolean {
  constructor(value) {
    this.value = value;
  }
  and(other) {
    if (this == UnknownBoolean.UNKNOWN || other == UnknownBoolean.UNKNOWN) {
      return UnknownBoolean.UNKNOWN;
    } else if (this == UnknownBoolean.FALSE || other == UnknownBoolean.FALSE) {
      return UnknownBoolean.FALSE;
    } else {
      return UnknownBoolean.TRUE;
    }
  }
  or(other) {
    if (this == UnknownBoolean.UNKNOWN || other == UnknownBoolean.UNKNOWN) {
      return UnknownBoolean.UNKNOWN;
    } else if (this == UnknownBoolean.FALSE && other == UnknownBoolean.FALSE) {
      return UnknownBoolean.FALSE;
    } else {
      return UnknownBoolean.TRUE;
    }
  }
  not() {
    if (this == UnknownBoolean.UNKNOWN) {
      return UnknownBoolean.UNKNOWN;
    } else if (this == UnknownBoolean.TRUE) {
      return UnknownBoolean.FALSE;
    } else {
      return UnknownBoolean.TRUE;
    }
  }
  static of(value) {
    return value ? UnknownBoolean.TRUE : UnknownBoolean.FALSE;
  }
}
UnknownBoolean.TRUE = new UnknownBoolean('TRUE');
UnknownBoolean.FALSE = new UnknownBoolean('FALSE');
UnknownBoolean.UNKNOWN = new UnknownBoolean('UNKNOWN');

/***/ }),

/***/ 5045:
/*!***********************************!*\
  !*** ./src/app/commons/routes.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "completeProfile": () => (/* binding */ completeProfile),
/* harmony export */   "dashboard": () => (/* binding */ dashboard),
/* harmony export */   "signIn": () => (/* binding */ signIn),
/* harmony export */   "signUp": () => (/* binding */ signUp)
/* harmony export */ });
const dashboard = 'dashboard';
const signIn = 'signin';
const signUp = 'signup';
const completeProfile = 'complete-profile';

/***/ }),

/***/ 334:
/*!*********************************************************!*\
  !*** ./src/app/components/heading/heading.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadingComponent": () => (/* binding */ HeadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _state_auth_auth_state_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/auth/auth.state-models */ 8890);
/* harmony import */ var _state_auth_auth_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/auth/auth.state */ 9305);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);














const _c0 = ["langSelector"];
function HeadingComponent_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", lang_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lang_r2);
  }
}
class HeadingComponent {
  constructor(store) {
    this.store = store;
    //TODO: Auto-infer
    this.availableLanguages = ['ua', 'en'];
  }
  handleLangChanged(selection) {
    this.store.dispatch(new _state_auth_auth_state_models__WEBPACK_IMPORTED_MODULE_0__.LanguageChangedEvent(selection.value));
  }
  ngAfterViewInit() {
    this.store.select(_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_1__.AuthState.language).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(value => {
      this.langSelector.writeValue(value);
    });
  }
}
HeadingComponent.ɵfac = function HeadingComponent_Factory(t) {
  return new (t || HeadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store));
};
HeadingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HeadingComponent,
  selectors: [["pfc-heading"]],
  viewQuery: function HeadingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.langSelector = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 7,
  vars: 1,
  consts: [[1, "flex-spacer"], ["appearance", "outline", 1, "lang-select", "mat-form-field-no-bottom"], ["fontIcon", "public"], [3, "selectionChange"], ["langSelector", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
  template: function HeadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 1)(2, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function HeadingComponent_Template_mat_select_selectionChange_4_listener($event) {
        return ctx.handleLangChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HeadingComponent_mat_option_6_Template, 2, 2, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.availableLanguages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px;\n  box-shadow: 0 4px 5px -2px #8a8a8a;\n  display: flex;\n  flex-direction: row;\n}\n\n.lang-select[_ngcontent-%COMP%] {\n  width: 85px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkaW5nL2hlYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4ICM4YThhOGE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5sYW5nLXNlbGVjdCB7XG4gIHdpZHRoOiA4NXB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 4060:
/*!***************************************************!*\
  !*** ./src/app/service/is-authenticated.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsAuthenticatedGuard": () => (/* binding */ IsAuthenticatedGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _state_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/auth/auth.state */ 9305);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/router-plugin */ 5417);
/* harmony import */ var _commons_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/routes */ 5045);
/* harmony import */ var _commons_models_common_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/models/common.models */ 5291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 9307);







class IsAuthenticatedGuard {
  constructor(store) {
    this.store = store;
  }
  canActivate(route, state) {
    return this.store.select(_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.isAuthenticated).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(isAuthenticated => isAuthenticated !== _commons_models_common_models__WEBPACK_IMPORTED_MODULE_3__.UnknownBoolean.UNKNOWN), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(value => value === _commons_models_common_models__WEBPACK_IMPORTED_MODULE_3__.UnknownBoolean.TRUE), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(isAuthenticated => {
      if (!isAuthenticated) {
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_1__.Navigate([`/${_commons_routes__WEBPACK_IMPORTED_MODULE_2__.signIn}`]));
      }
    }));
  }
}
IsAuthenticatedGuard.ɵfac = function IsAuthenticatedGuard_Factory(t) {
  return new (t || IsAuthenticatedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};
IsAuthenticatedGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: IsAuthenticatedGuard,
  factory: IsAuthenticatedGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3447:
/*!*******************************************************!*\
  !*** ./src/app/service/is-not-authenticated.guard.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsNotAuthenticatedGuard": () => (/* binding */ IsNotAuthenticatedGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _state_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/auth/auth.state */ 9305);
/* harmony import */ var _commons_models_common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commons/models/common.models */ 5291);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/router-plugin */ 5417);
/* harmony import */ var _commons_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/routes */ 5045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 9307);







class IsNotAuthenticatedGuard {
  constructor(store) {
    this.store = store;
  }
  canActivate(route, state) {
    return this.store.select(_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.isAuthenticated).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(isAuthenticated => isAuthenticated !== _commons_models_common_models__WEBPACK_IMPORTED_MODULE_1__.UnknownBoolean.UNKNOWN), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(value => value === _commons_models_common_models__WEBPACK_IMPORTED_MODULE_1__.UnknownBoolean.FALSE), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(isNotAuthenticated => {
      if (!isNotAuthenticated) {
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate([`/${_commons_routes__WEBPACK_IMPORTED_MODULE_3__.dashboard}`]));
      }
    }));
  }
}
IsNotAuthenticatedGuard.ɵfac = function IsNotAuthenticatedGuard_Factory(t) {
  return new (t || IsNotAuthenticatedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};
IsNotAuthenticatedGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: IsNotAuthenticatedGuard,
  factory: IsNotAuthenticatedGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7885:
/*!************************************************!*\
  !*** ./src/app/service/local-store.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStoreService": () => (/* binding */ LocalStoreService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LocalStoreService {
  constructor() {
    this.JWT_KEY = 'jwt';
  }
  loadJwtToken() {
    return localStorage.getItem(this.JWT_KEY);
  }
  saveJwtToken(token) {
    localStorage.setItem(this.JWT_KEY, token);
  }
  dropJwtToken() {
    localStorage.removeItem(this.JWT_KEY);
  }
}
LocalStoreService.ɵfac = function LocalStoreService_Factory(t) {
  return new (t || LocalStoreService)();
};
LocalStoreService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LocalStoreService,
  factory: LocalStoreService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1989:
/*!*****************************************************!*\
  !*** ./src/app/service/profile-configured.guard.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileConfiguredGuard": () => (/* binding */ ProfileConfiguredGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _state_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/auth/auth.state */ 9305);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/router-plugin */ 5417);
/* harmony import */ var _commons_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/routes */ 5045);
/* harmony import */ var _commons_models_common_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/models/common.models */ 5291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 9307);







class ProfileConfiguredGuard {
  constructor(store) {
    this.store = store;
  }
  canActivate(route, state) {
    return this.store.select(_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.profileConfigured).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(value => value !== _commons_models_common_models__WEBPACK_IMPORTED_MODULE_3__.UnknownBoolean.UNKNOWN), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(value => value === _commons_models_common_models__WEBPACK_IMPORTED_MODULE_3__.UnknownBoolean.TRUE), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(isProfileConfigured => {
      if (!isProfileConfigured) {
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_1__.Navigate([`/${_commons_routes__WEBPACK_IMPORTED_MODULE_2__.completeProfile}`]));
      }
    }));
  }
}
ProfileConfiguredGuard.ɵfac = function ProfileConfiguredGuard_Factory(t) {
  return new (t || ProfileConfiguredGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};
ProfileConfiguredGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: ProfileConfiguredGuard,
  factory: ProfileConfiguredGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9042:
/*!********************************************!*\
  !*** ./src/app/service/profile.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 20);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ProfileService {
  constructor(http) {
    this.http = http;
    this.mockProfile = () => {
      return {
        aims: {
          protein: 120,
          fat: 50,
          carbohydrates: 180,
          calories: null
        },
        base: {
          protein: null,
          fat: null,
          carbohydrates: 12.6,
          calories: 49
        },
        foods: [{
          id: 1,
          type: 'ingredient',
          name: 'СВ Задняя часть',
          isCookable: true,
          consistOf: null,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 21,
            fat: 9.6,
            carbohydrates: 0,
            calories: 176
          }
        }, {
          id: 2,
          type: 'ingredient',
          name: 'СВ Корейка',
          isCookable: true,
          consistOf: null,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 20.50,
            fat: 5.4,
            carbohydrates: 0,
            calories: 136
          }
        }, {
          id: 3,
          type: 'ingredient',
          name: 'СВ Лопатка',
          isCookable: true,
          consistOf: null,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 16.7,
            fat: 20,
            carbohydrates: 0,
            calories: 253
          }
        }, {
          id: 4,
          type: 'ingredient',
          consistOf: null,
          name: 'СВ Шея',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 16.1,
            fat: 22.8,
            carbohydrates: 0,
            calories: 267
          }
        }, {
          id: 5,
          type: 'ingredient',
          consistOf: null,
          name: 'КУР Бедро б.к.',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 25.7,
            fat: 10.7,
            carbohydrates: 0,
            calories: 207
          }
        }, {
          id: 6,
          type: 'ingredient',
          consistOf: null,
          name: 'КУР Филе',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 23,
            fat: 1.2,
            carbohydrates: 0,
            calories: 110
          }
        }, {
          id: 7,
          type: 'ingredient',
          consistOf: null,
          name: 'ГОВ Лопатка',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 20.5,
            fat: 6.2,
            carbohydrates: 0,
            calories: 144
          }
        }, {
          id: 8,
          type: 'ingredient',
          consistOf: null,
          name: 'ГОВ Вырезка',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 20.7,
            fat: 8.8,
            carbohydrates: 0,
            calories: 169
          }
        }, {
          id: 9,
          type: 'ingredient',
          consistOf: null,
          name: 'Пельмени ГБ свинные',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 14,
            fat: 11.5,
            carbohydrates: 29,
            calories: 272
          }
        }, {
          id: 10,
          type: 'ingredient',
          consistOf: null,
          name: 'Пельмени ГБ с/г',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 13,
            fat: 11.2,
            carbohydrates: 28.3,
            calories: 262
          }
        }, {
          id: 11,
          type: 'ingredient',
          consistOf: null,
          name: 'Пельмени ГБ 3 мяса',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 13,
            fat: 11.2,
            carbohydrates: 28.3,
            calories: 262
          }
        }, {
          id: 12,
          type: 'ingredient',
          consistOf: null,
          name: 'Гречка',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 13.2,
            fat: 3.4,
            carbohydrates: 71.5,
            calories: 343
          }
        }, {
          id: 13,
          type: 'ingredient',
          consistOf: null,
          name: 'Рис/Макароны',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 7,
            fat: 0.6,
            carbohydrates: 77.3,
            calories: 323
          }
        }, {
          id: 14,
          type: 'ingredient',
          consistOf: null,
          name: 'Булгур',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 12.3,
            fat: 1.3,
            carbohydrates: 75.8,
            calories: 342
          }
        }, {
          id: 15,
          type: 'ingredient',
          consistOf: null,
          name: 'Горох',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 23,
            fat: 1.2,
            carbohydrates: 53.3,
            calories: 303
          }
        }, {
          id: 16,
          type: 'ingredient',
          consistOf: null,
          name: 'Нут',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 19.3,
            fat: 6,
            carbohydrates: 60.6,
            calories: 364
          }
        }, {
          id: 17,
          type: 'ingredient',
          consistOf: null,
          name: 'Яйцо',
          isCookable: false,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 6.3,
            fat: 5,
            carbohydrates: 0,
            calories: 74
          }
        }, {
          id: 18,
          type: 'ingredient',
          consistOf: null,
          name: 'Полента',
          isCookable: true,
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 7.2,
            fat: 1.5,
            carbohydrates: 72.1,
            calories: 331
          }
        }, {
          id: 19,
          type: 'ingredient',
          consistOf: null,
          isCookable: false,
          name: 'Моцарелла',
          hidden: true,
          ownedByUser: true,
          pfcc: {
            protein: 19,
            fat: 1,
            carbohydrates: 18.5,
            calories: 246
          }
        }, {
          id: 20,
          type: 'ingredient',
          consistOf: null,
          name: 'Протеин',
          hidden: true,
          isCookable: false,
          ownedByUser: true,
          pfcc: {
            protein: 80,
            fat: 0,
            carbohydrates: 0,
            calories: 433
          }
        }, {
          id: 21,
          type: 'recipe',
          consistOf: [{
            id: 13,
            type: 'ingredient',
            consistOf: null,
            name: 'Рис/Макароны',
            isCookable: true,
            hidden: true,
            ownedByUser: true,
            ingredientWeight: 200,
            pfcc: {
              protein: 14,
              fat: 1.2,
              carbohydrates: 154.6,
              calories: 646
            }
          }, {
            id: 1,
            type: 'ingredient',
            name: 'СВ Задняя часть',
            isCookable: true,
            consistOf: null,
            hidden: true,
            ownedByUser: true,
            ingredientWeight: 50,
            pfcc: {
              protein: 10.5,
              fat: 4.8,
              carbohydrates: 0,
              calories: 88
            }
          }],
          name: 'Плов',
          hidden: true,
          isCookable: true,
          ownedByUser: true,
          pfcc: {
            protein: 80,
            fat: 0,
            carbohydrates: 0,
            calories: 433
          }
        }],
        dishes: [{
          id: 1,
          name: 'Рис',
          cookedOn: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now().set({
            weekday: 1
          }),
          foodId: 13,
          recipeWeight: 230,
          cookedWeight: 560,
          pfcc: {
            protein: 3.5,
            fat: 0.3,
            carbohydrates: 38.65,
            calories: 161.5
          }
        }],
        meals: [{
          id: 1,
          cooked: true,
          dishId: 1,
          foodId: 13,
          eatenOn: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now(),
          weight: 200,
          pfcc: {
            protein: 6.07547,
            fat: 0.52075,
            carbohydrates: 67.09056,
            calories: 280.33962
          }
        }, {
          id: 2,
          cooked: false,
          foodId: 20,
          dishId: null,
          eatenOn: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now(),
          weight: 30,
          pfcc: {
            protein: 24,
            calories: 130,
            carbohydrates: null,
            fat: null
          }
        }],
        profileConfigured: true,
        account: {
          email: 'yva@test.com',
          preferredLanguage: 'en'
        }
      };
    };
  }
  signIn(email, password) {
    if (email === 'error') {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('Sign in failed'));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      token: 'test-token',
      ...this.mockProfile()
    });
  }
  getProfile() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      ...this.mockProfile()
    });
  }
  signUp(email, password) {
    if (email.includes('error')) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('Sign up failed'));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      token: 'test-token'
    });
  }
  configureProfile(aims, base) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
  }
  removeMeal(mealId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
  }
  addMeal(meal) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      meal: {
        ...meal,
        id: meal.id != null ? meal.id : Math.ceil(Math.random() * 10000)
      }
    });
  }
}
ProfileService.ɵfac = function ProfileService_Factory(t) {
  return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
ProfileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ProfileService,
  factory: ProfileService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8890:
/*!*************************************************!*\
  !*** ./src/app/state/auth/auth.state-models.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLogOutAction": () => (/* binding */ AuthLogOutAction),
/* harmony export */   "AuthSignInAction": () => (/* binding */ AuthSignInAction),
/* harmony export */   "AuthSignInFailedEvent": () => (/* binding */ AuthSignInFailedEvent),
/* harmony export */   "AuthSignInSucceededEvent": () => (/* binding */ AuthSignInSucceededEvent),
/* harmony export */   "AuthSignUpAction": () => (/* binding */ AuthSignUpAction),
/* harmony export */   "AuthSignUpFailedEvent": () => (/* binding */ AuthSignUpFailedEvent),
/* harmony export */   "AuthSignUpSucceededEvent": () => (/* binding */ AuthSignUpSucceededEvent),
/* harmony export */   "LanguageChangedEvent": () => (/* binding */ LanguageChangedEvent)
/* harmony export */ });
class AuthSignInAction {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}
AuthSignInAction.type = '[AUTH] Sign in';
class AuthSignInSucceededEvent {
  constructor(token, isProfileConfigured, account) {
    this.token = token;
    this.isProfileConfigured = isProfileConfigured;
    this.account = account;
  }
}
AuthSignInSucceededEvent.type = '[AUTH] Sign in succeeded';
class AuthSignInFailedEvent {
  constructor(msg) {
    this.msg = msg;
  }
}
AuthSignInFailedEvent.type = '[AUTH] Sign in failed';
class AuthLogOutAction {}
AuthLogOutAction.type = '[AUTH] Log out';
class AuthSignUpAction {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}
AuthSignUpAction.type = '[AUTH] Sign up';
class AuthSignUpSucceededEvent {
  constructor(token) {
    this.token = token;
  }
}
AuthSignUpSucceededEvent.type = '[AUTH] Sign up succeeded';
class AuthSignUpFailedEvent {
  constructor(msg) {
    this.msg = msg;
  }
}
AuthSignUpFailedEvent.type = '[AUTH] Sign up failed';
class LanguageChangedEvent {
  constructor(lang) {
    this.lang = lang;
  }
}
LanguageChangedEvent.type = '[AUTH] Language changed';

/***/ }),

/***/ 9305:
/*!******************************************!*\
  !*** ./src/app/state/auth/auth.state.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthState": () => (/* binding */ AuthState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _auth_state_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.state-models */ 8890);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/router-plugin */ 5417);
/* harmony import */ var _domain_domain_state_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/domain.state-models */ 8859);
/* harmony import */ var _commons_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commons/routes */ 5045);
/* harmony import */ var _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commons/models/common.models */ 5291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/profile.service */ 9042);
/* harmony import */ var _service_local_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/local-store.service */ 7885);
var _class;
var AuthState_1;











let AuthState = AuthState_1 = (_class = class AuthState {
  constructor(profileService, localStoreService) {
    this.profileService = profileService;
    this.localStoreService = localStoreService;
  }
  static language(state) {
    return state.language;
  }
  static token(state) {
    return state.token;
  }
  static profileConfigured(state) {
    return state.loggedIn.and(state.profileConfigured);
  }
  static isAuthenticated(state) {
    return state.loggedIn;
  }
  static account(state) {
    return state.account;
  }
  ngxsOnInit(ctx) {
    const token = this.localStoreService.loadJwtToken();
    if (token == null) {
      ctx.patchState({
        loggedIn: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.FALSE
      });
      return;
    }
    this.profileService.getProfile().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(profile => {
      ctx.patchState({
        loggedIn: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.TRUE,
        token: token,
        account: profile.account,
        profileConfigured: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.of(profile.profileConfigured),
        language: profile.account.preferredLanguage
      });
      if (profile.profileConfigured) {
        ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate([_commons_routes__WEBPACK_IMPORTED_MODULE_4__.dashboard]));
      } else {
        ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate([_commons_routes__WEBPACK_IMPORTED_MODULE_4__.completeProfile]));
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(profile => new _domain_domain_state_models__WEBPACK_IMPORTED_MODULE_3__.ProfileLoadedEvent(profile))).subscribe(ctx.dispatch);
  }
  handleAuthLogOutAction(ctx, action) {
    ctx.patchState({
      token: null,
      loggedIn: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.FALSE,
      profileConfigured: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.UNKNOWN,
      account: null
    });
  }
  signIn(ctx, action) {
    return this.profileService.signIn(action.email, action.password).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.mergeMap)(rsp => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(new _domain_domain_state_models__WEBPACK_IMPORTED_MODULE_3__.ProfileLoadedEvent(rsp), new _auth_state_models__WEBPACK_IMPORTED_MODULE_1__.AuthSignInSucceededEvent(rsp.token, rsp.profileConfigured, rsp.account))), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(new _auth_state_models__WEBPACK_IMPORTED_MODULE_1__.AuthSignInFailedEvent(err.message ?? 'Sign in failed'))), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(ctx.dispatch));
  }
  signInSucceeded(ctx, action) {
    ctx.patchState({
      token: action.token,
      loggedIn: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.TRUE,
      profileConfigured: action.isProfileConfigured ? _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.TRUE : _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.FALSE,
      account: action.account,
      language: action.account.preferredLanguage
    });
    this.localStoreService.saveJwtToken(action.token);
    return action.isProfileConfigured ? ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate(['/'])) : ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate([`/${_commons_routes__WEBPACK_IMPORTED_MODULE_4__.completeProfile}`]));
  }
  handleSignInFailed(ctx, action) {
    console.warn(action.msg);
    ctx.patchState({
      token: null,
      loggedIn: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.FALSE,
      profileConfigured: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.FALSE
    });
  }
  signUp(ctx, action) {
    return this.profileService.signUp(action.email, action.password).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(rsp => new _auth_state_models__WEBPACK_IMPORTED_MODULE_1__.AuthSignUpSucceededEvent(rsp.token)), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(new _auth_state_models__WEBPACK_IMPORTED_MODULE_1__.AuthSignUpFailedEvent(err.message))), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(ctx.dispatch));
  }
  handleSignUpSuccess(ctx, action) {
    ctx.patchState({
      token: action.token,
      loggedIn: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.TRUE,
      profileConfigured: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.FALSE
    });
    this.localStoreService.saveJwtToken(action.token);
    return ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate([`/${_commons_routes__WEBPACK_IMPORTED_MODULE_4__.completeProfile}`]));
  }
  handleSignUpFailed(ctx, action) {
    console.warn(action.msg);
    ctx.patchState({
      token: null,
      loggedIn: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.FALSE,
      profileConfigured: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.FALSE
    });
  }
  handleProfileConfigured(ctx, action) {
    if (ctx.getState().loggedIn) {
      ctx.patchState({
        profileConfigured: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.TRUE
      });
      return ctx.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate(['/']));
    }
    return null;
  }
  handleProfileLoadedEvent(ctx, action) {
    ctx.patchState({
      profileConfigured: action.profile.profileConfigured ? _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.TRUE : _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.FALSE
    });
  }
  handleLanguageChangedEvent(ctx, action) {
    const account = ctx.getState().account;
    ctx.patchState({
      language: action.lang
    });
    if (account != null) {
      ctx.patchState({
        account: {
          ...account,
          preferredLanguage: action.lang
        }
      });
    }
  }
}, _class.DEFAULT_LANGUAGE = 'ua', _class.ɵfac = function AuthState_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_service_profile_service__WEBPACK_IMPORTED_MODULE_6__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_service_local_store_service__WEBPACK_IMPORTED_MODULE_7__.LocalStoreService));
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_state_models__WEBPACK_IMPORTED_MODULE_1__.AuthLogOutAction)], AuthState.prototype, "handleAuthLogOutAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_state_models__WEBPACK_IMPORTED_MODULE_1__.AuthSignInAction)], AuthState.prototype, "signIn", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_state_models__WEBPACK_IMPORTED_MODULE_1__.AuthSignInSucceededEvent)], AuthState.prototype, "signInSucceeded", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_state_models__WEBPACK_IMPORTED_MODULE_1__.AuthSignInFailedEvent)], AuthState.prototype, "handleSignInFailed", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_state_models__WEBPACK_IMPORTED_MODULE_1__.AuthSignUpAction)], AuthState.prototype, "signUp", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_state_models__WEBPACK_IMPORTED_MODULE_1__.AuthSignUpSucceededEvent)], AuthState.prototype, "handleSignUpSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_state_models__WEBPACK_IMPORTED_MODULE_1__.AuthSignUpFailedEvent)], AuthState.prototype, "handleSignUpFailed", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_3__.ProfileConfiguredSuccessfullyEvent)], AuthState.prototype, "handleProfileConfigured", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_3__.ProfileLoadedEvent)], AuthState.prototype, "handleProfileLoadedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_state_models__WEBPACK_IMPORTED_MODULE_1__.LanguageChangedEvent)], AuthState.prototype, "handleLanguageChangedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], AuthState, "language", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], AuthState, "token", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], AuthState, "profileConfigured", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], AuthState, "isAuthenticated", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], AuthState, "account", null);
AuthState = AuthState_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
  name: 'auth',
  defaults: {
    profileConfigured: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.UNKNOWN,
    loggedIn: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_5__.UnknownBoolean.UNKNOWN,
    token: null,
    account: null,
    language: AuthState_1.DEFAULT_LANGUAGE
  }
})], AuthState);


/***/ }),

/***/ 8859:
/*!*****************************************************!*\
  !*** ./src/app/state/domain/domain.state-models.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMealAction": () => (/* binding */ AddMealAction),
/* harmony export */   "ConfigureProfileAction": () => (/* binding */ ConfigureProfileAction),
/* harmony export */   "DeleteDishAction": () => (/* binding */ DeleteDishAction),
/* harmony export */   "MealAddedSuccessfullyEvent": () => (/* binding */ MealAddedSuccessfullyEvent),
/* harmony export */   "MealAddingFailedEvent": () => (/* binding */ MealAddingFailedEvent),
/* harmony export */   "MealRemovedSuccessfullyEvent": () => (/* binding */ MealRemovedSuccessfullyEvent),
/* harmony export */   "MealRemovingFailedEvent": () => (/* binding */ MealRemovingFailedEvent),
/* harmony export */   "ProfileConfigurationFailedEvent": () => (/* binding */ ProfileConfigurationFailedEvent),
/* harmony export */   "ProfileConfiguredSuccessfullyEvent": () => (/* binding */ ProfileConfiguredSuccessfullyEvent),
/* harmony export */   "ProfileLoadedEvent": () => (/* binding */ ProfileLoadedEvent),
/* harmony export */   "RemoveMealAction": () => (/* binding */ RemoveMealAction)
/* harmony export */ });
class ProfileLoadedEvent {
  constructor(profile) {
    this.profile = profile;
  }
}
ProfileLoadedEvent.type = '[DOMAIN] Profile loaded';
class ConfigureProfileAction {
  constructor(aims, base) {
    this.aims = aims;
    this.base = base;
  }
}
ConfigureProfileAction.type = '[DOMAIN] Configure profile';
class ProfileConfiguredSuccessfullyEvent {
  constructor(aims, base) {
    this.aims = aims;
    this.base = base;
  }
}
ProfileConfiguredSuccessfullyEvent.type = '[DOMAIN] Profile configuration updated';
class ProfileConfigurationFailedEvent {
  constructor(msg) {
    this.msg = msg;
  }
}
ProfileConfigurationFailedEvent.type = '[DOMAIN] Profile configuration failed';
class RemoveMealAction {
  constructor(mealId) {
    this.mealId = mealId;
  }
}
RemoveMealAction.type = '[DOMAIN] Remove meal';
class MealRemovedSuccessfullyEvent {
  constructor(mealId) {
    this.mealId = mealId;
  }
}
MealRemovedSuccessfullyEvent.type = '[DOMAIN] Meal removed';
class MealRemovingFailedEvent {
  constructor(mealId, msg) {
    this.mealId = mealId;
    this.msg = msg;
  }
}
MealRemovingFailedEvent.type = '[DOMAIN] Meal removing failed';
class DeleteDishAction {
  constructor(dishId) {
    this.dishId = dishId;
  }
}
DeleteDishAction.type = '[DOMAIN] Delete dish';
class AddMealAction {
  constructor(meal) {
    this.meal = meal;
  }
}
AddMealAction.type = '[DOMAIN] Add meal';
class MealAddedSuccessfullyEvent {
  constructor(meal) {
    this.meal = meal;
  }
}
MealAddedSuccessfullyEvent.type = '[DOMAIN] Meal added';
class MealAddingFailedEvent {
  constructor(meal, msg) {
    this.meal = meal;
    this.msg = msg;
  }
}
MealAddingFailedEvent.type = '[DOMAIN] Meal adding failed';

/***/ }),

/***/ 908:
/*!**********************************************!*\
  !*** ./src/app/state/domain/domain.state.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMAIN_STATE_NAME": () => (/* binding */ DOMAIN_STATE_NAME),
/* harmony export */   "DomainState": () => (/* binding */ DomainState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _domain_state_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain.state-models */ 8859);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _commons_models_common_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commons/models/common.models */ 5291);
/* harmony import */ var _commons_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commons/functions */ 8490);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! luxon */ 20);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/profile.service */ 9042);
var _class;









const DOMAIN_STATE_NAME = 'domain';
let DomainState = (_class = class DomainState {
  constructor(service) {
    this.service = service;
  }
  static profile(state) {
    return state.profile;
  }
  static dishes(state) {
    return state.dishes;
  }
  static foods(state) {
    return state.foods;
  }
  static meals(state) {
    return state.meals;
  }
  static foodsMap(state) {
    const result = new Map();
    state.foods.forEach(f => result.set(f.id, f));
    return result;
  }
  static dishesMap(state) {
    const result = new Map();
    state.dishes.forEach(d => result.set(d.id, d));
    return result;
  }
  static todayNutrients(state) {
    const eaten = state.meals.filter(m => (0,_commons_functions__WEBPACK_IMPORTED_MODULE_3__.isToday)(m.eatenOn)).map(m => m.pfcc);
    if (state.profile?.base != null) {
      eaten.push(state.profile?.base);
    }
    return (0,_commons_functions__WEBPACK_IMPORTED_MODULE_3__.sumPfccs)(...eaten);
  }
  static weeklyNutrients(state) {
    const eaten = state.meals.filter(m => (0,_commons_functions__WEBPACK_IMPORTED_MODULE_3__.isOnCurrentWeek)(m.eatenOn)).map(m => m.pfcc);
    if (state.profile?.base != null) {
      for (let i = 0; i <= luxon__WEBPACK_IMPORTED_MODULE_4__.DateTime.now().weekday; i++) {
        eaten.push(state.profile?.base);
      }
    }
    return (0,_commons_functions__WEBPACK_IMPORTED_MODULE_3__.sumPfccs)(...eaten);
  }
  static todayMeals(state) {
    return state.meals.filter(m => (0,_commons_functions__WEBPACK_IMPORTED_MODULE_3__.isToday)(m.eatenOn));
  }
  handleSuccessfulSignIn(ctx, action) {
    ctx.setState({
      profile: {
        ...action.profile
      },
      meals: action.profile.meals,
      dishes: action.profile.dishes,
      foods: action.profile.foods
    });
  }
  configureProfile(ctx, action) {
    return this.service.configureProfile(action.aims, action.base || null).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(_ => new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.ProfileConfiguredSuccessfullyEvent(action.aims, action.base || null)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.ProfileConfigurationFailedEvent(err.message))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(ctx.dispatch));
  }
  handleProfileConfiguredSuccessfullyEvent(ctx, action) {
    const profile = ctx.getState().profile;
    ctx.patchState({
      profile: {
        ...profile,
        profileConfigured: true,
        aims: action.aims,
        base: action.base
      }
    });
  }
  handleProfileConfiguringFailed(ctx, action) {
    ctx.patchState({
      profile: {
        ...ctx.getState().profile,
        profileConfigured: false,
        aims: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_2__.emptyPfcc,
        base: null
      }
    });
  }
  handleRemoveMealAction(ctx, action) {
    return this.service.removeMeal(action.mealId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(_ => new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealRemovedSuccessfullyEvent(action.mealId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealRemovingFailedEvent(action.mealId, err.message))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(ctx.dispatch));
  }
  handleMealRemovedEvent(ctx, action) {
    ctx.patchState({
      meals: ctx.getState().meals.filter(m => m.id !== action.mealId)
    });
  }
  handleMealRemovingFailed(ctx, action) {
    console.error(`Failed to remove meal, reason: ${action.msg}`);
  }
  handleAddMealAction(ctx, action) {
    return this.service.addMeal(action.meal).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(rsp => new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealAddedSuccessfullyEvent(rsp.meal)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealAddingFailedEvent(action.meal, err.message))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(ctx.dispatch));
  }
  handleMealAddedSuccessfullyEvent(ctx, action) {
    ctx.patchState({
      meals: [...ctx.getState().meals, action.meal]
    });
  }
  handleMealAddingFailedEvent(ctx, action) {
    console.error(action.msg);
  }
}, _class.ɵfac = function DomainState_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_service_profile_service__WEBPACK_IMPORTED_MODULE_5__.ProfileService));
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.ProfileLoadedEvent)], DomainState.prototype, "handleSuccessfulSignIn", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.ConfigureProfileAction)], DomainState.prototype, "configureProfile", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.ProfileConfiguredSuccessfullyEvent)], DomainState.prototype, "handleProfileConfiguredSuccessfullyEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.ProfileConfigurationFailedEvent)], DomainState.prototype, "handleProfileConfiguringFailed", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.RemoveMealAction)], DomainState.prototype, "handleRemoveMealAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealRemovedSuccessfullyEvent)], DomainState.prototype, "handleMealRemovedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealRemovingFailedEvent)], DomainState.prototype, "handleMealRemovingFailed", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.AddMealAction)], DomainState.prototype, "handleAddMealAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealAddedSuccessfullyEvent)], DomainState.prototype, "handleMealAddedSuccessfullyEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealAddingFailedEvent)], DomainState.prototype, "handleMealAddingFailedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "profile", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "dishes", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "foods", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "meals", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "foodsMap", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "dishesMap", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "todayNutrients", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "weeklyNutrients", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "todayMeals", null);
DomainState = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
  name: DOMAIN_STATE_NAME,
  defaults: {
    profile: null,
    dishes: [],
    foods: [],
    meals: []
  }
})], DomainState);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map