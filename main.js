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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _commons_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons/routes */ 5045);
/* harmony import */ var _service_guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/guards */ 2269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: _commons_routes__WEBPACK_IMPORTED_MODULE_0__.dashboard,
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_slide-toggle_mjs"), __webpack_require__.e("default-src_app_components_add-food_add-food_component_ts-node_modules_rxjs_dist_esm_internal-96d9f9"), __webpack_require__.e("src_app_pages_dashboard-page_dashboard-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard-page/dashboard-page.component */ 2397)).then(mod => mod.DashboardPageComponent),
  canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_1__.isAuthenticatedGuardFn, _service_guards__WEBPACK_IMPORTED_MODULE_1__.profileConfiguredGuardFn]
}, {
  path: _commons_routes__WEBPACK_IMPORTED_MODULE_0__.signIn,
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("src_app_pages_sign-in-page_sign-in-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sign-in-page/sign-in-page.component */ 8924)).then(mod => mod.SignInPageComponent),
  canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_1__.isNotAuthenticatedGuardFn]
}, {
  path: _commons_routes__WEBPACK_IMPORTED_MODULE_0__.signUp,
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("src_app_pages_sign-up-page_sign-up-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sign-up-page/sign-up-page.component */ 3540)).then(mod => mod.SignUpPageComponent),
  canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_1__.isNotAuthenticatedGuardFn]
}, {
  path: _commons_routes__WEBPACK_IMPORTED_MODULE_0__.completeProfile,
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_slide-toggle_mjs"), __webpack_require__.e("src_app_pages_configure-profile_configure-profile_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/configure-profile/configure-profile.component */ 6678)).then(mod => mod.ConfigureProfileComponent),
  canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_1__.isAuthenticatedGuardFn]
}, {
  path: _commons_routes__WEBPACK_IMPORTED_MODULE_0__.foodsManagement,
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_slide-toggle_mjs"), __webpack_require__.e("default-src_app_components_add-food_add-food_component_ts-node_modules_rxjs_dist_esm_internal-96d9f9"), __webpack_require__.e("src_app_pages_foods-management-page_foods-management-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/foods-management-page/foods-management-page.component */ 1997)).then(mod => mod.FoodsManagementPageComponent),
  canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_1__.isAuthenticatedGuardFn, _service_guards__WEBPACK_IMPORTED_MODULE_1__.profileConfiguredGuardFn]
}, {
  path: '**',
  redirectTo: `/${_commons_routes__WEBPACK_IMPORTED_MODULE_0__.dashboard}`
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _state_ui_ui_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/ui/ui.state */ 5825);
/* harmony import */ var _state_ui_ui_state_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/ui/ui.state-model */ 1131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/heading/heading.component */ 334);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ 5819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);












class AppComponent {
  constructor(translateService, store) {
    this.translateService = translateService;
    this.store = store;
    this.menuOpened = this.store.select(_state_ui_ui_state__WEBPACK_IMPORTED_MODULE_1__.UiState.sideMenuOpened);
    store.select(_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.language).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(lang => lang != null)).subscribe(lang => translateService.use(lang));
    translateService.setDefaultLang(_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.DEFAULT_LANGUAGE);
  }
  handleMenuClosed() {
    this.store.dispatch(new _state_ui_ui_state_model__WEBPACK_IMPORTED_MODULE_2__.ToggleMenuAction(false));
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["pfc-root"]],
  decls: 7,
  vars: 3,
  consts: [["autosize", "", "hasBackdrop", "true", 1, "container"], ["mode", "over", 1, "menu-container", 3, "opened", "closedStart"], [1, "content"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-drawer-container", 0)(1, "mat-drawer", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("closedStart", function AppComponent_Template_mat_drawer_closedStart_1_listener() {
        return ctx.handleMenuClosed();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "pfc-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-drawer-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "pfc-heading")(6, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("opened", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx.menuOpened) || false);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_4__.HeadingComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatDrawerContent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.menu-container[_ngcontent-%COMP%] {\n  min-width: 220px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiAyMjBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/devtools-plugin */ 8633);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/router-plugin */ 5417);
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/logger-plugin */ 8277);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _state_auth_auth_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/auth/auth.state */ 9305);
/* harmony import */ var _state_domain_domain_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/domain/domain.state */ 908);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/heading/heading.component */ 334);
/* harmony import */ var _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngxs/form-plugin */ 5579);
/* harmony import */ var _state_form_add_food_form_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/form/add-food-form.state */ 4978);
/* harmony import */ var _state_ui_ui_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/ui/ui.state */ 5825);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/menu/menu.component */ 5819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);



























function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__.TranslateHttpLoader(http, './assets/i18n/');
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_6__.NgxsModule.forRoot([_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_7__.AuthState, _state_domain_domain_state__WEBPACK_IMPORTED_MODULE_8__.DomainState, _state_form_add_food_form_state__WEBPACK_IMPORTED_MODULE_11__.AddFoodFormState, _state_ui_ui_state__WEBPACK_IMPORTED_MODULE_12__.UiState], {
    developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
  }), _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__.NgxsRouterPluginModule.forRoot(), _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__.NgxsLoggerPluginModule.forRoot({
    disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
  }), _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_10__.NgxsFormPluginModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule.forRoot({
    defaultLanguage: 'ua',
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient]
    }
  }), _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_2__.NgxsReduxDevtoolsPluginModule.forRoot({
    disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
  }), _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_9__.HeadingComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavModule, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__.MenuComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ɵNgxsRootModule"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__.NgxsRouterPluginModule, _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__.NgxsLoggerPluginModule, _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_10__.NgxsFormPluginModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_2__.NgxsReduxDevtoolsPluginModule, _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_9__.HeadingComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavModule, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__.MenuComponent]
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
/* harmony export */   "pfccFormGroupIsNotEmpty": () => (/* binding */ pfccFormGroupIsNotEmpty),
/* harmony export */   "sum": () => (/* binding */ sum),
/* harmony export */   "sumPfccs": () => (/* binding */ sumPfccs),
/* harmony export */   "sumUndefined": () => (/* binding */ sumUndefined)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 20);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


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
function sum(v1, v2) {
  return v1 + v2;
}
const pfccFormGroupIsNotEmpty = control => {
  if (!(control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup)) {
    throw new Error('This validator can be applied only to FormGroup');
  }
  const proteinControl = control.get('protein');
  const fatControl = control.get('fat');
  const carbohydratesControl = control.get('carbohydrates');
  const caloriesControl = control.get('calories');
  if (proteinControl == null || fatControl == null || carbohydratesControl == null || caloriesControl == null) {
    throw new Error('This validator can be applied only to FormGroup containing "protein", "fat", "carbohydrates" and "calories" FormControl-s');
  }
  const protein = proteinControl.value;
  const fat = fatControl.value;
  const carbohydrates = carbohydratesControl.value;
  const calories = caloriesControl.value;
  if (protein != null && typeof protein !== 'number') {
    throw Error('Protein control value is not a number');
  }
  if (fat != null && typeof fat !== 'number') {
    throw Error('Fat control value is not a number');
  }
  if (carbohydrates != null && typeof carbohydrates !== 'number') {
    throw Error('Carbohydrates control value is not a number');
  }
  if (calories != null && typeof calories !== 'number') {
    throw Error('Calories control value is not a number');
  }
  if (protein + fat + carbohydrates + calories === 0) {
    return {
      pfccIsZero: 'PFCC all zeroes'
    };
  }
  return null;
};

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
  get isTrue() {
    return this === UnknownBoolean.TRUE;
  }
  get isFalse() {
    return this === UnknownBoolean.FALSE;
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
/* harmony export */   "foodsManagement": () => (/* binding */ foodsManagement),
/* harmony export */   "signIn": () => (/* binding */ signIn),
/* harmony export */   "signUp": () => (/* binding */ signUp)
/* harmony export */ });
const dashboard = 'dashboard';
const signIn = 'signin';
const signUp = 'signup';
const completeProfile = 'complete-profile';
const foodsManagement = 'foods';

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _state_auth_auth_state_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/auth/auth.state-models */ 8890);
/* harmony import */ var _state_auth_auth_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/auth/auth.state */ 9305);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _state_ui_ui_state_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/ui/ui.state-model */ 1131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);

















const _c0 = ["langSelector"];
function HeadingComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeadingComponent_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.handleMenuClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function HeadingComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lang_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", lang_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](lang_r5);
  }
}
class HeadingComponent {
  constructor(store) {
    this.store = store;
    //TODO: Auto-infer
    this.availableLanguages = ['ua', 'en'];
    this.isAuthenticated = this.store.select(_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_1__.AuthState.isAuthenticated);
  }
  handleLangChanged(selection) {
    this.store.dispatch(new _state_auth_auth_state_models__WEBPACK_IMPORTED_MODULE_0__.LanguageChangedEvent(selection.value));
  }
  ngAfterViewInit() {
    this.store.select(_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_1__.AuthState.language).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(value => {
      this.langSelector.writeValue(value);
    });
  }
  handleMenuClicked() {
    this.store.dispatch(new _state_ui_ui_state_model__WEBPACK_IMPORTED_MODULE_2__.ToggleMenuAction());
  }
}
HeadingComponent.ɵfac = function HeadingComponent_Factory(t) {
  return new (t || HeadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};
HeadingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HeadingComponent,
  selectors: [["pfc-heading"]],
  viewQuery: function HeadingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.langSelector = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 9,
  vars: 4,
  consts: [["mat-icon-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "flex-spacer"], ["appearance", "outline", 1, "lang-select", "mat-form-field-no-bottom"], ["fontIcon", "public"], [3, "selectionChange"], ["langSelector", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "color", "primary", 3, "click"], [3, "value"]],
  template: function HeadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, HeadingComponent_button_0_Template, 3, 0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 2)(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-select", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function HeadingComponent_Template_mat_select_selectionChange_6_listener($event) {
        return ctx.handleLangChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, HeadingComponent_mat_option_8_Template, 2, 2, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.isAuthenticated)) == null ? null : tmp_0_0.isTrue);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.availableLanguages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px;\n  box-shadow: 0 4px 5px -2px #8a8a8a;\n  display: flex;\n  flex-direction: row;\n}\n\n.lang-select[_ngcontent-%COMP%] {\n  width: 85px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkaW5nL2hlYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4ICM4YThhOGE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5sYW5nLXNlbGVjdCB7XG4gIHdpZHRoOiA4NXB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 5819:
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/router-plugin */ 5417);
/* harmony import */ var _state_ui_ui_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/ui/ui.state-model */ 1131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 9307);











class MenuComponent {
  constructor(store) {
    this.store = store;
  }
  handleRouteClick(url) {
    this.store.dispatch([new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_0__.Navigate([url]), new _state_ui_ui_state_model__WEBPACK_IMPORTED_MODULE_1__.ToggleMenuAction(false)]);
  }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store));
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["pfc-menu"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 12,
  vars: 9,
  consts: [[1, "menu-title"], [1, "pages"], [3, "click"], ["matListItemTitle", ""]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-action-list", 1)(4, "mat-list-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_Template_mat_list_item_click_4_listener() {
        return ctx.handleRouteClick("/dashboard");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-list-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_Template_mat_list_item_click_8_listener() {
        return ctx.handleRouteClick("/foods");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, "side-menu.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 5, "side-menu.dashboard"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 7, "side-menu.foods-management"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatActionList, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItemTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.pages[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.menu-title[_ngcontent-%COMP%] {\n  margin: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbn1cbi5wYWdlcyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tZW51LXRpdGxlIHtcbiAgbWFyZ2luOiA1cHggMTVweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 2269:
/*!***********************************!*\
  !*** ./src/app/service/guards.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAuthenticatedGuardFn": () => (/* binding */ isAuthenticatedGuardFn),
/* harmony export */   "isNotAuthenticatedGuardFn": () => (/* binding */ isNotAuthenticatedGuardFn),
/* harmony export */   "profileConfiguredGuardFn": () => (/* binding */ profileConfiguredGuardFn)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _state_auth_auth_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/auth/auth.state */ 9305);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/router-plugin */ 5417);
/* harmony import */ var _commons_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/routes */ 5045);
/* harmony import */ var _commons_models_common_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commons/models/common.models */ 5291);







const isAuthenticatedGuardFn = () => {
  const store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store);
  return store.select(_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_1__.AuthState.isAuthenticated).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(isAuthenticated => isAuthenticated !== _commons_models_common_models__WEBPACK_IMPORTED_MODULE_4__.UnknownBoolean.UNKNOWN), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(value => value === _commons_models_common_models__WEBPACK_IMPORTED_MODULE_4__.UnknownBoolean.TRUE), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(isAuthenticated => {
    if (!isAuthenticated) {
      store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate([`/${_commons_routes__WEBPACK_IMPORTED_MODULE_3__.signIn}`]));
    }
  }));
};
const isNotAuthenticatedGuardFn = () => {
  const store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store);
  return store.select(_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_1__.AuthState.isAuthenticated).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(isAuthenticated => isAuthenticated !== _commons_models_common_models__WEBPACK_IMPORTED_MODULE_4__.UnknownBoolean.UNKNOWN), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(value => value === _commons_models_common_models__WEBPACK_IMPORTED_MODULE_4__.UnknownBoolean.FALSE), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(isNotAuthenticated => {
    if (!isNotAuthenticated) {
      store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate([`/${_commons_routes__WEBPACK_IMPORTED_MODULE_3__.dashboard}`]));
    }
  }));
};
const profileConfiguredGuardFn = () => {
  const store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store);
  return store.select(_state_auth_auth_state__WEBPACK_IMPORTED_MODULE_1__.AuthState.profileConfigured).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(value => value !== _commons_models_common_models__WEBPACK_IMPORTED_MODULE_4__.UnknownBoolean.UNKNOWN), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(value => value === _commons_models_common_models__WEBPACK_IMPORTED_MODULE_4__.UnknownBoolean.TRUE), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(isProfileConfigured => {
    if (!isProfileConfigured) {
      store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__.Navigate([`/${_commons_routes__WEBPACK_IMPORTED_MODULE_3__.completeProfile}`]));
    }
  }));
};

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

/***/ 9042:
/*!********************************************!*\
  !*** ./src/app/service/profile.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 20);
/* harmony import */ var _commons_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commons/functions */ 8490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);





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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
          ownedByUser: false,
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
            ownedByUser: false,
            ingredientWeight: 200,
            pfcc: {
              protein: 14,
              fat: 1.2,
              carbohydrates: 154.6,
              calories: 646
            }
          }, {
            id: 17,
            type: 'ingredient',
            consistOf: null,
            name: 'Яйцо',
            isCookable: false,
            hidden: true,
            ownedByUser: false,
            ingredientWeight: 200,
            pfcc: {
              protein: 6.3,
              fat: 5,
              carbohydrates: 0,
              calories: 74
            }
          }, {
            id: 1,
            type: 'ingredient',
            name: 'СВ Задняя часть',
            isCookable: true,
            consistOf: null,
            hidden: true,
            ownedByUser: false,
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
          ingredients: [{
            id: 13,
            type: 'ingredient',
            consistOf: null,
            name: 'Рис/Макароны',
            isCookable: true,
            hidden: true,
            ownedByUser: false,
            pfcc: {
              protein: 7,
              fat: 0.6,
              carbohydrates: 77.3,
              calories: 323
            },
            ingredientWeight: 230
          }],
          pfcc: {
            protein: 3.5,
            fat: 0.3,
            carbohydrates: 38.65,
            calories: 161.5
          },
          deleted: false
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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('Sign in failed'));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
      token: 'test-token',
      ...this.mockProfile()
    });
  }
  getProfile() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
      ...this.mockProfile()
    });
  }
  signUp(email, password) {
    if (email.includes('error')) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('Sign up failed'));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
      token: 'test-token'
    });
  }
  configureProfile(aims) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
  }
  removeMeal(mealId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
  }
  addMeal(meal) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
      meal: {
        ...meal,
        id: meal.id != null ? meal.id : Math.ceil(Math.random() * 10000)
      }
    });
  }
  addDish(dish) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
      dish: {
        id: Math.ceil(Math.random() * 10000),
        cookedOn: dish.cookedOn,
        pfcc: {
          protein: 20 + Math.ceil(Math.random() * 40),
          carbohydrates: 40 + Math.ceil(Math.random() * 50),
          fat: 5 + Math.ceil(Math.random() * 15),
          calories: 100 + Math.ceil(Math.random() * 900)
        },
        name: dish.name,
        foodId: dish.foodId,
        ingredients: dish.ingredients,
        recipeWeight: dish.ingredients?.map(i => i.ingredientWeight).reduce(_commons_functions__WEBPACK_IMPORTED_MODULE_1__.sum, 0),
        cookedWeight: dish.cookedWeight,
        deleted: false
      }
    });
  }
  deleteDish(dishId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
  }
  addFood(food) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
      ...food,
      ownedByUser: false,
      id: Math.ceil(Math.random() * 10000)
    });
  }
  /**
   * Updating the food. A food might be literally updated if it's owned by the user, otherwise a new food will be created
   * @param food a food to update
   */
  updateFood(food) {
    let {
      id: _,
      ...rest
    } = food;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
      ...rest,
      id: Math.ceil(Math.random() * 10000),
      ownedByUser: false
    });
  }
  deleteFood(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(id);
  }
}
ProfileService.ɵfac = function ProfileService_Factory(t) {
  return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};
ProfileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
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
/* harmony export */   "CookADishAddIngredient": () => (/* binding */ CookADishAddIngredient),
/* harmony export */   "CookADishRemoveIngredient": () => (/* binding */ CookADishRemoveIngredient),
/* harmony export */   "CreateDishAction": () => (/* binding */ CreateDishAction),
/* harmony export */   "CreateFoodAction": () => (/* binding */ CreateFoodAction),
/* harmony export */   "CreateFoodFailedEvent": () => (/* binding */ CreateFoodFailedEvent),
/* harmony export */   "DeleteDishAction": () => (/* binding */ DeleteDishAction),
/* harmony export */   "DeleteFoodAction": () => (/* binding */ DeleteFoodAction),
/* harmony export */   "DeleteFoodFailedEvent": () => (/* binding */ DeleteFoodFailedEvent),
/* harmony export */   "DishCreatedEvent": () => (/* binding */ DishCreatedEvent),
/* harmony export */   "DishCreationFailedEvent": () => (/* binding */ DishCreationFailedEvent),
/* harmony export */   "DishDeletedEvent": () => (/* binding */ DishDeletedEvent),
/* harmony export */   "DishDeletionFailedEvent": () => (/* binding */ DishDeletionFailedEvent),
/* harmony export */   "EditFoodAction": () => (/* binding */ EditFoodAction),
/* harmony export */   "FoodCreatedEvent": () => (/* binding */ FoodCreatedEvent),
/* harmony export */   "FoodDeletedEvent": () => (/* binding */ FoodDeletedEvent),
/* harmony export */   "FoodUpdatedEvent": () => (/* binding */ FoodUpdatedEvent),
/* harmony export */   "InitiateCookADishForm": () => (/* binding */ InitiateCookADishForm),
/* harmony export */   "MealAddedSuccessfullyEvent": () => (/* binding */ MealAddedSuccessfullyEvent),
/* harmony export */   "MealAddingFailedEvent": () => (/* binding */ MealAddingFailedEvent),
/* harmony export */   "MealRemovedSuccessfullyEvent": () => (/* binding */ MealRemovedSuccessfullyEvent),
/* harmony export */   "MealRemovingFailedEvent": () => (/* binding */ MealRemovingFailedEvent),
/* harmony export */   "ProfileConfigurationFailedEvent": () => (/* binding */ ProfileConfigurationFailedEvent),
/* harmony export */   "ProfileConfiguredSuccessfullyEvent": () => (/* binding */ ProfileConfiguredSuccessfullyEvent),
/* harmony export */   "ProfileLoadedEvent": () => (/* binding */ ProfileLoadedEvent),
/* harmony export */   "RemoveMealAction": () => (/* binding */ RemoveMealAction),
/* harmony export */   "UpdateFoodFailedEvent": () => (/* binding */ UpdateFoodFailedEvent)
/* harmony export */ });
class ProfileLoadedEvent {
  constructor(profile) {
    this.profile = profile;
  }
}
ProfileLoadedEvent.type = '[DOMAIN] Profile loaded';
class ConfigureProfileAction {
  constructor(aims) {
    this.aims = aims;
  }
}
ConfigureProfileAction.type = '[DOMAIN] Configure profile';
class ProfileConfiguredSuccessfullyEvent {
  constructor(aims) {
    this.aims = aims;
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
class DishDeletedEvent {
  constructor(dishId) {
    this.dishId = dishId;
  }
}
DishDeletedEvent.type = '[DOMAIN] Dish deleted';
class DishDeletionFailedEvent {
  constructor(dishId, msg) {
    this.dishId = dishId;
    this.msg = msg;
  }
}
DishDeletionFailedEvent.type = '[DOMAIN] Dish deletion failed';
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
class InitiateCookADishForm {
  constructor(recipeId) {
    this.recipeId = recipeId;
  }
}
InitiateCookADishForm.type = '[DOMAIN] Initiate Cook a Dish form';
class CookADishAddIngredient {
  constructor(ingredient) {
    this.ingredient = ingredient;
  }
}
CookADishAddIngredient.type = '[DOMAIN] Cook a Dish - add ingredient';
class CookADishRemoveIngredient {
  constructor(idx) {
    this.idx = idx;
  }
}
CookADishRemoveIngredient.type = '[DOMAIN] Cook a Dish - remove ingredient';
class CreateDishAction {
  constructor(dish) {
    this.dish = dish;
  }
}
CreateDishAction.type = '[DOMAIN] Create dish';
class DishCreatedEvent {
  constructor(dish) {
    this.dish = dish;
  }
}
DishCreatedEvent.type = '[DOMAIN] Dish created successfully';
class DishCreationFailedEvent {
  constructor(msg) {
    this.msg = msg;
  }
}
DishCreationFailedEvent.type = '[DOMAIN] Dish creation failed';
class CreateFoodAction {
  constructor(food) {
    this.food = food;
  }
}
CreateFoodAction.type = '[DOMAIN] Create food';
class FoodCreatedEvent {
  constructor(food) {
    this.food = food;
  }
}
FoodCreatedEvent.type = '[DOMAIN] Food created';
class CreateFoodFailedEvent {
  constructor(msg) {
    this.msg = msg;
  }
}
CreateFoodFailedEvent.type = '[DOMAIN] Food creation failed';
class EditFoodAction {
  constructor(food) {
    this.food = food;
  }
}
EditFoodAction.type = '[DOMAIN] Edit food';
class FoodUpdatedEvent {
  constructor(newFood, originalFoodId) {
    this.newFood = newFood;
    this.originalFoodId = originalFoodId;
  }
}
FoodUpdatedEvent.type = '[DOMAIN] Food updated';
class UpdateFoodFailedEvent {
  constructor(msg) {
    this.msg = msg;
  }
}
UpdateFoodFailedEvent.type = '[DOMAIN] Food update failed';
class DeleteFoodAction {
  constructor(id) {
    this.id = id;
  }
}
DeleteFoodAction.type = '[DOMAIN] Delete food';
class FoodDeletedEvent {
  constructor(id) {
    this.id = id;
  }
}
FoodDeletedEvent.type = '[DOMAIN] Food deleted';
class DeleteFoodFailedEvent {
  constructor(msg) {
    this.msg = msg;
  }
}
DeleteFoodFailedEvent.type = '[DOMAIN] Food delete failed';

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _domain_state_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain.state-models */ 8859);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _commons_models_common_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commons/models/common.models */ 5291);
/* harmony import */ var _commons_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commons/functions */ 8490);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! luxon */ 20);
/* harmony import */ var _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/form-plugin */ 5579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/profile.service */ 9042);
var _class;
var DomainState_1;










const DOMAIN_STATE_NAME = 'domain';
let DomainState = DomainState_1 = (_class = class DomainState {
  constructor(service) {
    this.service = service;
  }
  static ingredientFoods(state) {
    return state.foods.filter(f => f.type === 'ingredient');
  }
  static recipeFoods(state) {
    return state.foods.filter(f => f.type === 'recipe');
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
    return (0,_commons_functions__WEBPACK_IMPORTED_MODULE_3__.sumPfccs)(...eaten);
  }
  static cookADishForm(state) {
    return state.forms.cookADish;
  }
  static cookADishUsedIngredients(state) {
    return (state.forms.cookADish.model?.ingredients || []).map(i => i.ingredient).filter(i => i != null);
  }
  static weeklyNutrients(state) {
    const eaten = state.meals.filter(m => (0,_commons_functions__WEBPACK_IMPORTED_MODULE_3__.isOnCurrentWeek)(m.eatenOn)).map(m => m.pfcc);
    return (0,_commons_functions__WEBPACK_IMPORTED_MODULE_3__.sumPfccs)(...eaten);
  }
  static todayMeals(state) {
    return state.meals.filter(m => (0,_commons_functions__WEBPACK_IMPORTED_MODULE_3__.isToday)(m.eatenOn));
  }
  static food(id) {
    return (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([DomainState_1], state => {
      return state.foods.find(f => f.id === id) || null;
    });
  }
  handleSuccessfulSignIn(ctx, action) {
    ctx.patchState({
      profile: {
        ...action.profile
      },
      meals: action.profile.meals,
      dishes: action.profile.dishes,
      foods: action.profile.foods
    });
  }
  handleDeleteDishAction(ctx, action) {
    return this.service.deleteDish(action.dishId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(_ => new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.DishDeletedEvent(action.dishId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.DishDeletionFailedEvent(action.dishId, err.message))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(ctx.dispatch));
  }
  handleDishDeletedEvent(ctx, action) {
    ctx.patchState({
      dishes: ctx.getState().dishes.map(d => {
        if (d.id !== action.dishId) {
          return d;
        } else {
          return {
            ...d,
            deleted: true
          };
        }
      })
    });
  }
  handleDishDeletionFailedEvent(ctx, action) {
    console.warn(`Failed to delete dish#${action.dishId}: ${action.msg}`);
  }
  configureProfile(ctx, action) {
    return this.service.configureProfile(action.aims).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(_ => new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.ProfileConfiguredSuccessfullyEvent(action.aims)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.ProfileConfigurationFailedEvent(err.message))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(ctx.dispatch));
  }
  handleProfileConfiguredSuccessfullyEvent(ctx, action) {
    const profile = ctx.getState().profile;
    ctx.patchState({
      profile: {
        ...profile,
        profileConfigured: true,
        aims: action.aims
      }
    });
  }
  handleProfileConfiguringFailed(ctx, action) {
    ctx.patchState({
      profile: {
        ...ctx.getState().profile,
        profileConfigured: false,
        aims: _commons_models_common_models__WEBPACK_IMPORTED_MODULE_2__.emptyPfcc
      }
    });
  }
  handleRemoveMealAction(ctx, action) {
    return this.service.removeMeal(action.mealId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(_ => new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealRemovedSuccessfullyEvent(action.mealId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealRemovingFailedEvent(action.mealId, err.message))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(ctx.dispatch));
  }
  handleMealRemovedEvent(ctx, action) {
    ctx.patchState({
      meals: ctx.getState().meals.filter(m => m.id !== action.mealId)
    });
  }
  handleMealRemovingFailed(ctx, action) {
    console.error(`Failed to remove meal, reason: ${action.msg}`);
  }
  handleCreateDishAction(ctx, action) {
    return this.service.addDish(action.dish).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(rsp => new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.DishCreatedEvent(rsp.dish)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.DishCreationFailedEvent(err.message))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(ctx.dispatch));
  }
  handleDishCreationFailedEvent(ctx, action) {
    console.log(`Failed to create a dish: ${action.msg}`);
  }
  handleDishCreatedEvent(ctx, action) {
    ctx.patchState({
      dishes: [...ctx.getState().dishes, action.dish]
    });
  }
  handleAddMealAction(ctx, action) {
    return this.service.addMeal(action.meal).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(rsp => new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealAddedSuccessfullyEvent(rsp.meal)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealAddingFailedEvent(action.meal, err.message))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(ctx.dispatch));
  }
  handleMealAddedSuccessfullyEvent(ctx, action) {
    ctx.patchState({
      meals: [...ctx.getState().meals, action.meal]
    });
  }
  handleMealAddingFailedEvent(ctx, action) {
    console.error(action.msg);
  }
  handleInitiateCookADishForm(ctx, action) {
    const foods = ctx.getState().foods;
    const recipe = foods.find(f => f.type === 'recipe' && f.id === action.recipeId);
    if (recipe == null) {
      console.warn(`Can't find recipe with provided id == ${action.recipeId}`);
      return;
    }
    const formIngredients = (recipe.consistOf || []).map((i, index) => {
      return {
        ingredient: foods.find(f => f.id === i.id),
        ingredientWeight: i.ingredientWeight,
        index
      };
    });
    ctx.dispatch(new _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_5__.ResetForm({
      path: `${DOMAIN_STATE_NAME}.forms.cookADish`,
      value: {
        name: `${recipe.name} ${luxon__WEBPACK_IMPORTED_MODULE_4__.DateTime.now().toFormat("dd.MM")}`,
        ingredients: formIngredients,
        cookedWeight: recipe.consistOf?.map(i => i.ingredientWeight).reduce((w1, w2) => w1 + w2, 0) || 0
      }
    }));
  }
  handleCookADishAddIngredient(ctx, action) {
    ctx.dispatch(new _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_5__.UpdateFormValue({
      path: `${DOMAIN_STATE_NAME}.forms.cookADish`,
      propertyPath: `ingredients.${ctx.getState().forms.cookADish?.model?.ingredients?.length || 0}`,
      value: action.ingredient
    }));
  }
  handleCookADishRemoveIngredient(ctx, action) {
    const ingredients = ctx.getState().forms.cookADish?.model?.ingredients;
    const idx = action.idx;
    if (ingredients == null || ingredients.length <= 0 || idx >= ingredients.length) {
      return;
    }
    ctx.dispatch(new _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_5__.UpdateFormValue({
      path: `${DOMAIN_STATE_NAME}.forms.cookADish`,
      propertyPath: 'ingredients',
      value: [...ingredients?.slice(0, idx), ...ingredients?.slice(idx + 1, ingredients?.length)]
    }));
  }
  handleCreateFoodAction(ctx, action) {
    return this.service.addFood({
      ...action.food,
      ownedByUser: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(food => new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.FoodCreatedEvent(food)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.CreateFoodFailedEvent(err.message))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(ctx.dispatch));
  }
  handleFoodCreatedEvent(ctx, action) {
    ctx.patchState({
      foods: [...ctx.getState().foods, action.food]
    });
  }
  handleCreateFoodFailedEvent(ctx, action) {
    console.warn(action.msg);
  }
  handleEditFoodAction(ctx, action) {
    return this.service.updateFood({
      ...action.food
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(food => new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.FoodUpdatedEvent(food, action.food.id)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.UpdateFoodFailedEvent(err.message))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(ctx.dispatch));
  }
  handleFoodUpdatedEvent(ctx, action) {
    ctx.patchState({
      foods: [...ctx.getState().foods.map(f => f.id === action.originalFoodId ? action.newFood : f)]
    });
  }
  handleUpdateFoodFailedEvent(ctx, action) {
    console.warn(action.msg);
  }
  handleDeleteFoodAction(ctx, action) {
    return this.service.deleteFood(action.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(id => new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.FoodDeletedEvent(id)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _domain_state_models__WEBPACK_IMPORTED_MODULE_1__.DeleteFoodFailedEvent(err.message))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(ctx.dispatch));
  }
  handleFoodDeletedEvent(ctx, action) {
    ctx.patchState({
      foods: [...ctx.getState().foods.filter(f => f.id !== action.id)]
    });
  }
  handleDeleteFoodFailedEvent(ctx, action) {
    console.warn(action.msg);
  }
}, _class.ɵfac = function DomainState_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_service_profile_service__WEBPACK_IMPORTED_MODULE_6__.ProfileService));
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.ProfileLoadedEvent)], DomainState.prototype, "handleSuccessfulSignIn", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.DeleteDishAction)], DomainState.prototype, "handleDeleteDishAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.DishDeletedEvent)], DomainState.prototype, "handleDishDeletedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.DishDeletionFailedEvent)], DomainState.prototype, "handleDishDeletionFailedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.ConfigureProfileAction)], DomainState.prototype, "configureProfile", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.ProfileConfiguredSuccessfullyEvent)], DomainState.prototype, "handleProfileConfiguredSuccessfullyEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.ProfileConfigurationFailedEvent)], DomainState.prototype, "handleProfileConfiguringFailed", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.RemoveMealAction)], DomainState.prototype, "handleRemoveMealAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealRemovedSuccessfullyEvent)], DomainState.prototype, "handleMealRemovedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealRemovingFailedEvent)], DomainState.prototype, "handleMealRemovingFailed", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.CreateDishAction)], DomainState.prototype, "handleCreateDishAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.DishCreationFailedEvent)], DomainState.prototype, "handleDishCreationFailedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.DishCreatedEvent)], DomainState.prototype, "handleDishCreatedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.AddMealAction)], DomainState.prototype, "handleAddMealAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealAddedSuccessfullyEvent)], DomainState.prototype, "handleMealAddedSuccessfullyEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.MealAddingFailedEvent)], DomainState.prototype, "handleMealAddingFailedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.InitiateCookADishForm)], DomainState.prototype, "handleInitiateCookADishForm", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.CookADishAddIngredient)], DomainState.prototype, "handleCookADishAddIngredient", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.CookADishRemoveIngredient)], DomainState.prototype, "handleCookADishRemoveIngredient", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.CreateFoodAction)], DomainState.prototype, "handleCreateFoodAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.FoodCreatedEvent)], DomainState.prototype, "handleFoodCreatedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.CreateFoodFailedEvent)], DomainState.prototype, "handleCreateFoodFailedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.EditFoodAction)], DomainState.prototype, "handleEditFoodAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.FoodUpdatedEvent)], DomainState.prototype, "handleFoodUpdatedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.UpdateFoodFailedEvent)], DomainState.prototype, "handleUpdateFoodFailedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.DeleteFoodAction)], DomainState.prototype, "handleDeleteFoodAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.FoodUpdatedEvent)], DomainState.prototype, "handleFoodDeletedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_domain_state_models__WEBPACK_IMPORTED_MODULE_1__.DeleteFoodFailedEvent)], DomainState.prototype, "handleDeleteFoodFailedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "ingredientFoods", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "recipeFoods", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "profile", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "dishes", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "foods", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "meals", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "foodsMap", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "dishesMap", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "todayNutrients", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "cookADishForm", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "cookADishUsedIngredients", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "weeklyNutrients", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], DomainState, "todayMeals", null);
DomainState = DomainState_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
  name: DOMAIN_STATE_NAME,
  defaults: {
    profile: null,
    dishes: [],
    foods: [],
    meals: [],
    forms: {
      cookADish: {
        model: {
          name: null,
          cookedWeight: 0,
          ingredients: []
        },
        dirty: false,
        status: 'PENDING',
        errors: {}
      }
    }
  }
})], DomainState);


/***/ }),

/***/ 8666:
/*!**********************************************************!*\
  !*** ./src/app/state/form/add-food-form.state-models.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFoodFormResetAction": () => (/* binding */ AddFoodFormResetAction),
/* harmony export */   "AddFoodFormStatusChangedEvent": () => (/* binding */ AddFoodFormStatusChangedEvent),
/* harmony export */   "AddFoodFormValueChangedEvent": () => (/* binding */ AddFoodFormValueChangedEvent),
/* harmony export */   "AddFoodIngredientsCleanedUpEvent": () => (/* binding */ AddFoodIngredientsCleanedUpEvent),
/* harmony export */   "AddFoodPfccRecalculatedEvent": () => (/* binding */ AddFoodPfccRecalculatedEvent)
/* harmony export */ });
class AddFoodFormResetAction {}
AddFoodFormResetAction.type = '[ADD FOOD] Reset form';
class AddFoodFormValueChangedEvent {
  constructor(data) {
    this.data = data;
  }
}
AddFoodFormValueChangedEvent.type = '[ADD FOOD] Form value changed';
class AddFoodFormStatusChangedEvent {
  constructor(status, errors = null) {
    this.status = status;
    this.errors = errors;
  }
}
AddFoodFormStatusChangedEvent.type = '[ADD FOOD] Form status changed';
class AddFoodPfccRecalculatedEvent {
  constructor(pfcc) {
    this.pfcc = pfcc;
  }
}
AddFoodPfccRecalculatedEvent.type = '[DOMAIN] Add food - pfcc recalculated';
class AddFoodIngredientsCleanedUpEvent {
  constructor() {}
}
AddFoodIngredientsCleanedUpEvent.type = '[DOMAIN] Add food - ingredients cleaned up';

/***/ }),

/***/ 4978:
/*!***************************************************!*\
  !*** ./src/app/state/form/add-food-form.state.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_FOOD_FORM_STATE_NAME": () => (/* binding */ ADD_FOOD_FORM_STATE_NAME),
/* harmony export */   "AddFoodFormState": () => (/* binding */ AddFoodFormState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _add_food_form_state_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-food-form.state-models */ 8666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




const ADD_FOOD_FORM_STATE_NAME = 'addFoodForm';
const DEFAULTS = {
  model: {
    name: null,
    description: null,
    isHidden: false,
    pfcc: {
      protein: 0,
      fat: 0,
      carbohydrates: 0,
      calories: 0
    },
    ingredients: []
  },
  dirty: false,
  status: 'PENDING',
  errors: null
};
let AddFoodFormState = (_class = class AddFoodFormState {
  static model(state) {
    return state.model;
  }
  static ingredients(state) {
    return state.model.ingredients;
  }
  handleAddFoodFormValueChangedEvent(ctx, action) {
    ctx.patchState({
      model: {
        ...action.data
      }
    });
  }
  handleAddFoodFormStatusChangedEvent(ctx, action) {
    ctx.patchState({
      status: action.status,
      errors: action.errors
    });
  }
  handleAddFoodFormResetAction(ctx, action) {
    ctx.setState(DEFAULTS);
  }
  handleAddFoodPfccRecalculatedEvent(ctx, action) {
    ctx.patchState({
      model: {
        ...ctx.getState().model,
        pfcc: action.pfcc
      }
    });
  }
  handleAddFoodIngredientsChangedEvent(ctx, action) {
    ctx.patchState({
      model: {
        ...ctx.getState().model,
        ingredients: []
      }
    });
  }
}, _class.ɵfac = function AddFoodFormState_Factory(t) {
  return new (t || _class)();
}, _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
}), _class);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_add_food_form_state_models__WEBPACK_IMPORTED_MODULE_1__.AddFoodFormValueChangedEvent)], AddFoodFormState.prototype, "handleAddFoodFormValueChangedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_add_food_form_state_models__WEBPACK_IMPORTED_MODULE_1__.AddFoodFormStatusChangedEvent)], AddFoodFormState.prototype, "handleAddFoodFormStatusChangedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_add_food_form_state_models__WEBPACK_IMPORTED_MODULE_1__.AddFoodFormResetAction)], AddFoodFormState.prototype, "handleAddFoodFormResetAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_add_food_form_state_models__WEBPACK_IMPORTED_MODULE_1__.AddFoodPfccRecalculatedEvent)], AddFoodFormState.prototype, "handleAddFoodPfccRecalculatedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_add_food_form_state_models__WEBPACK_IMPORTED_MODULE_1__.AddFoodIngredientsCleanedUpEvent)], AddFoodFormState.prototype, "handleAddFoodIngredientsChangedEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], AddFoodFormState, "model", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], AddFoodFormState, "ingredients", null);
AddFoodFormState = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
  name: ADD_FOOD_FORM_STATE_NAME,
  defaults: DEFAULTS
})], AddFoodFormState);


/***/ }),

/***/ 1131:
/*!********************************************!*\
  !*** ./src/app/state/ui/ui.state-model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleMenuAction": () => (/* binding */ ToggleMenuAction)
/* harmony export */ });
class ToggleMenuAction {
  constructor(isOpened) {
    this.isOpened = isOpened;
  }
}
ToggleMenuAction.type = '[UI] Toggle side menu';

/***/ }),

/***/ 5825:
/*!**************************************!*\
  !*** ./src/app/state/ui/ui.state.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI_STATE_NAME": () => (/* binding */ UI_STATE_NAME),
/* harmony export */   "UiState": () => (/* binding */ UiState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _ui_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.state-model */ 1131);



const UI_STATE_NAME = 'ui';
let UiState = class UiState {
  static sideMenuOpened(state) {
    return state.sideMenuOpened;
  }
  handleToggleMenuAction(ctx, action) {
    ctx.patchState({
      sideMenuOpened: action.isOpened != null ? action.isOpened : !ctx.getState().sideMenuOpened
    });
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_ui_state_model__WEBPACK_IMPORTED_MODULE_1__.ToggleMenuAction)], UiState.prototype, "handleToggleMenuAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], UiState, "sideMenuOpened", null);
UiState = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
  name: UI_STATE_NAME,
  defaults: {
    sideMenuOpened: false
  }
})], UiState);


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