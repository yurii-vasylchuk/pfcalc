"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_foods-management-page_foods-management-page_component_ts"],{

/***/ 1997:
/*!********************************************************************************!*\
  !*** ./src/app/pages/foods-management-page/foods-management-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodsManagementPageComponent": () => (/* binding */ FoodsManagementPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _state_domain_domain_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/domain/domain.state */ 908);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3559);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_add_food_add_food_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/add-food/add-food.component */ 8132);
/* harmony import */ var _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/domain/domain.state-models */ 8859);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 9307);


























function FoodsManagementPageComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function FoodsManagementPageComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function FoodsManagementPageComponent_ng_template_7_mat_list_item_10_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FoodsManagementPageComponent_ng_template_7_mat_list_item_10_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const food_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.handleDeleteClick(food_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FoodsManagementPageComponent_ng_template_7_mat_list_item_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item")(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 12)(7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FoodsManagementPageComponent_ng_template_7_mat_list_item_10_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const food_r7 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.handleEditClick(food_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, FoodsManagementPageComponent_ng_template_7_mat_list_item_10_button_10_Template, 3, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const food_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](food_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 3, "common.pfcc-values", food_r7.pfcc));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", food_r7.ownedByUser);
  }
}
function FoodsManagementPageComponent_ng_template_7_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FoodsManagementPageComponent_ng_template_7_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.addFoodClick("ingredient"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "foods-management.add-ingredient-caption"), " ");
  }
}
function FoodsManagementPageComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FoodsManagementPageComponent_ng_template_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.addFoodClick("ingredient"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, FoodsManagementPageComponent_ng_template_7_mat_list_item_10_Template, 11, 6, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, FoodsManagementPageComponent_ng_template_7_button_12_Template, 3, 3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const foods_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 7, "foods-management.add-ingredient-caption"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r3.searchControl)("value", ctx_r3.searchControl.value)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 9, "foods-management.search-placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 11, foods_r4))("ngForTrackBy", ctx_r3.trackFoodById);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 13, ctx_r3.ingredients).length > 10);
  }
}
const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};
class FoodsManagementPageComponent {
  constructor(store, dialog) {
    this.store = store;
    this.dialog = dialog;
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null);
    this.ingredients = this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_0__.DomainState.ingredientFoods).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatestWith)(this.searchControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.startWith)(null))), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(([foods, search]) => search == null ? foods : foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()))));
    this.recipes = this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_0__.DomainState.recipeFoods).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatestWith)(this.searchControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.startWith)(null))), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(([foods, search]) => search == null ? foods : foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()))));
    this.trackFoodById = (_, item) => {
      return item.id;
    };
    this.JSON = JSON;
  }
  addFoodClick(type) {
    const dialogRef = this.dialog.open(_components_add_food_add_food_component__WEBPACK_IMPORTED_MODULE_1__.AddFoodComponent, {
      panelClass: 'fullscreen-dialog',
      data: {
        type: type,
        name: this.searchControl.value || undefined
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res == null || res.name == null) {
        return;
      }
      this.store.dispatch(new _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_2__.CreateFoodAction({
        name: res.name,
        type: res.ingredients.length > 0 ? 'recipe' : 'ingredient',
        description: res.description || undefined,
        pfcc: res.pfcc,
        hidden: res.isHidden,
        consistOf: res.ingredients.length > 0 ? res.ingredients.map(i => {
          return {
            ...i.ingredient,
            ingredientWeight: i.weight
          };
        }) : null
      }));
    });
  }
  handleEditClick(id) {
    const ref = this.dialog.open(_components_add_food_add_food_component__WEBPACK_IMPORTED_MODULE_1__.AddFoodComponent, {
      panelClass: 'fullscreen-dialog',
      data: {
        id: id
      }
    });
    ref.afterClosed().subscribe(res => {
      if (res == null) {
        return;
      }
      this.store.dispatch(new _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_2__.EditFoodAction({
        id: res.id,
        name: res.name,
        type: res.ingredients.length > 0 ? 'recipe' : 'ingredient',
        description: res.description || undefined,
        pfcc: res.pfcc,
        hidden: res.isHidden,
        consistOf: res.ingredients.length > 0 ? res.ingredients.map(i => {
          return {
            ...i.ingredient,
            ingredientWeight: i.weight
          };
        }) : null
      }));
    });
  }
  handleDeleteClick(id) {
    this.store.dispatch(new _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_2__.DeleteFoodAction(id));
  }
}
FoodsManagementPageComponent.ɵfac = function FoodsManagementPageComponent_Factory(t) {
  return new (t || FoodsManagementPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
};
FoodsManagementPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FoodsManagementPageComponent,
  selectors: [["pfc-foods-management-page"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 9,
  vars: 14,
  consts: [["dynamicHeight", "true"], [3, "label"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["foodListTemplate", ""], [1, "content"], ["mat-stroked-button", "", "color", "primary", 1, "content__add-btn", 3, "click"], ["matInput", "", "type", "text", 3, "formControl", "value", "placeholder"], ["matSuffix", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-stroked-button", "", "class", "content__add-btn", "color", "primary", 3, "click", 4, "ngIf"], ["matListItemTitle", ""], ["matListItemLine", ""], ["matListItemMeta", "", 1, "content__food-actions"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", 3, "click"]],
  template: function FoodsManagementPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-group", 0)(1, "mat-tab", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FoodsManagementPageComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-tab", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FoodsManagementPageComponent_ng_container_6_Template, 1, 0, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FoodsManagementPageComponent_ng_template_7_Template, 14, 15, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 6, "foods-management.ingredients-tab-label"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, ctx.ingredients));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 8, "foods-management.recipes-tab-label"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c0, ctx.recipes));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItemLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItemTitle, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItemMeta, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule],
  styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  box-sizing: border-box;\n  padding: 0;\n}\n.content__add-btn[_ngcontent-%COMP%] {\n  margin: 10px 5px;\n}\n.content__food-actions[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: row;\n  align-items: center;\n  height: 100%;\n}\n.content__edit-food-btn[_ngcontent-%COMP%] {\n  align-self: center !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZm9vZHMtbWFuYWdlbWVudC1wYWdlL2Zvb2RzLW1hbmFnZW1lbnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBSjtBQUdFO0VBQ0UsNkJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG5cbiAgJl9fYWRkLWJ0biB7XG4gICAgbWFyZ2luOiAxMHB4IDVweDtcbiAgfVxuXG4gICZfX2Zvb2QtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmX19lZGl0LWZvb2QtYnRuIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 5892:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/tabs.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_TAB": () => (/* binding */ MAT_TAB),
/* harmony export */   "MAT_TABS_CONFIG": () => (/* binding */ MAT_TABS_CONFIG),
/* harmony export */   "MAT_TAB_CONTENT": () => (/* binding */ MAT_TAB_CONTENT),
/* harmony export */   "MAT_TAB_GROUP": () => (/* binding */ MAT_TAB_GROUP),
/* harmony export */   "MAT_TAB_LABEL": () => (/* binding */ MAT_TAB_LABEL),
/* harmony export */   "MatInkBar": () => (/* binding */ MatInkBar),
/* harmony export */   "MatPaginatedTabHeader": () => (/* binding */ MatPaginatedTabHeader),
/* harmony export */   "MatTab": () => (/* binding */ MatTab),
/* harmony export */   "MatTabBody": () => (/* binding */ MatTabBody),
/* harmony export */   "MatTabBodyPortal": () => (/* binding */ MatTabBodyPortal),
/* harmony export */   "MatTabChangeEvent": () => (/* binding */ MatTabChangeEvent),
/* harmony export */   "MatTabContent": () => (/* binding */ MatTabContent),
/* harmony export */   "MatTabGroup": () => (/* binding */ MatTabGroup),
/* harmony export */   "MatTabHeader": () => (/* binding */ MatTabHeader),
/* harmony export */   "MatTabLabel": () => (/* binding */ MatTabLabel),
/* harmony export */   "MatTabLabelWrapper": () => (/* binding */ MatTabLabelWrapper),
/* harmony export */   "MatTabLink": () => (/* binding */ MatTabLink),
/* harmony export */   "MatTabNav": () => (/* binding */ MatTabNav),
/* harmony export */   "MatTabNavPanel": () => (/* binding */ MatTabNavPanel),
/* harmony export */   "MatTabsModule": () => (/* binding */ MatTabsModule),
/* harmony export */   "_MAT_INK_BAR_POSITIONER": () => (/* binding */ _MAT_INK_BAR_POSITIONER),
/* harmony export */   "_MAT_INK_BAR_POSITIONER_FACTORY": () => (/* binding */ _MAT_INK_BAR_POSITIONER_FACTORY),
/* harmony export */   "_MatTabBase": () => (/* binding */ _MatTabBase),
/* harmony export */   "_MatTabBodyBase": () => (/* binding */ _MatTabBodyBase),
/* harmony export */   "_MatTabGroupBase": () => (/* binding */ _MatTabGroupBase),
/* harmony export */   "_MatTabHeaderBase": () => (/* binding */ _MatTabHeaderBase),
/* harmony export */   "_MatTabLabelWrapperBase": () => (/* binding */ _MatTabLabelWrapperBase),
/* harmony export */   "_MatTabLinkBase": () => (/* binding */ _MatTabLinkBase),
/* harmony export */   "_MatTabNavBase": () => (/* binding */ _MatTabNavBase),
/* harmony export */   "matTabsAnimations": () => (/* binding */ matTabsAnimations)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/observers */ 3773);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 7260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/platform */ 9107);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/keycodes */ 8456);























/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material tabs.
 * @docs-private
 */
function MatTabBody_ng_template_2_Template(rf, ctx) {}
const _c0 = function (a0) {
  return {
    animationDuration: a0
  };
};
const _c1 = function (a0, a1) {
  return {
    value: a0,
    params: a1
  };
};
function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
const _c2 = ["*"];
const _c3 = ["tabListContainer"];
const _c4 = ["tabList"];
const _c5 = ["tabListInner"];
const _c6 = ["nextPaginator"];
const _c7 = ["previousPaginator"];
const _c8 = ["tabBodyWrapper"];
const _c9 = ["tabHeader"];
function MatTabGroup_div_2_ng_template_6_ng_template_0_Template(rf, ctx) {}
function MatTabGroup_div_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTabGroup_div_2_ng_template_6_ng_template_0_Template, 0, 0, "ng-template", 14);
  }
  if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
  }
}
function MatTabGroup_div_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r4.textLabel);
  }
}
function MatTabGroup_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabGroup_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const tab_r4 = restoredCtx.$implicit;
      const i_r5 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13._handleClick(tab_r4, _r0, i_r5));
    })("cdkFocusChange", function MatTabGroup_div_2_Template_div_cdkFocusChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const i_r5 = restoredCtx.index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15._tabFocusChanged($event, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 8)(3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10)(5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatTabGroup_div_2_ng_template_6_Template, 1, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatTabGroup_div_2_ng_template_7_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-tab--active", ctx_r1.selectedIndex === i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1._getTabLabelId(i_r5))("ngClass", tab_r4.labelClass)("disabled", tab_r4.disabled)("fitInkBarToContent", ctx_r1.fitInkBarToContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabIndex", ctx_r1._getTabIndex(i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex === i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r6)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r4.templateLabel)("ngIfElse", _r8);
  }
}
function MatTabGroup_mat_tab_body_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-body", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18._removeTabBodyWrapperHeight());
    })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20._setTabBodyWrapperHeight($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-body-active", ctx_r3.selectedIndex === i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r3._getTabContentId(i_r17))("ngClass", tab_r16.bodyClass)("content", tab_r16.content)("position", tab_r16.position)("origin", tab_r16.origin)("animationDuration", ctx_r3.animationDuration)("preserveContent", ctx_r3.preserveContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r3.contentTabIndex != null && ctx_r3.selectedIndex === i_r17 ? ctx_r3.contentTabIndex : null)("aria-labelledby", ctx_r3._getTabLabelId(i_r17));
  }
}
const _c10 = ["mat-tab-nav-bar", ""];
const _c11 = ["mat-tab-link", ""];
const matTabsAnimations = {
  /** Animation translates a tab along the X axis. */
  translateTab: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('translateTab', [
  // Transitions to `none` instead of 0, because some browsers might blur the content.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('center, void, left-origin-center, right-origin-center', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'none'
  })),
  // If the tab is either on the left or right, we additionally add a `min-height` of 1px
  // in order to ensure that the element has a height before its state changes. This is
  // necessary because Chrome does seem to skip the transition in RTL mode if the element does
  // not have a static height and is not rendered. See related issue: #9465
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('left', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    minHeight: '1px',
    // Normally this is redundant since we detach the content from the DOM, but if the user
    // opted into keeping the content in the DOM, we have to hide it so it isn't focusable.
    visibility: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('right', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'translate3d(100%, 0, 0)',
    minHeight: '1px',
    visibility: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => left, * => right, left => center, right => center', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => left-origin-center', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => right-origin-center', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'translate3d(100%, 0, 0)',
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The portal host directive for the contents of the tab.
 * @docs-private
 */
class MatTabBodyPortal extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet {
  constructor(componentFactoryResolver, viewContainerRef, _host, _document) {
    super(componentFactoryResolver, viewContainerRef, _document);
    this._host = _host;
    /** Subscription to events for when the tab body begins centering. */
    this._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Subscription to events for when the tab body finishes leaving from center position. */
    this._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
  }
  /** Set initial visibility or set up subscription for changing visibility. */
  ngOnInit() {
    super.ngOnInit();
    this._centeringSub = this._host._beforeCentering.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this._host._isCenterPosition(this._host._position))).subscribe(isCentering => {
      if (isCentering && !this.hasAttached()) {
        this.attach(this._host._content);
      }
    });
    this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
      if (!this._host.preserveContent) {
        this.detach();
      }
    });
  }
  /** Clean up centering subscription. */
  ngOnDestroy() {
    super.ngOnDestroy();
    this._centeringSub.unsubscribe();
    this._leavingSub.unsubscribe();
  }
}
MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) {
  return new (t || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabBody)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT));
};
MatTabBodyPortal.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatTabBodyPortal,
  selectors: [["", "matTabBodyHost", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabBodyPortal, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matTabBodyHost]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: MatTabBody,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabBody)]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * Base class with all of the `MatTabBody` functionality.
 * @docs-private
 */
class _MatTabBodyBase {
  /** The shifted index position of the tab body, where zero represents the active center tab. */
  set position(position) {
    this._positionIndex = position;
    this._computePositionAnimationState();
  }
  constructor(_elementRef, _dir, changeDetectorRef) {
    this._elementRef = _elementRef;
    this._dir = _dir;
    /** Subscription to the directionality change observable. */
    this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Emits when an animation on the tab is complete. */
    this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /** Event emitted when the tab begins to animate towards the center as the active tab. */
    this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted before the centering of the tab begins. */
    this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted before the centering of the tab begins. */
    this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the tab completes its animation towards the center. */
    this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    // Note that the default value will always be overwritten by `MatTabBody`, but we need one
    // anyway to prevent the animations module from throwing an error if the body is used on its own.
    /** Duration for the tab's animation. */
    this.animationDuration = '500ms';
    /** Whether the tab's content should be kept in the DOM while it's off-screen. */
    this.preserveContent = false;
    if (_dir) {
      this._dirChangeSubscription = _dir.change.subscribe(dir => {
        this._computePositionAnimationState(dir);
        changeDetectorRef.markForCheck();
      });
    }
    // Ensure that we get unique animation events, because the `.done` callback can get
    // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.
    this._translateTabComplete.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)((x, y) => {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe(event => {
      // If the transition to the center is complete, emit an event.
      if (this._isCenterPosition(event.toState) && this._isCenterPosition(this._position)) {
        this._onCentered.emit();
      }
      if (this._isCenterPosition(event.fromState) && !this._isCenterPosition(this._position)) {
        this._afterLeavingCenter.emit();
      }
    });
  }
  /**
   * After initialized, check if the content is centered and has an origin. If so, set the
   * special position states that transition the tab from the left or right before centering.
   */
  ngOnInit() {
    if (this._position == 'center' && this.origin != null) {
      this._position = this._computePositionFromOrigin(this.origin);
    }
  }
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
    this._translateTabComplete.complete();
  }
  _onTranslateTabStarted(event) {
    const isCentering = this._isCenterPosition(event.toState);
    this._beforeCentering.emit(isCentering);
    if (isCentering) {
      this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
    }
  }
  /** The text direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }
  /** Whether the provided position state is considered center, regardless of origin. */
  _isCenterPosition(position) {
    return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
  }
  /** Computes the position state that will be used for the tab-body animation trigger. */
  _computePositionAnimationState(dir = this._getLayoutDirection()) {
    if (this._positionIndex < 0) {
      this._position = dir == 'ltr' ? 'left' : 'right';
    } else if (this._positionIndex > 0) {
      this._position = dir == 'ltr' ? 'right' : 'left';
    } else {
      this._position = 'center';
    }
  }
  /**
   * Computes the position state based on the specified origin position. This is used if the
   * tab is becoming visible immediately after creation.
   */
  _computePositionFromOrigin(origin) {
    const dir = this._getLayoutDirection();
    if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
      return 'left-origin-center';
    }
    return 'right-origin-center';
  }
}
_MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(t) {
  return new (t || _MatTabBodyBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
_MatTabBodyBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatTabBodyBase,
  inputs: {
    _content: ["content", "_content"],
    origin: "origin",
    animationDuration: "animationDuration",
    preserveContent: "preserveContent",
    position: "position"
  },
  outputs: {
    _onCentering: "_onCentering",
    _beforeCentering: "_beforeCentering",
    _afterLeavingCenter: "_afterLeavingCenter",
    _onCentered: "_onCentered"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabBodyBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    _onCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _beforeCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _afterLeavingCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _onCentered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['content']
    }],
    origin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preserveContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */
class MatTabBody extends _MatTabBodyBase {
  constructor(elementRef, dir, changeDetectorRef) {
    super(elementRef, dir, changeDetectorRef);
  }
}
MatTabBody.ɵfac = function MatTabBody_Factory(t) {
  return new (t || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
MatTabBody.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatTabBody,
  selectors: [["mat-tab-body"]],
  viewQuery: function MatTabBody_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-tab-body"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 6,
  consts: [["cdkScrollable", "", 1, "mat-mdc-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]],
  template: function MatTabBody_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
        return ctx._onTranslateTabStarted($event);
      })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
        return ctx._translateTabComplete.next($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.animationDuration)));
    }
  },
  dependencies: [MatTabBodyPortal],
  styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*=\"visibility: hidden\"]{display:none}"],
  encapsulation: 2,
  data: {
    animation: [matTabsAnimations.translateTab]
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabBody, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab-body',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      animations: [matTabsAnimations.translateTab],
      host: {
        'class': 'mat-mdc-tab-body'
      },
      template: "<div class=\"mat-mdc-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\"\n     cdkScrollable>\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
      styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*=\"visibility: hidden\"]{display:none}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    _portalHost: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet]
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatTabContent`. It serves as
 * alternative token to the actual `MatTabContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_TAB_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabContent');
/** Decorates the `ng-template` tags and reads out the template from it. */
class MatTabContent {
  constructor( /** Content for the tab. */template) {
    this.template = template;
  }
}
MatTabContent.ɵfac = function MatTabContent_Factory(t) {
  return new (t || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
MatTabContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatTabContent,
  selectors: [["", "matTabContent", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_TAB_CONTENT,
    useExisting: MatTabContent
  }])]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matTabContent]',
      providers: [{
        provide: MAT_TAB_CONTENT,
        useExisting: MatTabContent
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
 * alternative token to the actual `MatTabLabel` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_TAB_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabLabel');
/**
 * Used to provide a tab label to a tab without causing a circular dependency.
 * @docs-private
 */
const MAT_TAB = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TAB');
/** Used to flag tab labels for use with the portal directive */
class MatTabLabel extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortal {
  constructor(templateRef, viewContainerRef, _closestTab) {
    super(templateRef, viewContainerRef);
    this._closestTab = _closestTab;
  }
}
MatTabLabel.ɵfac = function MatTabLabel_Factory(t) {
  return new (t || MatTabLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TAB, 8));
};
MatTabLabel.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatTabLabel,
  selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_TAB_LABEL,
    useExisting: MatTabLabel
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-tab-label], [matTabLabel]',
      providers: [{
        provide: MAT_TAB_LABEL,
        useExisting: MatTabLabel
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_TAB]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Class that is applied when a tab indicator is active. */
const ACTIVE_CLASS = 'mdc-tab-indicator--active';
/** Class that is applied when the tab indicator should not transition. */
const NO_TRANSITION_CLASS = 'mdc-tab-indicator--no-transition';
/**
 * Abstraction around the MDC tab indicator that acts as the tab header's ink bar.
 * @docs-private
 */
class MatInkBar {
  constructor(_items) {
    this._items = _items;
  }
  /** Hides the ink bar. */
  hide() {
    this._items.forEach(item => item.deactivateInkBar());
  }
  /** Aligns the ink bar to a DOM node. */
  alignToElement(element) {
    const correspondingItem = this._items.find(item => item.elementRef.nativeElement === element);
    const currentItem = this._currentItem;
    currentItem?.deactivateInkBar();
    if (correspondingItem) {
      const clientRect = currentItem?.elementRef.nativeElement.getBoundingClientRect?.();
      // The ink bar won't animate unless we give it the `ClientRect` of the previous item.
      correspondingItem.activateInkBar(clientRect);
      this._currentItem = correspondingItem;
    }
  }
}
/**
 * Mixin that can be used to apply the `MatInkBarItem` behavior to a class.
 * Base on MDC's `MDCSlidingTabIndicatorFoundation`:
 * https://github.com/material-components/material-components-web/blob/c0a11ef0d000a098fd0c372be8f12d6a99302855/packages/mdc-tab-indicator/sliding-foundation.ts
 * @docs-private
 */
function mixinInkBarItem(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._fitToContent = false;
    }
    /** Whether the ink bar should fit to the entire tab or just its content. */
    get fitInkBarToContent() {
      return this._fitToContent;
    }
    set fitInkBarToContent(v) {
      const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(v);
      if (this._fitToContent !== newValue) {
        this._fitToContent = newValue;
        if (this._inkBarElement) {
          this._appendInkBarElement();
        }
      }
    }
    /** Aligns the ink bar to the current item. */
    activateInkBar(previousIndicatorClientRect) {
      const element = this.elementRef.nativeElement;
      // Early exit if no indicator is present to handle cases where an indicator
      // may be activated without a prior indicator state
      if (!previousIndicatorClientRect || !element.getBoundingClientRect || !this._inkBarContentElement) {
        element.classList.add(ACTIVE_CLASS);
        return;
      }
      // This animation uses the FLIP approach. You can read more about it at the link below:
      // https://aerotwist.com/blog/flip-your-animations/
      // Calculate the dimensions based on the dimensions of the previous indicator
      const currentClientRect = element.getBoundingClientRect();
      const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
      const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
      element.classList.add(NO_TRANSITION_CLASS);
      this._inkBarContentElement.style.setProperty('transform', `translateX(${xPosition}px) scaleX(${widthDelta})`);
      // Force repaint before updating classes and transform to ensure the transform properly takes effect
      element.getBoundingClientRect();
      element.classList.remove(NO_TRANSITION_CLASS);
      element.classList.add(ACTIVE_CLASS);
      this._inkBarContentElement.style.setProperty('transform', '');
    }
    /** Removes the ink bar from the current item. */
    deactivateInkBar() {
      this.elementRef.nativeElement.classList.remove(ACTIVE_CLASS);
    }
    /** Initializes the foundation. */
    ngOnInit() {
      this._createInkBarElement();
    }
    /** Destroys the foundation. */
    ngOnDestroy() {
      this._inkBarElement?.remove();
      this._inkBarElement = this._inkBarContentElement = null;
    }
    /** Creates and appends the ink bar element. */
    _createInkBarElement() {
      const documentNode = this.elementRef.nativeElement.ownerDocument || document;
      this._inkBarElement = documentNode.createElement('span');
      this._inkBarContentElement = documentNode.createElement('span');
      this._inkBarElement.className = 'mdc-tab-indicator';
      this._inkBarContentElement.className = 'mdc-tab-indicator__content mdc-tab-indicator__content--underline';
      this._inkBarElement.appendChild(this._inkBarContentElement);
      this._appendInkBarElement();
    }
    /**
     * Appends the ink bar to the tab host element or content, depending on whether
     * the ink bar should fit to content.
     */
    _appendInkBarElement() {
      if (!this._inkBarElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Ink bar element has not been created and cannot be appended');
      }
      const parentElement = this._fitToContent ? this.elementRef.nativeElement.querySelector('.mdc-tab__content') : this.elementRef.nativeElement;
      if (!parentElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Missing element to host the ink bar');
      }
      parentElement.appendChild(this._inkBarElement);
    }
  };
}
/**
 * The default positioner function for the MatInkBar.
 * @docs-private
 */
function _MAT_INK_BAR_POSITIONER_FACTORY() {
  const method = element => ({
    left: element ? (element.offsetLeft || 0) + 'px' : '0',
    width: element ? (element.offsetWidth || 0) + 'px' : '0'
  });
  return method;
}
/** Injection token for the MatInkBar's Positioner. */
const _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatInkBarPositioner', {
  providedIn: 'root',
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTabLabelWrapper.
/** @docs-private */
const _MatTabLabelWrapperMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.mixinDisabled)(class {});
/**
 * Used in the `mat-tab-group` view to display tab labels.
 * @docs-private
 */
class _MatTabLabelWrapperBase extends _MatTabLabelWrapperMixinBase {
  constructor(elementRef) {
    super();
    this.elementRef = elementRef;
  }
  /** Sets focus on the wrapper element */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  getOffsetLeft() {
    return this.elementRef.nativeElement.offsetLeft;
  }
  getOffsetWidth() {
    return this.elementRef.nativeElement.offsetWidth;
  }
}
_MatTabLabelWrapperBase.ɵfac = function _MatTabLabelWrapperBase_Factory(t) {
  return new (t || _MatTabLabelWrapperBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
_MatTabLabelWrapperBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatTabLabelWrapperBase,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabLabelWrapperBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();
const _MatTabLabelWrapperBaseWithInkBarItem = mixinInkBarItem(_MatTabLabelWrapperBase);
/**
 * Used in the `mat-tab-group` view to display tab labels.
 * @docs-private
 */
class MatTabLabelWrapper extends _MatTabLabelWrapperBaseWithInkBarItem {}
MatTabLabelWrapper.ɵfac = /* @__PURE__ */function () {
  let ɵMatTabLabelWrapper_BaseFactory;
  return function MatTabLabelWrapper_Factory(t) {
    return (ɵMatTabLabelWrapper_BaseFactory || (ɵMatTabLabelWrapper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTabLabelWrapper)))(t || MatTabLabelWrapper);
  };
}();
MatTabLabelWrapper.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatTabLabelWrapper,
  selectors: [["", "matTabLabelWrapper", ""]],
  hostVars: 3,
  hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled",
    fitInkBarToContent: "fitInkBarToContent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabLabelWrapper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matTabLabelWrapper]',
      inputs: ['disabled', 'fitInkBarToContent'],
      host: {
        '[class.mat-mdc-tab-disabled]': 'disabled',
        '[attr.aria-disabled]': '!!disabled'
      }
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTab.
/** @docs-private */
const _MatTabMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.mixinDisabled)(class {});
/**
 * Used to provide a tab group to a tab without causing a circular dependency.
 * @docs-private
 */
const MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TAB_GROUP');
/** @docs-private */
class _MatTabBase extends _MatTabMixinBase {
  /** @docs-private */
  get content() {
    return this._contentPortal;
  }
  constructor(_viewContainerRef, _closestTabGroup) {
    super();
    this._viewContainerRef = _viewContainerRef;
    this._closestTabGroup = _closestTabGroup;
    /** Plain text label for the tab, used when there is no template label. */
    this.textLabel = '';
    /** Portal that will be the hosted content of the tab */
    this._contentPortal = null;
    /** Emits whenever the internal state of the tab changes. */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /**
     * The relatively indexed position where 0 represents the center, negative is left, and positive
     * represents the right.
     */
    this.position = null;
    /**
     * The initial relatively index origin of the tab if it was created and selected after there
     * was already a selected tab. Provides context of what position the tab should originate from.
     */
    this.origin = null;
    /**
     * Whether the tab is currently active.
     */
    this.isActive = false;
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
      this._stateChanges.next();
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  ngOnInit() {
    this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setTemplateLabelInput(value) {
    // Only update the label if the query managed to find one. This works around an issue where a
    // user may have manually set `templateLabel` during creation mode, which would then get
    // clobbered by `undefined` when the query resolves. Also note that we check that the closest
    // tab matches the current one so that we don't pick up labels from nested tabs.
    if (value && value._closestTab === this) {
      this._templateLabel = value;
    }
  }
}
_MatTabBase.ɵfac = function _MatTabBase_Factory(t) {
  return new (t || _MatTabBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TAB_GROUP, 8));
};
_MatTabBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatTabBase,
  viewQuery: function _MatTabBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
    }
  },
  inputs: {
    textLabel: ["label", "textLabel"],
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    labelClass: "labelClass",
    bodyClass: "bodyClass"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_TAB_GROUP]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    _implicitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }],
    textLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['label']
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    labelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bodyClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatTab extends _MatTabBase {
  /** Content for the tab label given by `<ng-template mat-tab-label>`. */
  get templateLabel() {
    return this._templateLabel;
  }
  set templateLabel(value) {
    this._setTemplateLabelInput(value);
  }
}
MatTab.ɵfac = /* @__PURE__ */function () {
  let ɵMatTab_BaseFactory;
  return function MatTab_Factory(t) {
    return (ɵMatTab_BaseFactory || (ɵMatTab_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTab)))(t || MatTab);
  };
}();
MatTab.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatTab,
  selectors: [["mat-tab"]],
  contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabContent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLabel, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
    }
  },
  inputs: {
    disabled: "disabled"
  },
  exportAs: ["matTab"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_TAB,
    useExisting: MatTab
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 1,
  vars: 0,
  template: function MatTab_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTab, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab',
      inputs: ['disabled'],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matTab',
      providers: [{
        provide: MAT_TAB,
        useExisting: MatTab
      }],
      template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n"
    }]
  }], null, {
    _explicitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatTabContent, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    templateLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatTabLabel]
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Config used to bind passive event listeners */
const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 * Set a little conservatively in order to handle fake events dispatched on touch devices.
 */
const HEADER_SCROLL_DELAY = 650;
/**
 * Interval in milliseconds at which to scroll the header
 * while the user is holding their pointer.
 */
const HEADER_SCROLL_INTERVAL = 100;
/**
 * Base class for a tab header that supported pagination.
 * @docs-private
 */
class MatPaginatedTabHeader {
  /**
   * Whether pagination should be disabled. This can be used to avoid unnecessary
   * layout recalculations if it's known that pagination won't be required.
   */
  get disablePagination() {
    return this._disablePagination;
  }
  set disablePagination(value) {
    this._disablePagination = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
  }
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceNumberProperty)(value);
    if (this._selectedIndex != value) {
      this._selectedIndexChanged = true;
      this._selectedIndex = value;
      if (this._keyManager) {
        this._keyManager.updateActiveItem(value);
      }
    }
  }
  constructor(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._viewportRuler = _viewportRuler;
    this._dir = _dir;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._animationMode = _animationMode;
    /** The distance in pixels that the tab labels should be translated to the left. */
    this._scrollDistance = 0;
    /** Whether the header should scroll to the selected index after the view has been checked. */
    this._selectedIndexChanged = false;
    /** Emits when the component is destroyed. */
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /** Whether the controls for pagination should be displayed */
    this._showPaginationControls = false;
    /** Whether the tab list can be scrolled more towards the end of the tab label list. */
    this._disableScrollAfter = true;
    /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
    this._disableScrollBefore = true;
    /** Stream that will stop the automated scrolling. */
    this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this._disablePagination = false;
    this._selectedIndex = 0;
    /** Event emitted when the option is selected. */
    this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when a label is focused. */
    this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.
    _ngZone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(_elementRef.nativeElement, 'mouseleave').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(() => {
        this._stopInterval();
      });
    });
  }
  ngAfterViewInit() {
    // We need to handle these events manually, because we want to bind passive event listeners.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress('before');
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress('after');
    });
  }
  ngAfterContentInit() {
    const dirChange = this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)('ltr');
    const resize = this._viewportRuler.change(150);
    const realign = () => {
      this.updatePagination();
      this._alignInkBarToSelectedTab();
    };
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__.FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap()
    // Allow focus to land on disabled tabs, as per https://w3c.github.io/aria-practices/#kbd_disabled_controls
    .skipPredicate(() => false);
    this._keyManager.updateActiveItem(this._selectedIndex);
    // Defer the first call in order to allow for slower browsers to lay out the elements.
    // This helps in cases where the user lands directly on a page with paginated tabs.
    // Note that we use `onStable` instead of `requestAnimationFrame`, because the latter
    // can hold up tests that are in a background tab.
    this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(realign);
    // On dir change or window resize, realign the ink bar and update the orientation of
    // the key manager if the direction has changed.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(dirChange, resize, this._items.changes, this._itemsResized()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(() => {
      // We need to defer this to give the browser some time to recalculate
      // the element dimensions. The call has to be wrapped in `NgZone.run`,
      // because the viewport change handler runs outside of Angular.
      this._ngZone.run(() => {
        Promise.resolve().then(() => {
          // Clamp the scroll distance, because it can change with the number of tabs.
          this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
          realign();
        });
      });
      this._keyManager.withHorizontalOrientation(this._getLayoutDirection());
    });
    // If there is a change in the focus key manager we need to emit the `indexFocused`
    // event in order to provide a public event that notifies about focus changes. Also we realign
    // the tabs container by scrolling the new focused tab into the visible section.
    this._keyManager.change.subscribe(newFocusIndex => {
      this.indexFocused.emit(newFocusIndex);
      this._setTabFocus(newFocusIndex);
    });
  }
  /** Sends any changes that could affect the layout of the items. */
  _itemsResized() {
    if (typeof ResizeObserver !== 'function') {
      return rxjs__WEBPACK_IMPORTED_MODULE_18__.EMPTY;
    }
    return this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this._items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(tabItems => new rxjs__WEBPACK_IMPORTED_MODULE_20__.Observable(observer => this._ngZone.runOutsideAngular(() => {
      const resizeObserver = new ResizeObserver(entries => observer.next(entries));
      tabItems.forEach(item => resizeObserver.observe(item.elementRef.nativeElement));
      return () => {
        resizeObserver.disconnect();
      };
    }))),
    // Skip the first emit since the resize observer emits when an item
    // is observed for new items when the tab is already inserted
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.skip)(1),
    // Skip emissions where all the elements are invisible since we don't want
    // the header to try and re-render with invalid measurements. See #25574.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.filter)(entries => entries.some(e => e.contentRect.width > 0 && e.contentRect.height > 0)));
  }
  ngAfterContentChecked() {
    // If the number of tab labels have changed, check if scrolling should be enabled
    if (this._tabLabelCount != this._items.length) {
      this.updatePagination();
      this._tabLabelCount = this._items.length;
      this._changeDetectorRef.markForCheck();
    }
    // If the selected index has changed, scroll to the label and check if the scrolling controls
    // should be disabled.
    if (this._selectedIndexChanged) {
      this._scrollToLabel(this._selectedIndex);
      this._checkScrollingControls();
      this._alignInkBarToSelectedTab();
      this._selectedIndexChanged = false;
      this._changeDetectorRef.markForCheck();
    }
    // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
    // then translate the header to reflect this.
    if (this._scrollDistanceChanged) {
      this._updateTabScrollPosition();
      this._scrollDistanceChanged = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this._stopScrolling.complete();
  }
  /** Handles keyboard events on the header. */
  _handleKeydown(event) {
    // We don't handle any key bindings with a modifier key.
    if ((0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_23__.hasModifierKey)(event)) {
      return;
    }
    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_23__.ENTER:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_23__.SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          const item = this._items.get(this.focusIndex);
          if (item && !item.disabled) {
            this.selectFocusedIndex.emit(this.focusIndex);
            this._itemSelected(event);
          }
        }
        break;
      default:
        this._keyManager.onKeydown(event);
    }
  }
  /**
   * Callback for when the MutationObserver detects that the content has changed.
   */
  _onContentChanges() {
    const textContent = this._elementRef.nativeElement.textContent;
    // We need to diff the text content of the header, because the MutationObserver callback
    // will fire even if the text content didn't change which is inefficient and is prone
    // to infinite loops if a poorly constructed expression is passed in (see #14249).
    if (textContent !== this._currentTextContent) {
      this._currentTextContent = textContent || '';
      // The content observer runs outside the `NgZone` by default, which
      // means that we need to bring the callback back in ourselves.
      this._ngZone.run(() => {
        this.updatePagination();
        this._alignInkBarToSelectedTab();
        this._changeDetectorRef.markForCheck();
      });
    }
  }
  /**
   * Updates the view whether pagination should be enabled or not.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    this._checkPaginationEnabled();
    this._checkScrollingControls();
    this._updateTabScrollPosition();
  }
  /** Tracks which element has focus; used for keyboard navigation */
  get focusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : 0;
  }
  /** When the focus index is set, we must manually send focus to the correct label */
  set focusIndex(value) {
    if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
      return;
    }
    this._keyManager.setActiveItem(value);
  }
  /**
   * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
   * providing a valid index and return true.
   */
  _isValidIndex(index) {
    return this._items ? !!this._items.toArray()[index] : true;
  }
  /**
   * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
   * scrolling is enabled.
   */
  _setTabFocus(tabIndex) {
    if (this._showPaginationControls) {
      this._scrollToLabel(tabIndex);
    }
    if (this._items && this._items.length) {
      this._items.toArray()[tabIndex].focus();
      // Do not let the browser manage scrolling to focus the element, this will be handled
      // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
      // should be the full width minus the offset width.
      const containerEl = this._tabListContainer.nativeElement;
      const dir = this._getLayoutDirection();
      if (dir == 'ltr') {
        containerEl.scrollLeft = 0;
      } else {
        containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
      }
    }
  }
  /** The layout direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }
  /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
  _updateTabScrollPosition() {
    if (this.disablePagination) {
      return;
    }
    const scrollDistance = this.scrollDistance;
    const translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
    // Don't use `translate3d` here because we don't want to create a new layer. A new layer
    // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
    // and ripples will exceed the boundaries of the visible tab bar.
    // See: https://github.com/angular/components/issues/10276
    // We round the `transform` here, because transforms with sub-pixel precision cause some
    // browsers to blur the content of the element.
    this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
    // Setting the `transform` on IE will change the scroll offset of the parent, causing the
    // position to be thrown off in some cases. We have to reset it ourselves to ensure that
    // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
    // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
    if (this._platform.TRIDENT || this._platform.EDGE) {
      this._tabListContainer.nativeElement.scrollLeft = 0;
    }
  }
  /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
  get scrollDistance() {
    return this._scrollDistance;
  }
  set scrollDistance(value) {
    this._scrollTo(value);
  }
  /**
   * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
   * the end of the list, respectively). The distance to scroll is computed to be a third of the
   * length of the tab list view window.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollHeader(direction) {
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    // Move the scroll distance one-third the length of the tab list's viewport.
    const scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
    return this._scrollTo(this._scrollDistance + scrollAmount);
  }
  /** Handles click events on the pagination arrows. */
  _handlePaginatorClick(direction) {
    this._stopInterval();
    this._scrollHeader(direction);
  }
  /**
   * Moves the tab list such that the desired tab label (marked by index) is moved into view.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollToLabel(labelIndex) {
    if (this.disablePagination) {
      return;
    }
    const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
    if (!selectedLabel) {
      return;
    }
    // The view length is the visible width of the tab labels.
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const {
      offsetLeft,
      offsetWidth
    } = selectedLabel.elementRef.nativeElement;
    let labelBeforePos, labelAfterPos;
    if (this._getLayoutDirection() == 'ltr') {
      labelBeforePos = offsetLeft;
      labelAfterPos = labelBeforePos + offsetWidth;
    } else {
      labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
      labelBeforePos = labelAfterPos - offsetWidth;
    }
    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;
    if (labelBeforePos < beforeVisiblePos) {
      // Scroll header to move label to the before direction
      this.scrollDistance -= beforeVisiblePos - labelBeforePos;
    } else if (labelAfterPos > afterVisiblePos) {
      // Scroll header to move label to the after direction
      this.scrollDistance += Math.min(labelAfterPos - afterVisiblePos, labelBeforePos - beforeVisiblePos);
    }
  }
  /**
   * Evaluate whether the pagination controls should be displayed. If the scroll width of the
   * tab list is wider than the size of the header container, then the pagination controls should
   * be shown.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkPaginationEnabled() {
    if (this.disablePagination) {
      this._showPaginationControls = false;
    } else {
      const isEnabled = this._tabListInner.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
      if (!isEnabled) {
        this.scrollDistance = 0;
      }
      if (isEnabled !== this._showPaginationControls) {
        this._changeDetectorRef.markForCheck();
      }
      this._showPaginationControls = isEnabled;
    }
  }
  /**
   * Evaluate whether the before and after controls should be enabled or disabled.
   * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
   * before button. If the header is at the end of the list (scroll distance is equal to the
   * maximum distance we can scroll), then disable the after button.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkScrollingControls() {
    if (this.disablePagination) {
      this._disableScrollAfter = this._disableScrollBefore = true;
    } else {
      // Check if the pagination arrows should be activated.
      this._disableScrollBefore = this.scrollDistance == 0;
      this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Determines what is the maximum length in pixels that can be set for the scroll distance. This
   * is equal to the difference in width between the tab list container and tab header container.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _getMaxScrollDistance() {
    const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    return lengthOfTabList - viewLength || 0;
  }
  /** Tells the ink-bar to align itself to the current label wrapper */
  _alignInkBarToSelectedTab() {
    const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
    const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
    if (selectedLabelWrapper) {
      this._inkBar.alignToElement(selectedLabelWrapper);
    } else {
      this._inkBar.hide();
    }
  }
  /** Stops the currently-running paginator interval.  */
  _stopInterval() {
    this._stopScrolling.next();
  }
  /**
   * Handles the user pressing down on one of the paginators.
   * Starts scrolling the header after a certain amount of time.
   * @param direction In which direction the paginator should be scrolled.
   */
  _handlePaginatorPress(direction, mouseEvent) {
    // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
    // null check the `button`, but we do it so we don't break tests that use fake events.
    if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
      return;
    }
    // Avoid overlapping timers.
    this._stopInterval();
    // Start a timer after the delay and keep firing based on the interval.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.timer)(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL)
    // Keep the timer going until something tells it to stop or the component is destroyed.
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(this._stopScrolling, this._destroyed))).subscribe(() => {
      const {
        maxScrollDistance,
        distance
      } = this._scrollHeader(direction);
      // Stop the timer if we've reached the start or the end.
      if (distance === 0 || distance >= maxScrollDistance) {
        this._stopInterval();
      }
    });
  }
  /**
   * Scrolls the header to a given position.
   * @param position Position to which to scroll.
   * @returns Information on the current scroll distance and the maximum.
   */
  _scrollTo(position) {
    if (this.disablePagination) {
      return {
        maxScrollDistance: 0,
        distance: 0
      };
    }
    const maxScrollDistance = this._getMaxScrollDistance();
    this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
    // Mark that the scroll distance has changed so that after the view is checked, the CSS
    // transformation can move the header.
    this._scrollDistanceChanged = true;
    this._checkScrollingControls();
    return {
      maxScrollDistance,
      distance: this._scrollDistance
    };
  }
}
MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) {
  return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};
MatPaginatedTabHeader.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatPaginatedTabHeader,
  inputs: {
    disablePagination: "disablePagination"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginatedTabHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.ViewportRuler
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    disablePagination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class with all of the `MatTabHeader` functionality.
 * @docs-private
 */
class _MatTabHeaderBase extends MatPaginatedTabHeader {
  /** Whether the ripple effect is disabled or not. */
  get disableRipple() {
    return this._disableRipple;
  }
  set disableRipple(value) {
    this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
  }
  constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    this._disableRipple = false;
  }
  _itemSelected(event) {
    event.preventDefault();
  }
}
_MatTabHeaderBase.ɵfac = function _MatTabHeaderBase_Factory(t) {
  return new (t || _MatTabHeaderBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};
_MatTabHeaderBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatTabHeaderBase,
  inputs: {
    disableRipple: "disableRipple"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabHeaderBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.ViewportRuler
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * @docs-private
 */
class MatTabHeader extends _MatTabHeaderBase {
  constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    super.ngAfterContentInit();
  }
}
MatTabHeader.ɵfac = function MatTabHeader_Factory(t) {
  return new (t || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};
MatTabHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatTabHeader,
  selectors: [["mat-tab-header"]],
  contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
    }
  },
  viewQuery: function MatTabHeader_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListInner = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-tab-header"],
  hostVars: 4,
  hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
    }
  },
  inputs: {
    selectedIndex: "selectedIndex"
  },
  outputs: {
    selectFocusedIndex: "selectFocusedIndex",
    indexFocused: "indexFocused"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 13,
  vars: 10,
  consts: [["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "matRippleDisabled", "disabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-mdc-tab-labels"], ["tabListInner", ""], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "matRippleDisabled", "disabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
  template: function MatTabHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabHeader_Template_button_click_0_listener() {
        return ctx._handlePaginatorClick("before");
      })("mousedown", function MatTabHeader_Template_button_mousedown_0_listener($event) {
        return ctx._handlePaginatorPress("before", $event);
      })("touchend", function MatTabHeader_Template_button_touchend_0_listener() {
        return ctx._stopInterval();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
        return ctx._handleKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
        return ctx._onContentChanges();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_button_mousedown_10_listener($event) {
        return ctx._handlePaginatorPress("after", $event);
      })("click", function MatTabHeader_Template_button_click_10_listener() {
        return ctx._handlePaginatorClick("after");
      })("touchend", function MatTabHeader_Template_button_touchend_10_listener() {
        return ctx._stopInterval();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple)("disabled", ctx._disableScrollBefore || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple)("disabled", ctx._disableScrollAfter || null);
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_26__.CdkObserveContent],
  styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable span.mdc-tab-indicator__content,._mat-animation-noopable span.mdc-tab__text-label{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab-header',
      inputs: ['selectedIndex'],
      outputs: ['selectFocusedIndex', 'indexFocused'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      host: {
        'class': 'mat-mdc-tab-header',
        '[class.mat-mdc-tab-header-pagination-controls-enabled]': '_showPaginationControls',
        '[class.mat-mdc-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
      },
      template: "<!-- TODO: this also had `mat-elevation-z4`. Figure out what we should do with it. -->\n<button class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     type=\"button\"\n     mat-ripple\n     tabindex=\"-1\"\n     [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     [disabled]=\"_disableScrollBefore || null\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</button>\n\n<div\n  class=\"mat-mdc-tab-label-container\"\n  #tabListContainer\n  (keydown)=\"_handleKeydown($event)\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\">\n  <div\n    #tabList\n    class=\"mat-mdc-tab-list\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-mdc-tab-labels\" #tabListInner>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n\n<!-- TODO: this also had `mat-elevation-z4`. Figure out what we should do with it. -->\n<button class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     type=\"button\"\n     mat-ripple\n     [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     [disabled]=\"_disableScrollAfter || null\"\n     tabindex=\"-1\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</button>\n",
      styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable span.mdc-tab-indicator__content,._mat-animation-noopable span.mdc-tab__text-label{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.ViewportRuler
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    _items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatTabLabelWrapper, {
        descendants: false
      }]
    }],
    _tabListContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabListContainer', {
        static: true
      }]
    }],
    _tabList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabList', {
        static: true
      }]
    }],
    _tabListInner: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabListInner', {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['nextPaginator']
    }],
    _previousPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['previousPaginator']
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to provide the default options the tabs module. */
const MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TABS_CONFIG');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate unique ID's for each tab component */
let nextId = 0;
// Boilerplate for applying mixins to MatTabGroup.
/** @docs-private */
const _MatTabGroupMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.mixinDisableRipple)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}), 'primary');
/**
 * Base class with all of the `MatTabGroupBase` functionality.
 * @docs-private
 */
class _MatTabGroupBase extends _MatTabGroupMixinBase {
  /** Whether the tab group should grow to the size of the active tab. */
  get dynamicHeight() {
    return this._dynamicHeight;
  }
  set dynamicHeight(value) {
    this._dynamicHeight = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
  }
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    this._indexToSelect = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceNumberProperty)(value, null);
  }
  /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    this._animationDuration = /^\d+$/.test(value + '') ? value + 'ms' : value;
  }
  /**
   * `tabindex` to be set on the inner element that wraps the tab content. Can be used for improved
   * accessibility when the tab does not have focusable elements or if it has scrollable content.
   * The `tabindex` will be removed automatically for inactive tabs.
   * Read more at https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
   */
  get contentTabIndex() {
    return this._contentTabIndex;
  }
  set contentTabIndex(value) {
    this._contentTabIndex = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceNumberProperty)(value, null);
  }
  /**
   * Whether pagination should be disabled. This can be used to avoid unnecessary
   * layout recalculations if it's known that pagination won't be required.
   */
  get disablePagination() {
    return this._disablePagination;
  }
  set disablePagination(value) {
    this._disablePagination = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
  }
  /**
   * By default tabs remove their content from the DOM while it's off-screen.
   * Setting this to `true` will keep it in the DOM which will prevent elements
   * like iframes and videos from reloading next time it comes back into the view.
   */
  get preserveContent() {
    return this._preserveContent;
  }
  set preserveContent(value) {
    this._preserveContent = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
  }
  /** Background color of the tab group. */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove('mat-tabs-with-background', `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add('mat-tabs-with-background', `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  constructor(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
    super(elementRef);
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    /** All of the tabs that belong to the group. */
    this._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    /** The tab index that should be selected after the content has been checked. */
    this._indexToSelect = 0;
    /** Index of the tab that was focused last. */
    this._lastFocusedTabIndex = null;
    /** Snapshot of the height of the tab body wrapper before another tab is activated. */
    this._tabBodyWrapperHeight = 0;
    /** Subscription to tabs being added/removed. */
    this._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Subscription to changes in the tab labels. */
    this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    this._dynamicHeight = false;
    this._selectedIndex = null;
    /** Position of the tab header. */
    this.headerPosition = 'above';
    this._disablePagination = false;
    this._preserveContent = false;
    /** Output to enable support for two-way binding on `[(selectedIndex)]` */
    this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when focus has changed within a tab group. */
    this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the body animation has completed */
    this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the tab selection has changed. */
    this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this._groupId = nextId++;
    this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
    this.contentTabIndex = defaultConfig?.contentTabIndex ?? null;
    this.preserveContent = !!defaultConfig?.preserveContent;
  }
  /**
   * After the content is checked, this component knows what tabs have been defined
   * and what the selected index should be. This is where we can know exactly what position
   * each tab should be in according to the new selected index, and additionally we know how
   * a new selected tab should transition in (from the left or right).
   */
  ngAfterContentChecked() {
    // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
    // the amount of tabs changes before the actual change detection runs.
    const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
    // If there is a change in selected index, emit a change event. Should not trigger if
    // the selected index has not yet been initialized.
    if (this._selectedIndex != indexToSelect) {
      const isFirstRun = this._selectedIndex == null;
      if (!isFirstRun) {
        this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
        // Preserve the height so page doesn't scroll up during tab change.
        // Fixes https://stackblitz.com/edit/mat-tabs-scroll-page-top-on-tab-change
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.minHeight = wrapper.clientHeight + 'px';
      }
      // Changing these values after change detection has run
      // since the checked content may contain references to them.
      Promise.resolve().then(() => {
        this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
        if (!isFirstRun) {
          this.selectedIndexChange.emit(indexToSelect);
          // Clear the min-height, this was needed during tab change to avoid
          // unnecessary scrolling.
          this._tabBodyWrapper.nativeElement.style.minHeight = '';
        }
      });
    }
    // Setup the position for each tab and optionally setup an origin on the next selected tab.
    this._tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect;
      // If there is already a selected tab, then set up an origin for the next selected tab
      // if it doesn't have one already.
      if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });
    if (this._selectedIndex !== indexToSelect) {
      this._selectedIndex = indexToSelect;
      this._lastFocusedTabIndex = null;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngAfterContentInit() {
    this._subscribeToAllTabChanges();
    this._subscribeToTabLabels();
    // Subscribe to changes in the amount of tabs, in order to be
    // able to re-render the content as new tabs are added or removed.
    this._tabsSubscription = this._tabs.changes.subscribe(() => {
      const indexToSelect = this._clampTabIndex(this._indexToSelect);
      // Maintain the previously-selected tab if a new tab is added or removed and there is no
      // explicit change that selects a different tab.
      if (indexToSelect === this._selectedIndex) {
        const tabs = this._tabs.toArray();
        let selectedTab;
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
            // event, otherwise the consumer may end up in an infinite loop in some edge cases like
            // adding a tab within the `selectedIndexChange` event.
            this._indexToSelect = this._selectedIndex = i;
            this._lastFocusedTabIndex = null;
            selectedTab = tabs[i];
            break;
          }
        }
        // If we haven't found an active tab and a tab exists at the selected index, it means
        // that the active tab was swapped out. Since this won't be picked up by the rendering
        // loop in `ngAfterContentChecked`, we need to sync it up manually.
        if (!selectedTab && tabs[indexToSelect]) {
          Promise.resolve().then(() => {
            tabs[indexToSelect].isActive = true;
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
          });
        }
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Listens to changes in all of the tabs. */
  _subscribeToAllTabChanges() {
    // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
    // some that are inside of nested tab groups. We filter them out manually by checking that
    // the closest group to the tab is the current one.
    this._allTabs.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this._allTabs)).subscribe(tabs => {
      this._tabs.reset(tabs.filter(tab => {
        return tab._closestTabGroup === this || !tab._closestTabGroup;
      }));
      this._tabs.notifyOnChanges();
    });
  }
  ngOnDestroy() {
    this._tabs.destroy();
    this._tabsSubscription.unsubscribe();
    this._tabLabelSubscription.unsubscribe();
  }
  /** Re-aligns the ink bar to the selected tab element. */
  realignInkBar() {
    if (this._tabHeader) {
      this._tabHeader._alignInkBarToSelectedTab();
    }
  }
  /**
   * Recalculates the tab group's pagination dimensions.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    if (this._tabHeader) {
      this._tabHeader.updatePagination();
    }
  }
  /**
   * Sets focus to a particular tab.
   * @param index Index of the tab to be focused.
   */
  focusTab(index) {
    const header = this._tabHeader;
    if (header) {
      header.focusIndex = index;
    }
  }
  _focusChanged(index) {
    this._lastFocusedTabIndex = index;
    this.focusChange.emit(this._createChangeEvent(index));
  }
  _createChangeEvent(index) {
    const event = new MatTabChangeEvent();
    event.index = index;
    if (this._tabs && this._tabs.length) {
      event.tab = this._tabs.toArray()[index];
    }
    return event;
  }
  /**
   * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
   * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
   * binding to be updated, we need to subscribe to changes in it and trigger change detection
   * manually.
   */
  _subscribeToTabLabels() {
    if (this._tabLabelSubscription) {
      this._tabLabelSubscription.unsubscribe();
    }
    this._tabLabelSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(...this._tabs.map(tab => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Clamps the given index to the bounds of 0 and the tabs length. */
  _clampTabIndex(index) {
    // Note the `|| 0`, which ensures that values like NaN can't get through
    // and which would otherwise throw the component into an infinite loop
    // (since Math.max(NaN, 0) === NaN).
    return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
  }
  /** Returns a unique id for each tab label element */
  _getTabLabelId(i) {
    return `mat-tab-label-${this._groupId}-${i}`;
  }
  /** Returns a unique id for each tab content element */
  _getTabContentId(i) {
    return `mat-tab-content-${this._groupId}-${i}`;
  }
  /**
   * Sets the height of the body wrapper to the height of the activating tab if dynamic
   * height property is true.
   */
  _setTabBodyWrapperHeight(tabHeight) {
    if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
      return;
    }
    const wrapper = this._tabBodyWrapper.nativeElement;
    wrapper.style.height = this._tabBodyWrapperHeight + 'px';
    // This conditional forces the browser to paint the height so that
    // the animation to the new height can have an origin.
    if (this._tabBodyWrapper.nativeElement.offsetHeight) {
      wrapper.style.height = tabHeight + 'px';
    }
  }
  /** Removes the height of the tab body wrapper. */
  _removeTabBodyWrapperHeight() {
    const wrapper = this._tabBodyWrapper.nativeElement;
    this._tabBodyWrapperHeight = wrapper.clientHeight;
    wrapper.style.height = '';
    this.animationDone.emit();
  }
  /** Handle click events, setting new selected index if appropriate. */
  _handleClick(tab, tabHeader, index) {
    tabHeader.focusIndex = index;
    if (!tab.disabled) {
      this.selectedIndex = index;
    }
  }
  /** Retrieves the tabindex for the tab. */
  _getTabIndex(index) {
    const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
    return index === targetIndex ? 0 : -1;
  }
  /** Callback for when the focused state of a tab has changed. */
  _tabFocusChanged(focusOrigin, index) {
    // Mouse/touch focus happens during the `mousedown`/`touchstart` phase which
    // can cause the tab to be moved out from under the pointer, interrupting the
    // click sequence (see #21898). We don't need to scroll the tab into view for
    // such cases anyway, because it will be done when the tab becomes selected.
    if (focusOrigin && focusOrigin !== 'mouse' && focusOrigin !== 'touch') {
      this._tabHeader.focusIndex = index;
    }
  }
}
_MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(t) {
  return new (t || _MatTabGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};
_MatTabGroupBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatTabGroupBase,
  inputs: {
    dynamicHeight: "dynamicHeight",
    selectedIndex: "selectedIndex",
    headerPosition: "headerPosition",
    animationDuration: "animationDuration",
    contentTabIndex: "contentTabIndex",
    disablePagination: "disablePagination",
    preserveContent: "preserveContent",
    backgroundColor: "backgroundColor"
  },
  outputs: {
    selectedIndexChange: "selectedIndexChange",
    focusChange: "focusChange",
    animationDone: "animationDone",
    selectedTabChange: "selectedTabChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabGroupBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_TABS_CONFIG]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    dynamicHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentTabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disablePagination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preserveContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    focusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    animationDone: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    selectedTabChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */
class MatTabGroup extends _MatTabGroupBase {
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent;
  }
  set fitInkBarToContent(v) {
    this._fitInkBarToContent = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(v);
    this._changeDetectorRef.markForCheck();
  }
  /** Whether tabs should be stretched to fill the header. */
  get stretchTabs() {
    return this._stretchTabs;
  }
  set stretchTabs(v) {
    this._stretchTabs = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(v);
  }
  constructor(elementRef, changeDetectorRef, defaultConfig, animationMode) {
    super(elementRef, changeDetectorRef, defaultConfig, animationMode);
    this._fitInkBarToContent = false;
    this._stretchTabs = true;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
  }
}
MatTabGroup.ɵfac = function MatTabGroup_Factory(t) {
  return new (t || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};
MatTabGroup.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatTabGroup,
  selectors: [["mat-tab-group"]],
  contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTab, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
    }
  },
  viewQuery: function MatTabGroup_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-tab-group"],
  hostVars: 6,
  hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-group-dynamic-height", ctx.dynamicHeight)("mat-mdc-tab-group-inverted-header", ctx.headerPosition === "below")("mat-mdc-tab-group-stretch-tabs", ctx.stretchTabs);
    }
  },
  inputs: {
    color: "color",
    disableRipple: "disableRipple",
    fitInkBarToContent: "fitInkBarToContent",
    stretchTabs: ["mat-stretch-tabs", "stretchTabs"]
  },
  exportAs: ["matTabGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_TAB_GROUP,
    useExisting: MatTabGroup
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 7,
  consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mdc-tab mat-mdc-tab mat-mdc-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 3, "id", "mdc-tab--active", "ngClass", "disabled", "fitInkBarToContent", "click", "cdkFocusChange", 4, "ngFor", "ngForOf"], [1, "mat-mdc-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-mdc-tab-body-active", "ngClass", "content", "position", "origin", "animationDuration", "preserveContent", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-mdc-focus-indicator", 3, "id", "ngClass", "disabled", "fitInkBarToContent", "click", "cdkFocusChange"], ["tabNode", ""], [1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"], [3, "ngIf", "ngIfElse"], ["tabTextLabel", ""], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "ngClass", "content", "position", "origin", "animationDuration", "preserveContent", "_onCentered", "_onCentering"]],
  template: function MatTabGroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-header", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
        return ctx._focusChanged($event);
      })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
        return ctx.selectedIndex = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabGroup_div_2_Template, 9, 17, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatTabGroup_mat_tab_body_5_Template, 1, 11, "mat-tab-body", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._tabs);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._tabs);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__.CdkMonitorFocus, MatTabBody, MatTabLabelWrapper, MatTabHeader],
  styles: [".mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab[hidden]{display:none}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-tab.mdc-tab{height:48px;flex-grow:0}.mat-mdc-tab .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none}.mat-mdc-tab .mdc-tab__text-label{display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-disabled{opacity:.4}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-mdc-tab-header-with-background-background-color, transparent)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab-indicator__content--underline,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before{border-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{border-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab-group',
      exportAs: 'matTabGroup',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      inputs: ['color', 'disableRipple'],
      providers: [{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }],
      host: {
        'class': 'mat-mdc-tab-group',
        '[class.mat-mdc-tab-group-dynamic-height]': 'dynamicHeight',
        '[class.mat-mdc-tab-group-inverted-header]': 'headerPosition === "below"',
        '[class.mat-mdc-tab-group-stretch-tabs]': 'stretchTabs'
      },
      template: "<mat-tab-header #tabHeader\n                [selectedIndex]=\"selectedIndex || 0\"\n                [disableRipple]=\"disableRipple\"\n                [disablePagination]=\"disablePagination\"\n                (indexFocused)=\"_focusChanged($event)\"\n                (selectFocusedIndex)=\"selectedIndex = $event\">\n\n  <div class=\"mdc-tab mat-mdc-tab mat-mdc-focus-indicator\"\n       #tabNode\n       role=\"tab\"\n       matTabLabelWrapper\n       cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex === i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mdc-tab--active]=\"selectedIndex === i\"\n       [ngClass]=\"tab.labelClass\"\n       [disabled]=\"tab.disabled\"\n       [fitInkBarToContent]=\"fitInkBarToContent\"\n       (click)=\"_handleClick(tab, tabHeader, i)\"\n       (cdkFocusChange)=\"_tabFocusChanged($event, i)\">\n    <span class=\"mdc-tab__ripple\"></span>\n\n    <!-- Needs to be a separate element, because we can't put\n         `overflow: hidden` on tab due to the ink bar. -->\n    <div\n      class=\"mat-mdc-tab-ripple\"\n      mat-ripple\n      [matRippleTrigger]=\"tabNode\"\n      [matRippleDisabled]=\"tab.disabled || disableRipple\"></div>\n\n    <span class=\"mdc-tab__content\">\n      <span class=\"mdc-tab__text-label\">\n        <!-- If there is a label template, use it. -->\n        <ng-template [ngIf]=\"tab.templateLabel\" [ngIfElse]=\"tabTextLabel\">\n          <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n        </ng-template>\n\n        <!-- If there is not a label template, fall back to the text label. -->\n        <ng-template #tabTextLabel>{{tab.textLabel}}</ng-template>\n      </span>\n    </span>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-mdc-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.tabindex]=\"(contentTabIndex != null && selectedIndex === i) ? contentTabIndex : null\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-mdc-tab-body-active]=\"selectedIndex === i\"\n               [ngClass]=\"tab.bodyClass\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               [preserveContent]=\"preserveContent\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
      styles: [".mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab[hidden]{display:none}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-tab.mdc-tab{height:48px;flex-grow:0}.mat-mdc-tab .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none}.mat-mdc-tab .mdc-tab__text-label{display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-disabled{opacity:.4}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-mdc-tab-header-with-background-background-color, transparent)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab-indicator__content--underline,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before{border-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{border-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_TABS_CONFIG]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    _allTabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatTab, {
        descendants: true
      }]
    }],
    _tabBodyWrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabBodyWrapper']
    }],
    _tabHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabHeader']
    }],
    fitInkBarToContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stretchTabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mat-stretch-tabs']
    }]
  });
})();
/** A simple change event emitted on focus or selection changes. */
class MatTabChangeEvent {}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for tab nav components.
let nextUniqueId = 0;
/**
 * Base class with all of the `MatTabNav` functionality.
 * @docs-private
 */
class _MatTabNavBase extends MatPaginatedTabHeader {
  /** Background color of the tab nav. */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove('mat-tabs-with-background', `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add('mat-tabs-with-background', `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  /** Whether the ripple effect is disabled or not. */
  get disableRipple() {
    return this._disableRipple;
  }
  set disableRipple(value) {
    this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
  }
  constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    this._disableRipple = false;
    /** Theme color of the nav bar. */
    this.color = 'primary';
  }
  _itemSelected() {
    // noop
  }
  ngAfterContentInit() {
    // We need this to run before the `changes` subscription in parent to ensure that the
    // selectedIndex is up-to-date by the time the super class starts looking for it.
    this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(() => {
      this.updateActiveLink();
    });
    super.ngAfterContentInit();
  }
  /** Notifies the component that the active link has been changed. */
  updateActiveLink() {
    if (!this._items) {
      return;
    }
    const items = this._items.toArray();
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        this.selectedIndex = i;
        this._changeDetectorRef.markForCheck();
        if (this.tabPanel) {
          this.tabPanel._activeTabId = items[i].id;
        }
        return;
      }
    }
    // The ink bar should hide itself if no items are active.
    this.selectedIndex = -1;
    this._inkBar.hide();
  }
  _getRole() {
    return this.tabPanel ? 'tablist' : this._elementRef.nativeElement.getAttribute('role');
  }
}
_MatTabNavBase.ɵfac = function _MatTabNavBase_Factory(t) {
  return new (t || _MatTabNavBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};
_MatTabNavBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatTabNavBase,
  inputs: {
    backgroundColor: "backgroundColor",
    disableRipple: "disableRipple",
    color: "color",
    tabPanel: "tabPanel"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabNavBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.ViewportRuler
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabPanel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
// Boilerplate for applying mixins to MatTabLink.
const _MatTabLinkMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.mixinDisabled)(class {})));
/** Base class with all of the `MatTabLink` functionality. */
class _MatTabLinkBase extends _MatTabLinkMixinBase {
  /** Whether the link is active. */
  get active() {
    return this._isActive;
  }
  set active(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
    if (newValue !== this._isActive) {
      this._isActive = newValue;
      this._tabNavBar.updateActiveLink();
    }
  }
  /**
   * Whether ripples are disabled on interaction.
   * @docs-private
   */
  get rippleDisabled() {
    return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
  }
  constructor(_tabNavBar, /** @docs-private */elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
    super();
    this._tabNavBar = _tabNavBar;
    this.elementRef = elementRef;
    this._focusMonitor = _focusMonitor;
    /** Whether the tab link is active or not. */
    this._isActive = false;
    /** Unique id for the tab. */
    this.id = `mat-tab-link-${nextUniqueId++}`;
    this.rippleConfig = globalRippleOptions || {};
    this.tabIndex = parseInt(tabIndex) || 0;
    if (animationMode === 'NoopAnimations') {
      this.rippleConfig.animation = {
        enterDuration: 0,
        exitDuration: 0
      };
    }
  }
  /** Focuses the tab link. */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this.elementRef);
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this.elementRef);
  }
  _handleFocus() {
    // Since we allow navigation through tabbing in the nav bar, we
    // have to update the focused index whenever the link receives focus.
    this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
  }
  _handleKeydown(event) {
    if (this._tabNavBar.tabPanel && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_23__.SPACE) {
      this.elementRef.nativeElement.click();
    }
  }
  _getAriaControls() {
    return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute('aria-controls');
  }
  _getAriaSelected() {
    if (this._tabNavBar.tabPanel) {
      return this.active ? 'true' : 'false';
    } else {
      return this.elementRef.nativeElement.getAttribute('aria-selected');
    }
  }
  _getAriaCurrent() {
    return this.active && !this._tabNavBar.tabPanel ? 'page' : null;
  }
  _getRole() {
    return this._tabNavBar.tabPanel ? 'tab' : this.elementRef.nativeElement.getAttribute('role');
  }
  _getTabIndex() {
    if (this._tabNavBar.tabPanel) {
      return this._isActive && !this.disabled ? 0 : -1;
    } else {
      return this.tabIndex;
    }
  }
}
_MatTabLinkBase.ɵfac = function _MatTabLinkBase_Factory(t) {
  return new (t || _MatTabLinkBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatTabNavBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};
_MatTabLinkBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatTabLinkBase,
  inputs: {
    active: "active",
    id: "id"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabLinkBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _MatTabNavBase
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MAT_RIPPLE_GLOBAL_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__.FocusMonitor
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
const _MatTabLinkBaseWithInkBarItem = mixinInkBarItem(_MatTabLinkBase);
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */
class MatTabNav extends _MatTabNavBase {
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent.value;
  }
  set fitInkBarToContent(v) {
    this._fitInkBarToContent.next((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(v));
    this._changeDetectorRef.markForCheck();
  }
  /** Whether tabs should be stretched to fill the header. */
  get stretchTabs() {
    return this._stretchTabs;
  }
  set stretchTabs(v) {
    this._stretchTabs = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(v);
  }
  constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode, defaultConfig) {
    super(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
    this._fitInkBarToContent = new rxjs__WEBPACK_IMPORTED_MODULE_27__.BehaviorSubject(false);
    this._stretchTabs = true;
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    super.ngAfterContentInit();
  }
  ngAfterViewInit() {
    if (!this.tabPanel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw new Error('A mat-tab-nav-panel must be specified via [tabPanel].');
    }
    super.ngAfterViewInit();
  }
}
MatTabNav.ɵfac = function MatTabNav_Factory(t) {
  return new (t || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8));
};
MatTabNav.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatTabNav,
  selectors: [["", "mat-tab-nav-bar", ""]],
  contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLink, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
    }
  },
  viewQuery: function MatTabNav_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListInner = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-tab-nav-bar", "mat-mdc-tab-header"],
  hostVars: 15,
  hostBindings: function MatTabNav_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx._getRole());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-mdc-tab-nav-bar-stretch-tabs", ctx.stretchTabs)("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    color: "color",
    fitInkBarToContent: "fitInkBarToContent",
    stretchTabs: ["mat-stretch-tabs", "stretchTabs"]
  },
  exportAs: ["matTabNavBar", "matTabNav"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c10,
  ngContentSelectors: _c2,
  decls: 13,
  vars: 8,
  consts: [["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "matRippleDisabled", "disabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-mdc-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-mdc-tab-links"], ["tabListInner", ""], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "matRippleDisabled", "disabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
  template: function MatTabNav_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabNav_Template_button_click_0_listener() {
        return ctx._handlePaginatorClick("before");
      })("mousedown", function MatTabNav_Template_button_mousedown_0_listener($event) {
        return ctx._handlePaginatorPress("before", $event);
      })("touchend", function MatTabNav_Template_button_touchend_0_listener() {
        return ctx._stopInterval();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
        return ctx._handleKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
        return ctx._onContentChanges();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabNav_Template_button_mousedown_10_listener($event) {
        return ctx._handlePaginatorPress("after", $event);
      })("click", function MatTabNav_Template_button_click_10_listener() {
        return ctx._handlePaginatorClick("after");
      })("touchend", function MatTabNav_Template_button_touchend_10_listener() {
        return ctx._stopInterval();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple)("disabled", ctx._disableScrollBefore || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple)("disabled", ctx._disableScrollAfter || null);
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_26__.CdkObserveContent],
  styles: [".mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab[hidden]{display:none}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable span.mdc-tab-indicator__content,._mat-animation-noopable span.mdc-tab__text-label{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-mdc-tab-header-with-background-background-color, transparent)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab .mdc-tab__text-label,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before{border-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{border-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabNav, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-tab-nav-bar]',
      exportAs: 'matTabNavBar, matTabNav',
      inputs: ['color'],
      host: {
        '[attr.role]': '_getRole()',
        'class': 'mat-mdc-tab-nav-bar mat-mdc-tab-header',
        '[class.mat-mdc-tab-header-pagination-controls-enabled]': '_showPaginationControls',
        '[class.mat-mdc-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
        '[class.mat-mdc-tab-nav-bar-stretch-tabs]': 'stretchTabs',
        '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
        '[class.mat-accent]': 'color === "accent"',
        '[class.mat-warn]': 'color === "warn"',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      template: "<!-- TODO: this also had `mat-elevation-z4`. Figure out what we should do with it. -->\n<button class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     type=\"button\"\n     mat-ripple\n     tabindex=\"-1\"\n     [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     [disabled]=\"_disableScrollBefore || null\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</button>\n\n<div class=\"mat-mdc-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div class=\"mat-mdc-tab-list\" #tabList (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-mdc-tab-links\" #tabListInner>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n\n<!-- TODO: this also had `mat-elevation-z4`. Figure out what we should do with it. -->\n<button class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     type=\"button\"\n     mat-ripple\n     [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     [disabled]=\"_disableScrollAfter || null\"\n     tabindex=\"-1\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</button>\n",
      styles: [".mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab[hidden]{display:none}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable span.mdc-tab-indicator__content,._mat-animation-noopable span.mdc-tab__text-label{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-mdc-tab-header-with-background-background-color, transparent)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab .mdc-tab__text-label,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before{border-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{border-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.ViewportRuler
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_TABS_CONFIG]
      }]
    }];
  }, {
    fitInkBarToContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stretchTabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mat-stretch-tabs']
    }],
    _items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabLink), {
        descendants: true
      }]
    }],
    _tabListContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabListContainer', {
        static: true
      }]
    }],
    _tabList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabList', {
        static: true
      }]
    }],
    _tabListInner: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabListInner', {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['nextPaginator']
    }],
    _previousPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['previousPaginator']
    }]
  });
})();
/**
 * Link inside of a `mat-tab-nav-bar`.
 */
class MatTabLink extends _MatTabLinkBaseWithInkBarItem {
  constructor(tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
    super(tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    tabNavBar._fitInkBarToContent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(fitInkBarToContent => {
      this.fitInkBarToContent = fitInkBarToContent;
    });
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    super.ngOnDestroy();
  }
}
MatTabLink.ɵfac = function MatTabLink_Factory(t) {
  return new (t || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};
MatTabLink.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatTabLink,
  selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
  hostAttrs: [1, "mdc-tab", "mat-mdc-tab-link", "mat-mdc-focus-indicator"],
  hostVars: 11,
  hostBindings: function MatTabLink_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatTabLink_focus_HostBindingHandler() {
        return ctx._handleFocus();
      })("keydown", function MatTabLink_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", ctx._getAriaControls())("aria-current", ctx._getAriaCurrent())("aria-disabled", ctx.disabled)("aria-selected", ctx._getAriaSelected())("id", ctx.id)("tabIndex", ctx._getTabIndex())("role", ctx._getRole());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-disabled", ctx.disabled)("mdc-tab--active", ctx.active);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    tabIndex: "tabIndex",
    active: "active",
    id: "id"
  },
  exportAs: ["matTabLink"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c11,
  ngContentSelectors: _c2,
  decls: 5,
  vars: 2,
  consts: [[1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"]],
  template: function MatTabLink_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2)(3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx.elementRef.nativeElement)("matRippleDisabled", ctx.rippleDisabled);
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple],
  styles: [".mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-tab-link.mdc-tab{height:48px;flex-grow:0}.mat-mdc-tab-link .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none}.mat-mdc-tab-link .mdc-tab__text-label{display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12}.mat-mdc-tab-link.mat-mdc-tab-disabled{pointer-events:none;opacity:.4}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabLink, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-tab-link], [matTabLink]',
      exportAs: 'matTabLink',
      inputs: ['disabled', 'disableRipple', 'tabIndex', 'active', 'id'],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'mdc-tab mat-mdc-tab-link mat-mdc-focus-indicator',
        '[attr.aria-controls]': '_getAriaControls()',
        '[attr.aria-current]': '_getAriaCurrent()',
        '[attr.aria-disabled]': 'disabled',
        '[attr.aria-selected]': '_getAriaSelected()',
        '[attr.id]': 'id',
        '[attr.tabIndex]': '_getTabIndex()',
        '[attr.role]': '_getRole()',
        '[class.mat-mdc-tab-disabled]': 'disabled',
        '[class.mdc-tab--active]': 'active',
        '(focus)': '_handleFocus()',
        '(keydown)': '_handleKeydown($event)'
      },
      template: "<span class=\"mdc-tab__ripple\"></span>\n\n<div\n  class=\"mat-mdc-tab-ripple\"\n  mat-ripple\n  [matRippleTrigger]=\"elementRef.nativeElement\"\n  [matRippleDisabled]=\"rippleDisabled\"></div>\n\n<span class=\"mdc-tab__content\">\n  <span class=\"mdc-tab__text-label\">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n",
      styles: [".mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-tab-link.mdc-tab{height:48px;flex-grow:0}.mat-mdc-tab-link .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none}.mat-mdc-tab-link .mdc-tab__text-label{display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12}.mat-mdc-tab-link.mat-mdc-tab-disabled{pointer-events:none;opacity:.4}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}"]
    }]
  }], function () {
    return [{
      type: MatTabNav
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MAT_RIPPLE_GLOBAL_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__.FocusMonitor
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, null);
})();
/**
 * Tab panel component associated with MatTabNav.
 */
class MatTabNavPanel {
  constructor() {
    /** Unique id for the tab panel. */
    this.id = `mat-tab-nav-panel-${nextUniqueId++}`;
  }
}
MatTabNavPanel.ɵfac = function MatTabNavPanel_Factory(t) {
  return new (t || MatTabNavPanel)();
};
MatTabNavPanel.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatTabNavPanel,
  selectors: [["mat-tab-nav-panel"]],
  hostAttrs: ["role", "tabpanel", 1, "mat-mdc-tab-nav-panel"],
  hostVars: 2,
  hostBindings: function MatTabNavPanel_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._activeTabId)("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  exportAs: ["matTabNavPanel"],
  ngContentSelectors: _c2,
  decls: 1,
  vars: 0,
  template: function MatTabNavPanel_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabNavPanel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab-nav-panel',
      exportAs: 'matTabNavPanel',
      template: '<ng-content></ng-content>',
      host: {
        '[attr.aria-labelledby]': '_activeTabId',
        '[attr.id]': 'id',
        'class': 'mat-mdc-tab-nav-panel',
        'role': 'tabpanel'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatTabsModule {}
MatTabsModule.ɵfac = function MatTabsModule_Factory(t) {
  return new (t || MatTabsModule)();
};
MatTabsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatTabsModule
});
MatTabsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatCommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRippleModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_26__.ObserversModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__.A11yModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatCommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRippleModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_26__.ObserversModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__.A11yModule],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
      declarations: [MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink,
      // Private directives, should not be exported.
      MatTabBody, MatTabBodyPortal, MatTabLabelWrapper, MatTabHeader]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_foods-management-page_foods-management-page_component_ts.js.map