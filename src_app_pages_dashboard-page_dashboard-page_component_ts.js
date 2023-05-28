"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_dashboard-page_dashboard-page_component_ts"],{

/***/ 984:
/*!***********************************************************!*\
  !*** ./src/app/components/add-meal/add-meal.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMealComponent": () => (/* binding */ AddMealComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _nutrition_gauge_nutrition_gauge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nutrition-gauge/nutrition-gauge.component */ 8512);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _cook_a_dish_cook_a_dish_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cook-a-dish/cook-a-dish.component */ 7510);
/* harmony import */ var _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/domain/domain.state-models */ 8859);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ 20);
/* harmony import */ var _state_domain_domain_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/domain/domain.state */ 908);
/* harmony import */ var _add_food_add_food_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-food/add-food.component */ 8132);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 5074);



























const _c0 = ["searchField"];
const _c1 = ["dishesOption"];
const _c2 = ["dishesAccordion"];
function AddMealComponent_mat_expansion_panel_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 25);
  }
}
function AddMealComponent_mat_expansion_panel_17_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddMealComponent_mat_expansion_panel_17_button_10_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r8.handleDeleteOptionClick(option_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AddMealComponent_mat_expansion_panel_17_ng_template_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "pfc-nutrition-gauge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "pfc-nutrition-gauge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "pfc-nutrition-gauge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "pfc-nutrition-gauge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-form-field", 34)(19, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddMealComponent_mat_expansion_panel_17_ng_template_11_div_1_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.selectedDishWeight = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_12_0;
    let tmp_13_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 19, ctx_r11.data.dailyNutrients$)) == null ? null : tmp_0_0.protein) || 0)("aim", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 21, ctx_r11.data.dailyAims$)) == null ? null : tmp_1_0.protein) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 23, "common.protein"))("addingValue", ctx_r11.Math.ceil((option_r3.pfcc.protein || 0) * ctx_r11.selectedDishWeight * 0.01));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 25, ctx_r11.data.dailyNutrients$)) == null ? null : tmp_4_0.fat) || 0)("aim", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 27, ctx_r11.data.dailyAims$)) == null ? null : tmp_5_0.fat) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 29, "common.fat"))("addingValue", ctx_r11.Math.ceil((option_r3.pfcc.fat || 0) * ctx_r11.selectedDishWeight * 0.01));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 31, ctx_r11.data.dailyNutrients$)) == null ? null : tmp_8_0.carbohydrates) || 0)("aim", ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 33, ctx_r11.data.dailyAims$)) == null ? null : tmp_9_0.carbohydrates) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 35, "common.carbohydrates"))("addingValue", ctx_r11.Math.ceil((option_r3.pfcc.carbohydrates || 0) * ctx_r11.selectedDishWeight * 0.01));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 37, ctx_r11.data.dailyNutrients$)) == null ? null : tmp_12_0.calories) || 0)("aim", ((tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 39, ctx_r11.data.dailyAims$)) == null ? null : tmp_13_0.calories) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 41, "common.calories"))("addingValue", ctx_r11.Math.ceil((option_r3.pfcc.calories || 0) * ctx_r11.selectedDishWeight * 0.01));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r11.selectedDishWeight)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 43, "add-meal.weight-input-placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 45, "common.gram-sign"), " \u00A0");
  }
}
function AddMealComponent_mat_expansion_panel_17_ng_template_11_div_2_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ingredient_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", ingredient_r18.name, " - ", ingredient_r18.ingredientWeight, "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, "common.gram-sign"), "");
  }
}
function AddMealComponent_mat_expansion_panel_17_ng_template_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "pfc-nutrition-gauge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "pfc-nutrition-gauge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "pfc-nutrition-gauge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "pfc-nutrition-gauge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, AddMealComponent_mat_expansion_panel_17_ng_template_11_div_2_p_18_Template, 3, 5, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-form-field", 34)(20, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddMealComponent_mat_expansion_panel_17_ng_template_11_div_2_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.selectedDishWeight = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddMealComponent_mat_expansion_panel_17_ng_template_11_div_2_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.handleEditRecipeClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_12_0;
    let tmp_13_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 21, ctx_r12.data.dailyNutrients$)) == null ? null : tmp_0_0.protein) || 0)("aim", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 23, ctx_r12.data.dailyAims$)) == null ? null : tmp_1_0.protein) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 25, "common.protein"))("addingValue", ctx_r12.Math.ceil((option_r3.pfcc.protein || 0) * ctx_r12.selectedDishWeight * 0.01));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 27, ctx_r12.data.dailyNutrients$)) == null ? null : tmp_4_0.fat) || 0)("aim", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 29, ctx_r12.data.dailyAims$)) == null ? null : tmp_5_0.fat) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 31, "common.fat"))("addingValue", ctx_r12.Math.ceil((option_r3.pfcc.fat || 0) * ctx_r12.selectedDishWeight * 0.01));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 33, ctx_r12.data.dailyNutrients$)) == null ? null : tmp_8_0.carbohydrates) || 0)("aim", ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 35, ctx_r12.data.dailyAims$)) == null ? null : tmp_9_0.carbohydrates) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 37, "common.carbohydrates"))("addingValue", ctx_r12.Math.ceil((option_r3.pfcc.carbohydrates || 0) * ctx_r12.selectedDishWeight * 0.01));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 39, ctx_r12.data.dailyNutrients$)) == null ? null : tmp_12_0.calories) || 0)("aim", ((tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 41, ctx_r12.data.dailyAims$)) == null ? null : tmp_13_0.calories) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 43, "common.calories"))("addingValue", ctx_r12.Math.ceil((option_r3.pfcc.calories || 0) * ctx_r12.selectedDishWeight * 0.01));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", option_r3.ingredients);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r12.selectedDishWeight)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 45, "add-meal.weight-input-placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 47, "common.gram-sign"), " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 49, "add-meal.edit-recipe"), " ");
  }
}
function AddMealComponent_mat_expansion_panel_17_ng_template_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "pfc-nutrition-gauge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "pfc-nutrition-gauge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "pfc-nutrition-gauge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "pfc-nutrition-gauge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-form-field", 34)(19, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddMealComponent_mat_expansion_panel_17_ng_template_11_div_3_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.selectedDishWeight = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_12_0;
    let tmp_13_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 19, ctx_r13.data.dailyNutrients$)) == null ? null : tmp_0_0.protein) || 0)("aim", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 21, ctx_r13.data.dailyAims$)) == null ? null : tmp_1_0.protein) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 23, "common.protein"))("addingValue", ctx_r13.Math.ceil((option_r3.pfcc.protein || 0) * ctx_r13.selectedDishWeight * 0.01));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 25, ctx_r13.data.dailyNutrients$)) == null ? null : tmp_4_0.fat) || 0)("aim", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 27, ctx_r13.data.dailyAims$)) == null ? null : tmp_5_0.fat) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 29, "common.fat"))("addingValue", ctx_r13.Math.ceil((option_r3.pfcc.fat || 0) * ctx_r13.selectedDishWeight * 0.01));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 31, ctx_r13.data.dailyNutrients$)) == null ? null : tmp_8_0.carbohydrates) || 0)("aim", ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 33, ctx_r13.data.dailyAims$)) == null ? null : tmp_9_0.carbohydrates) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 35, "common.carbohydrates"))("addingValue", ctx_r13.Math.ceil((option_r3.pfcc.carbohydrates || 0) * ctx_r13.selectedDishWeight * 0.01));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 37, ctx_r13.data.dailyNutrients$)) == null ? null : tmp_12_0.calories) || 0)("aim", ((tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 39, ctx_r13.data.dailyAims$)) == null ? null : tmp_13_0.calories) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 41, "common.calories"))("addingValue", ctx_r13.Math.ceil((option_r3.pfcc.calories || 0) * ctx_r13.selectedDishWeight * 0.01));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r13.selectedDishWeight)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 43, "add-meal.weight-input-placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 45, "common.gram-sign"), " \u00A0");
  }
}
function AddMealComponent_mat_expansion_panel_17_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddMealComponent_mat_expansion_panel_17_ng_template_11_div_1_Template, 24, 47, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddMealComponent_mat_expansion_panel_17_ng_template_11_div_2_Template, 28, 51, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AddMealComponent_mat_expansion_panel_17_ng_template_11_div_3_Template, 24, 47, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", option_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "dish");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "ingredient");
  }
}
function AddMealComponent_mat_expansion_panel_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-expansion-panel", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("afterExpand", function AddMealComponent_mat_expansion_panel_17_Template_mat_expansion_panel_afterExpand_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const option_r3 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.handleDishSelected(option_r3));
    })("afterCollapse", function AddMealComponent_mat_expansion_panel_17_Template_mat_expansion_panel_afterCollapse_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.handleDishUnselected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-expansion-panel-header")(3, "div", 18)(4, "div", 19)(5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AddMealComponent_mat_expansion_panel_17_div_9_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, AddMealComponent_mat_expansion_panel_17_button_10_Template, 3, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, AddMealComponent_mat_expansion_panel_17_ng_template_11_Template, 4, 4, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](option_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](8, 4, "common.pfcc-values", option_r3.pfcc), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", option_r3.type === "dish");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", option_r3.type === "dish");
  }
}
class AddMealComponent {
  constructor(store, dialogRef, data, dialog) {
    this.store = store;
    this.dialogRef = dialogRef;
    this.data = data;
    this.dialog = dialog;
    this.Math = Math;
    this.meals = [];
    this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.selectedDishWeight = 0;
    this.selectedDish = null;
    this.dishOptionTrackBy = (idx, item) => item.id;
  }
  handleSearchChange() {
    this.data.filter(this.searchField.nativeElement.value);
  }
  handleDishSelected(option) {
    this.selectedDish = option;
    if (option.type === 'recipe') {
      this.selectedDishWeight = option.ingredients?.map(i => i.ingredientWeight).reduce((w1, w2) => w1 + w2, 0) || 0;
    } else {
      this.selectedDishWeight = 100;
    }
  }
  handleDeleteOptionClick(option) {
    if (option.type === 'dish' && option.delete != null) {
      option.delete();
    }
  }
  onClose() {
    this.dialogRef.close(null);
  }
  handleDishUnselected() {
    this.selectedDish = null;
  }
  handleSaveClick() {
    if (this.selectedDish == null) {
      this.dialogRef.close(null);
    } else {
      this.dialogRef.close({
        id: this.selectedDish.id,
        weight: this.selectedDishWeight
      });
    }
  }
  handleEditRecipeClicked() {
    const ref = this.dialog.open(_cook_a_dish_cook_a_dish_component__WEBPACK_IMPORTED_MODULE_1__.CookADishComponent, {
      panelClass: 'fullscreen-dialog',
      data: {
        recipeId: this.selectedDish.foodId
      }
    });
    ref.afterClosed().subscribe(result => {
      if (result == null) {
        return;
      }
      this.store.dispatch(new _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_2__.CreateDishAction({
        name: result.name,
        foodId: this.selectedDish.foodId,
        cookedOn: luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.now(),
        cookedWeight: result.cookedWeight,
        ingredients: result.ingredients
      })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(_ => this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_4__.DomainState.dishes)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(dishes => dishes.find(dish => dish.name === result.name))).subscribe(dish => {
        if (dish == null) {
          return;
        }
        console.log(this.dishesAccordionItems.get(0));
      });
    });
  }
  handleAddFoodClick(name) {
    const ref = this.dialog.open(_add_food_add_food_component__WEBPACK_IMPORTED_MODULE_5__.AddFoodComponent, {
      panelClass: 'fullscreen-dialog',
      data: {
        name: name
      }
    });
    ref.afterClosed().subscribe(res => {
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
}
AddMealComponent.ɵfac = function AddMealComponent_Factory(t) {
  return new (t || AddMealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
};
AddMealComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AddMealComponent,
  selectors: [["pfc-add-meal"]],
  viewQuery: function AddMealComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.dishesAccordionItems = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.dishesAccordion = _t);
    }
  },
  outputs: {
    search: "search"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
  decls: 27,
  vars: 17,
  consts: [[1, "heading"], [1, "heading__title"], ["mat-icon-button", "", 1, "heading__close", 3, "click"], [1, "content"], [1, "dish-search"], ["matInput", "", "type", "text", 3, "placeholder", "input"], ["searchField", ""], ["matSuffix", ""], [1, "dishes"], ["displayMode", "flat"], ["dishesAccordion", ""], ["hideToggle", "", 3, "afterExpand", "afterCollapse", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "add-food-btn-container"], ["mat-button", "", "color", "primary", 3, "click"], [1, "actions"], ["color", "primary", "mat-raised-button", "", 3, "disabled", "click"], ["hideToggle", "", 3, "afterExpand", "afterCollapse"], ["dishesOption", ""], [1, "dishes-header"], [1, "dishes-header_title"], [1, "dishes-header_title-primary"], [1, "dishes-header_title-secondary", 3, "innerHTML"], ["class", "flex-spacer", 4, "ngIf"], ["color", "accent", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["matExpansionPanelContent", ""], [1, "flex-spacer"], ["color", "accent", "mat-icon-button", "", 3, "click"], [3, "ngSwitch"], ["class", "dish-option dish-option_dish", 4, "ngSwitchCase"], ["class", "dish-option dish-option_recipe", 4, "ngSwitchCase"], ["class", "dish-option dish-option_raw-food", 4, "ngSwitchCase"], [1, "dish-option", "dish-option_dish"], [1, "dish-option__nutrients"], [3, "value", "aim", "title", "addingValue"], [1, "dish-option__weight-input"], ["matInput", "", "type", "number", 3, "ngModel", "placeholder", "ngModelChange"], [1, "dish-option", "dish-option_recipe"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "dish-option__edit-recipe", 3, "click"], [1, "dish-option", "dish-option_raw-food"]],
  template: function AddMealComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddMealComponent_Template_button_click_4_listener() {
        return ctx.onClose();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 3)(8, "mat-form-field", 4)(9, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function AddMealComponent_Template_input_input_9_listener() {
        return ctx.handleSearchChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 8)(15, "mat-accordion", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, AddMealComponent_mat_expansion_panel_17_Template, 12, 7, "mat-expansion-panel", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddMealComponent_Template_button_click_20_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.handleAddFoodClick(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 14)(24, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddMealComponent_Template_button_click_24_listener() {
        return ctx.handleSaveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 7, "add-meal.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 9, "add-meal.search-placeholder"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 11, ctx.data.items))("ngForTrackBy", ctx.dishOptionTrackBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 13, "add-meal.create-foot-btn"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.selectedDish == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 15, "add-meal.add-btn"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionPanelContent, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatIconButton, _nutrition_gauge_nutrition_gauge_component__WEBPACK_IMPORTED_MODULE_0__.NutritionGaugeComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.heading__close[_ngcontent-%COMP%] {\n  margin: 28px 2px 20px;\n}\n.heading__title[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  padding: 24px 24px 24px;\n  margin: 0;\n  font-size: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: hidden;\n}\n.content[_ngcontent-%COMP%]   .dish-search[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n.content[_ngcontent-%COMP%]   .dishes[_ngcontent-%COMP%] {\n  overflow: scroll;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.content[_ngcontent-%COMP%]   .dishes[_ngcontent-%COMP%]   .add-food-btn-container[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 5px;\n}\n.content[_ngcontent-%COMP%]   .dishes[_ngcontent-%COMP%]   .add-food-btn-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .dishes[_ngcontent-%COMP%]   .dishes-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.content[_ngcontent-%COMP%]   .dishes[_ngcontent-%COMP%]   .dishes-header_title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.content[_ngcontent-%COMP%]   .dishes[_ngcontent-%COMP%]   .dishes-header_title-primary[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .dishes[_ngcontent-%COMP%]   .dishes-header_title-secondary[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  color: #707070;\n}\n.content[_ngcontent-%COMP%]   .dishes[_ngcontent-%COMP%]   .dishes-header_title-secondary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: red;\n}\n\n.actions[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px 24px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.actions[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.dish-option__weight-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dish-option__nutrients[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  gap: 5px;\n}\n.dish-option__nutrients[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  max-width: calc(25% - 15px);\n}\n.dish-option__edit-recipe[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZGQtbWVhbC9hZGQtbWVhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFGO0FBRUU7RUFDRSxxQkFBQTtBQUFKO0FBR0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBREo7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRkY7QUFJRTtFQUNFLGNBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBSEo7QUFLSTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFITjtBQUtNO0VBQ0UsV0FBQTtBQUhSO0FBT0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUxOO0FBUUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBTk47QUFTSTtFQUNFLFNBQUE7QUFQTjtBQVVJO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVJOO0FBVU07RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFSUjs7QUFjQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFYRjtBQWFFO0VBQ0UsWUFBQTtBQVhKOztBQW1CRTtFQUNFLFdBQUE7QUFoQko7QUFtQkU7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBakJKO0FBbUJJO0VBQ0UsMkJBQUE7QUFqQk47QUFxQkU7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUFuQkoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcblxuICA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbn1cblxuLmhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICZfX2Nsb3NlIHtcbiAgICBtYXJnaW46IDI4cHggMnB4IDIwcHg7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHBhZGRpbmc6IDI0cHggMjRweCAyNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmRpc2gtc2VhcmNoIHtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgfVxuXG4gIC5kaXNoZXMge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuXG4gICAgLmFkZC1mb29kLWJ0bi1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgcGFkZGluZzogMCA1cHg7XG5cbiAgICAgID4gYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRpc2hlcy1oZWFkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgLmRpc2hlcy1oZWFkZXJfdGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAuZGlzaGVzLWhlYWRlcl90aXRsZS1wcmltYXJ5IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAuZGlzaGVzLWhlYWRlcl90aXRsZS1zZWNvbmRhcnkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xuXG4gICAgICBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYWN0aW9ucyB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgKiB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbi5kaXNoLW9wdGlvbiB7XG4gICZfZGlzaCB7XG4gIH1cblxuICAmX193ZWlnaHQtaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJl9fbnV0cmllbnRzIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBnYXA6IDVweDtcblxuICAgID4gKiB7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMjUlIC0gMTVweCk7XG4gICAgfVxuICB9XG5cbiAgJl9fZWRpdC1yZWNpcGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 7510:
/*!*****************************************************************!*\
  !*** ./src/app/components/cook-a-dish/cook-a-dish.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookADishComponent": () => (/* binding */ CookADishComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4055);
/* harmony import */ var _state_domain_domain_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/domain/domain.state */ 908);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/form-plugin */ 5579);
/* harmony import */ var _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/domain/domain.state-models */ 8859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 9307);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 9121);


























function CookADishComponent_ng_container_16_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const food_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", food_r4)("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, ctx_r3.$usedIngredientsIds).includes(food_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", food_r4.name, " ");
  }
}
function CookADishComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 13)(2, "mat-form-field", 14)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CookADishComponent_ng_container_16_mat_option_7_Template, 3, 5, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 20)(13, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CookADishComponent_ng_container_16_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const i_r2 = restoredCtx.index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.removeIngredient(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 3, "cook-a-dish.ingredient-select-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 5, ctx_r0.$allIngredients));
  }
}
class CookADishComponent {
  constructor(store, dialogRef, cdr, data, fb) {
    this.store = store;
    this.dialogRef = dialogRef;
    this.cdr = cdr;
    this.data = data;
    this.fb = fb;
    this.form = this.fb.group({
      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      ingredients: this.fb.array([]),
      cookedWeight: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    this.trackIngredientByIndexFn = (idx, i) => `${i.index}`;
    this.$destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.$formData = this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_0__.DomainState.cookADishForm).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(fd => fd.model || null));
    this.$formData.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.$destroyed), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(fd => fd?.ingredients), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.skipWhile)(i => i == null)).subscribe(ingredients => {
      if (ingredients == null) {
        return;
      }
      ingredients = ingredients.filter(i => i.ingredient != null);
      if (ingredients.length || 0 > this.ingredients.length) {
        for (let i = this.ingredients.length; i < ingredients.length; i++) {
          this.ingredients.push(this.fb.group({
            ingredient: [ingredients[i].ingredient, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            ingredientWeight: [ingredients[i].ingredientWeight, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            index: [ingredients[i].index]
          }));
        }
      }
    });
    this.$allIngredients = store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_0__.DomainState.foods);
    this.$usedIngredientsIds = store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_0__.DomainState.cookADishUsedIngredients).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(foods => foods.map(f => f.id)));
    if (data.recipeId != null) {
      this.store.dispatch(new _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_2__.InitiateCookADishForm(data.recipeId));
    }
  }
  get ingredients() {
    return this.form.get('ingredients');
  }
  get formStateName() {
    return `${_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_0__.DOMAIN_STATE_NAME}.forms.cookADish`;
  }
  onClose() {
    this.dialogRef.close(null);
  }
  addIngredient() {
    let nextIndex = this.ingredients.at(this.ingredients.length - 1).value.index + 1;
    this.ingredients.push(this.fb.group({
      ingredient: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      ingredientWeight: [100, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      index: [nextIndex]
    }));
    this.store.dispatch(new _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_2__.CookADishAddIngredient({
      ingredientWeight: 100,
      index: nextIndex
    }));
  }
  handleSubmit() {
    this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_0__.DomainState.cookADishForm).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(form => form.model)).subscribe(form => {
      if (form == null) {
        return;
      }
      this.dialogRef.close({
        name: form.name,
        cookedWeight: form.cookedWeight,
        ingredients: form.ingredients.map(i => {
          return {
            ...i.ingredient,
            ingredientWeight: i.ingredientWeight
          };
        })
      });
    });
  }
  removeIngredient(idx) {
    this.form.get('ingredients').removeAt(idx);
    this.store.dispatch(new _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_2__.CookADishRemoveIngredient(idx));
  }
}
CookADishComponent.ɵfac = function CookADishComponent_Factory(t) {
  return new (t || CookADishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
};
CookADishComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CookADishComponent,
  selectors: [["pfc-cook-a-dish"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 30,
  vars: 21,
  consts: [["mat-dialog-title", "", 1, "heading"], [1, "heading__title"], [1, "flex-spacer"], ["mat-icon-button", "", 1, "heading__close", 3, "click"], ["mat-dialog-content", "", 1, "content"], ["id", "cook-a-dish-form", 3, "formGroup", "ngxsForm", "ngSubmit"], ["type", "text", "matInput", "", "formControlName", "name"], ["formArrayName", "ingredients"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-button", "", "color", "primary", "type", "button", 1, "content__add-ingredient", 3, "click"], ["type", "number", "matInput", "", "formControlName", "cookedWeight"], [1, "actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", "form", "cook-a-dish-form"], [1, "content__ingredient-box", 3, "formGroupName"], [1, "content__ingredient"], ["formControlName", "ingredient"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "content__ingredient-weight"], ["type", "number", "formControlName", "ingredientWeight", "matInput", ""], ["type", "hidden", "formControlName", "index"], [1, "content__ingredient-remove"], ["mat-icon-button", "", "color", "warn", "aria-label", "Remove ingredient", 3, "click"], [3, "value", "disabled"]],
  template: function CookADishComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CookADishComponent_Template_button_click_5_listener() {
        return ctx.onClose();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CookADishComponent_Template_form_ngSubmit_9_listener() {
        return ctx.handleSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](15, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CookADishComponent_ng_container_16_Template, 16, 7, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CookADishComponent_Template_button_click_18_listener() {
        return ctx.addIngredient();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-form-field")(22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 11)(27, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_4_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 9, "cook-a-dish.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form)("ngxsForm", ctx.formStateName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 11, "cook-a-dish.dish-name-label"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 13, ctx.$formData)) == null ? null : tmp_4_0.ingredients)("ngForTrackBy", ctx.trackIngredientByIndexFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 15, "cook-a-dish.add-ingredient-btn"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 17, "cook-a-dish.cooked-weight-label"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 19, "cook-a-dish.save-btn"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogContent, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_1__.NgxsFormPluginModule, _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵFormDirective"]],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  padding: 0;\n}\n.heading__title[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  overflow: hidden;\n  padding: 24px 24px 24px;\n  margin: 0;\n  font-size: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0 24px;\n  max-height: unset;\n}\n.content[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content__ingredient-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n}\n.content__ingredient[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 2;\n}\n.content__ingredient-weight[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 1;\n}\n.content__ingredient-remove[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-top: 5px;\n}\n.content__add-ingredient[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px 24px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.actions[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb29rLWEtZGlzaC9jb29rLWEtZGlzaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQUY7QUFFRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUdFO0VBQ0UsV0FBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBSko7QUFPRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUxKO0FBUUU7RUFDRSxtQkFBQTtBQU5KOztBQVVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQVBGO0FBU0U7RUFDRSxZQUFBO0FBUEoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcblxuICA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbn1cblxuLmhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcblxuICAmX190aXRsZSB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMjRweCAyNHB4IDI0cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMTtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBtYXgtaGVpZ2h0OiB1bnNldDtcblxuICA+IGZvcm0gPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX2luZ3JlZGllbnQtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiA1cHg7XG4gIH1cblxuICAmX19pbmdyZWRpZW50IHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIGZsZXgtZ3JvdzogMjtcbiAgfVxuXG4gICZfX2luZ3JlZGllbnQtd2VpZ2h0IHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuXG4gICZfX2luZ3JlZGllbnQtcmVtb3ZlIHtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgJl9fYWRkLWluZ3JlZGllbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG4gIH1cbn1cblxuLmFjdGlvbnMge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICoge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 5942:
/*!************************************************************!*\
  !*** ./src/app/components/gauge/gauge-circle.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaugeCircleDirective": () => (/* binding */ GaugeCircleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GaugeCircleDirective {
  constructor(el) {
    this.el = el;
    this.color = GaugeCircleDirective.DEFAULT_COLOR;
    this.blink = false;
    this.maxValue = 100;
    this.radiusChangedObserver = new MutationObserver(mutations => {
      const interestAttrPresent = mutations.some(m => m.type == 'attributes' && m.attributeName != null && GaugeCircleDirective.OBSERVING_ATTRIBUTES.includes(m.attributeName));
      if (interestAttrPresent) {
        this.scanCircleProperties();
      }
    });
    this.radiusChangedObserver.observe(this.el.nativeElement, {
      attributes: true,
      attributeFilter: GaugeCircleDirective.OBSERVING_ATTRIBUTES
    });
  }
  set pfcGaugeCircle(conf) {
    this.value = Math.max(0, conf.value);
    this.maxValue = conf.maxValue;
    this.color = conf.color;
    this.blink = !!conf.blink;
    this.recalculate();
  }
  ngAfterViewInit() {
    this.scanCircleProperties();
  }
  ngOnDestroy() {
    this.radiusChangedObserver.disconnect();
  }
  ngOnInit() {
    this.scanCircleProperties();
  }
  recalculate() {
    if (this.radius == null || this.value == null) {
      return;
    }
    const circumference = this.radius * 2 * Math.PI;
    const arc = circumference * this.value / this.maxValue;
    this.el.nativeElement.setAttribute(GaugeCircleDirective.STROKE_DASHARRAY, `${arc} ${circumference - arc}`);
    this.el.nativeElement.setAttribute(GaugeCircleDirective.TRANSFORM, `rotate(-90, ${this.cx}, ${this.cy})`);
  }
  scanCircleProperties() {
    const newRadius = this.el.nativeElement.r.baseVal.value;
    const newCx = this.el.nativeElement.cx.baseVal.value;
    const newCy = this.el.nativeElement.cy.baseVal.value;
    if (newRadius === this.radius && newCx === this.cx && newCy === this.cy) {
      return;
    }
    this.radius = newRadius;
    this.cx = newCx;
    this.cy = newCy;
    this.recalculate();
  }
}
GaugeCircleDirective.STROKE_DASHARRAY = 'stroke-dasharray';
GaugeCircleDirective.TRANSFORM = 'transform';
GaugeCircleDirective.DEFAULT_COLOR = '#ee1d1d';
GaugeCircleDirective.OBSERVING_ATTRIBUTES = ['r', 'cx', 'cy'];
GaugeCircleDirective.ɵfac = function GaugeCircleDirective_Factory(t) {
  return new (t || GaugeCircleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
GaugeCircleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: GaugeCircleDirective,
  selectors: [["", "pfcGaugeCircle", ""]],
  inputs: {
    pfcGaugeCircle: "pfcGaugeCircle"
  },
  standalone: true
});

/***/ }),

/***/ 1474:
/*!****************************************************************!*\
  !*** ./src/app/components/gauge/gauge-component.interfaces.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8759:
/*!*****************************************************!*\
  !*** ./src/app/components/gauge/gauge.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaugeComponent": () => (/* binding */ GaugeComponent)
/* harmony export */ });
/* harmony import */ var _gauge_circle_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gauge-circle.directive */ 5942);
/* harmony import */ var _gauge_component_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gauge-component.interfaces */ 1474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





function GaugeComponent__svg_ng_container_1__svg_circle_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "circle", 6);
  }
  if (rf & 2) {
    const circle_r5 = ctx.$implicit;
    const track_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("foreground-circle__animated", circle_r5.blink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pfcGaugeCircle", circle_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cx", ctx_r4.width / 2)("cy", ctx_r4.height / 2)("r", track_r2.radius)("stroke-width", track_r2.strokeWidth)("stroke", circle_r5.color);
  }
}
function GaugeComponent__svg_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "circle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, GaugeComponent__svg_ng_container_1__svg_circle_2_Template, 1, 8, "circle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const track_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cx", ctx_r0.width / 2)("cy", ctx_r0.height / 2)("r", track_r2.radius)("stroke-width", track_r2.strokeWidth)("stroke", track_r2.bgStrokeColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", track_r2.circles)("ngForTrackBy", ctx_r0.circleTrackByFn);
  }
}
function GaugeComponent__svg_text_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("font-size", ctx_r1.subtitleFontSize)("x", ctx_r1.subtitleX)("y", ctx_r1.subtitleY);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.subtitle, " ");
  }
}
class GaugeComponent {
  constructor() {
    this.animationDuration = 3;
    this.titleFontSize = 35;
    this.subtitleFontSize = 20;
    this.titleX = 50;
    this.titleY = 50;
    this.subtitleX = 52;
    this.subtitleY = 70;
    this.width = 100;
    this.height = 100;
    this.viewBox = '0 0 100 100';
    this._tracks = [];
    this.cumulativeRadius = 40;
    this.trackTrackByFn = (idx, track) => {
      return track.trackId != null ? track.trackId : idx;
    };
    this.circleTrackByFn = (idx, circle) => {
      return circle.circleId ? circle.circleId : idx;
    };
  }
  set values(values) {
    this.cumulativeRadius = 40;
    this._tracks = values.map((track, idx) => {
      this.cumulativeRadius += track.strokeWidth;
      return {
        ...track,
        trackId: track.trackId != null ? track.trackId : idx,
        radius: this.cumulativeRadius - track.strokeWidth / 2,
        circles: track.circles.map((circle, idx) => {
          return {
            ...circle,
            circleId: circle.circleId != null ? circle.circleId : idx
          };
        })
      };
    });
    for (const track of this._tracks) {
      track.circles.sort((c1, c2) => c2.value - c1.value);
    }
  }
  ngOnChanges(changes) {
    this.width = this.height = this.cumulativeRadius * 2;
    this.titleX = this.cumulativeRadius;
    this.titleY = this.subtitle != null ? this.cumulativeRadius : this.cumulativeRadius + this.titleFontSize * 0.39;
    this.subtitleX = this.cumulativeRadius;
    this.subtitleY = this.cumulativeRadius + this.subtitleFontSize;
    this.viewBox = `0 0 ${this.width} ${this.height}`;
  }
}
GaugeComponent.ɵfac = function GaugeComponent_Factory(t) {
  return new (t || GaugeComponent)();
};
GaugeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: GaugeComponent,
  selectors: [["pfc-gauge"]],
  inputs: {
    animationDuration: "animationDuration",
    title: "title",
    subtitle: "subtitle",
    titleFontSize: "titleFontSize",
    subtitleFontSize: "subtitleFontSize",
    values: "values"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 5,
  vars: 8,
  consts: [[1, "gauge"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["font-weight", "bold", "text-anchor", "middle", 1, "title"], ["class", "subtitle", "text-anchor", "middle", 4, "ngIf"], ["fill", "transparent"], ["class", "foreground-circle", "fill", "transparent", "stroke-linecap", "round", 3, "foreground-circle__animated", "pfcGaugeCircle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["fill", "transparent", "stroke-linecap", "round", 1, "foreground-circle", 3, "pfcGaugeCircle"], ["text-anchor", "middle", 1, "subtitle"]],
  template: function GaugeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GaugeComponent__svg_ng_container_1_Template, 3, 7, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "text", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, GaugeComponent__svg_text_4_Template, 2, 4, "text", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("viewBox", ctx.viewBox);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx._tracks)("ngForTrackBy", ctx.trackTrackByFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("font-size", ctx.titleFontSize)("x", ctx.titleX)("y", ctx.titleY);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.subtitle != null);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _gauge_circle_directive__WEBPACK_IMPORTED_MODULE_0__.GaugeCircleDirective],
  styles: [".gauge[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.foreground-circle[_ngcontent-%COMP%] {\n  transition: stroke-dasharray 2s linear;\n}\n.foreground-circle__animated[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_foreground-circle-kf;\n  animation-duration: 1.4s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in;\n}\n@keyframes _ngcontent-%COMP%_foreground-circle-kf {\n  from {\n    stroke-opacity: 100%;\n  }\n  50% {\n    stroke-opacity: 50%;\n  }\n  to {\n    stroke-opacity: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nYXVnZS9nYXVnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtBQUNGO0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUNKO0FBQ0k7RUFDRTtJQUNFLG9CQUFBO0VBQ047RUFDSTtJQUNFLG1CQUFBO0VBQ047RUFDSTtJQUNFLG9CQUFBO0VBQ047QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5nYXVnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mb3JlZ3JvdW5kLWNpcmNsZSB7XG4gIHRyYW5zaXRpb246IHN0cm9rZS1kYXNoYXJyYXkgMnMgbGluZWFyO1xuXG4gICZfX2FuaW1hdGVkIHtcbiAgICBhbmltYXRpb24tbmFtZTogZm9yZWdyb3VuZC1jaXJjbGUta2Y7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjRzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG5cbiAgICBAa2V5ZnJhbWVzIGZvcmVncm91bmQtY2lyY2xlLWtmIHtcbiAgICAgIGZyb20ge1xuICAgICAgICBzdHJva2Utb3BhY2l0eTogMTAwJTtcbiAgICAgIH1cbiAgICAgIDUwJSB7XG4gICAgICAgIHN0cm9rZS1vcGFjaXR5OiA1MCU7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHN0cm9rZS1vcGFjaXR5OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 8512:
/*!*************************************************************************!*\
  !*** ./src/app/components/nutrition-gauge/nutrition-gauge.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NutritionGaugeComponent": () => (/* binding */ NutritionGaugeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _gauge_gauge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gauge/gauge.component */ 8759);
/* harmony import */ var _commons_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/functions */ 8490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





function NutritionGaugeComponent_pfc_gauge_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pfc-gauge", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("subtitle", "" + ctx_r0.aim)("title", ctx_r0.titleShorten)("values", ctx_r0.gaugeConfig);
  }
}
function NutritionGaugeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pfc-gauge", 5);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r2.titleShorten)("values", ctx_r2.gaugeConfig);
  }
}
function NutritionGaugeComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r3.fromFunctions.ceil(ctx_r3.value + (ctx_r3.addingValue || 0)), "/", ctx_r3.fromFunctions.ceil(ctx_r3.aim), "");
  }
}
function NutritionGaugeComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.fromFunctions.ceil(ctx_r4.value + (ctx_r4.addingValue || 0)));
  }
}
class NutritionGaugeComponent {
  constructor() {
    this.value = 0;
    this.aim = 100;
    this.addingValue = 0;
    this.strokeWidth = 15;
    this.mainColor = '#ff4081';
    this.bgColor = '#bf3060';
    this.fromFunctions = _commons_functions__WEBPACK_IMPORTED_MODULE_1__;
  }
  get titleShorten() {
    return this.title.charAt(0).toUpperCase();
  }
  get gaugeConfig() {
    const result = [{
      strokeWidth: this.strokeWidth,
      bgStrokeColor: this.bgColor,
      circles: [{
        value: this.value,
        maxValue: this.aim || this.value + (this.addingValue > 0 ? this.addingValue : 0),
        color: this.mainColor,
        blink: false
      }]
    }];
    if (this.addingValue) {
      result[0].circles.push({
        value: this.value + this.addingValue,
        maxValue: this.aim || this.value + (this.addingValue > 0 ? this.addingValue : 0),
        color: this.mainColor,
        blink: true
      });
    }
    return result;
  }
}
NutritionGaugeComponent.ɵfac = function NutritionGaugeComponent_Factory(t) {
  return new (t || NutritionGaugeComponent)();
};
NutritionGaugeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NutritionGaugeComponent,
  selectors: [["pfc-nutrition-gauge"]],
  inputs: {
    value: "value",
    aim: "aim",
    addingValue: "addingValue",
    title: "title",
    strokeWidth: "strokeWidth",
    mainColor: "mainColor",
    bgColor: "bgColor"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 7,
  vars: 5,
  consts: [[3, "subtitle", "title", "values", 4, "ngIf", "ngIfElse"], ["gaugeWithoutSubtitle", ""], ["class", "values", 4, "ngIf"], [1, "title"], [3, "subtitle", "title", "values"], [3, "title", "values"], [1, "values"]],
  template: function NutritionGaugeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NutritionGaugeComponent_pfc_gauge_0_Template, 1, 3, "pfc-gauge", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NutritionGaugeComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NutritionGaugeComponent_span_3_Template, 2, 2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NutritionGaugeComponent_span_4_Template, 2, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.aim != null)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.aim != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.aim == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _gauge_gauge_component__WEBPACK_IMPORTED_MODULE_0__.GaugeComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[_nghost-%COMP%]   .values[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24tZ2F1Z2UvbnV0cml0aW9uLWdhdWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAudmFsdWVzLCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 2397:
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard-page/dashboard-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageComponent": () => (/* binding */ DashboardPageComponent)
/* harmony export */ });
/* harmony import */ var _components_nutrition_gauge_nutrition_gauge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/nutrition-gauge/nutrition-gauge.component */ 8512);
/* harmony import */ var _state_domain_domain_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/domain/domain.state */ 908);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 3559);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _commons_models_common_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commons/models/common.models */ 5291);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ 20);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _commons_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commons/functions */ 8490);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/domain/domain.state-models */ 8859);
/* harmony import */ var _components_add_meal_add_meal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/add-meal/add-meal.component */ 984);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ 9307);























function DashboardPageComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DashboardPageComponent_div_47_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const meal_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.removeMeal(meal_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meal_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", i_r2 % 2 === 1 ? "meals__line_even" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", ctx_r0.getMealName(meal_r1), " - ", meal_r1.weight, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 5, "common.gram-sign"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 7, "common.pfcc-values", ctx_r0.fromFunctions.ceilPfcc(ctx_r0.fromFunctions.multiplyPfcc(meal_r1.pfcc, meal_r1.weight / 100))), " ");
  }
}
class DashboardPageComponent {
  constructor(store, dialog) {
    this.store = store;
    this.dialog = dialog;
    this.fromFunctions = _commons_functions__WEBPACK_IMPORTED_MODULE_4__;
    this.mealTrackBy = (idx, item) => item.id;
    const weekday = luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.now().weekday;
    this.profile$ = this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_1__.DomainState.profile).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(p => p != null));
    this.dailyAims$ = this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_1__.DomainState.profile).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(p => p != null), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(p => p?.aims || _commons_models_common_models__WEBPACK_IMPORTED_MODULE_2__.emptyPfcc));
    this.weeklyAims$ = this.dailyAims$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(aims => {
      return {
        protein: (aims.protein || 0) * weekday,
        fat: (aims.fat || 0) * weekday,
        carbohydrates: (aims.carbohydrates || 0) * weekday,
        calories: (aims.calories || 0) * weekday
      };
    }));
    this.weeklyNutrients$ = this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_1__.DomainState.weeklyNutrients).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(_commons_functions__WEBPACK_IMPORTED_MODULE_4__.ceilPfcc));
    this.dailyNutrients$ = this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_1__.DomainState.todayNutrients).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(_commons_functions__WEBPACK_IMPORTED_MODULE_4__.ceilPfcc));
    this.eatenMeals$ = this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_1__.DomainState.todayMeals).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatestWith)(this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_1__.DomainState.dishesMap), this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_1__.DomainState.foodsMap)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(([meals, dishes, foods]) => {
      return meals.map(meal => {
        const dish = meal.dishId != null ? dishes.get(meal.dishId) || null : null;
        let food;
        if (meal.dishId != null) {
          food = dish != null ? foods.get(dish.foodId) : null;
        } else {
          food = foods.get(meal.foodId);
        }
        const pfcc = (0,_commons_functions__WEBPACK_IMPORTED_MODULE_4__.ceilPfcc)(meal.pfcc, 1);
        const extendedMeal = {
          ...meal,
          pfcc: {
            protein: pfcc.protein || 0,
            fat: pfcc.fat || 0,
            carbohydrates: pfcc.carbohydrates || 0,
            calories: pfcc.calories || 0
          },
          dish: dish,
          food: food
        };
        return extendedMeal;
      });
    }));
  }
  removeMeal(mealId) {
    this.store.dispatch(new _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_5__.RemoveMealAction(mealId));
  }
  addMeal() {
    const filter$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(null);
    const allDishOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject([]);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_1__.DomainState.dishes), this.store.select(_state_domain_domain_state__WEBPACK_IMPORTED_MODULE_1__.DomainState.foodsMap)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(([dishes, foodsMap]) => {
      return [...dishes.filter(d => {
        const foodIsPresent = foodsMap.has(d.foodId);
        if (!foodIsPresent) {
          console.error(`Food with id ${d.foodId} is not found; dish: ${d}`);
        }
        return foodIsPresent;
      }).filter(d => !d.deleted).map(dish => {
        const food = foodsMap.get(dish.foodId);
        const item = {
          id: `dish-${dish.id}`,
          foodId: dish.foodId,
          dishId: dish.id,
          name: dish.name,
          type: 'dish',
          ingredients: null,
          pfcc: (0,_commons_functions__WEBPACK_IMPORTED_MODULE_4__.ceilPfcc)((0,_commons_functions__WEBPACK_IMPORTED_MODULE_4__.multiplyPfcc)(food.pfcc, dish.cookedWeight / dish.recipeWeight), 1),
          delete: () => {
            this.store.dispatch(new _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_5__.DeleteDishAction(dish.id));
          }
        };
        return item;
      }), ...Array.from(foodsMap.values()).map(food => {
        return {
          id: `food-${food.id}`,
          foodId: food.id,
          name: food.name,
          pfcc: food.pfcc,
          type: food.type,
          ingredients: food.type !== 'recipe' ? null : [...food.consistOf]
        };
      })];
    })).subscribe(options => allDishOptions$.next(options));
    const ref = this.dialog.open(_components_add_meal_add_meal_component__WEBPACK_IMPORTED_MODULE_6__.AddMealComponent, {
      panelClass: 'fullscreen-dialog',
      data: {
        filter: val => filter$.next(val),
        dailyNutrients$: this.dailyNutrients$,
        dailyAims$: this.dailyAims$,
        items: (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([allDishOptions$, filter$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(([options, filter]) => options.filter(o => filter == null || o.name.toLowerCase().includes(filter.toLowerCase()))))
      }
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([allDishOptions$, ref.afterClosed()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(([options, selected]) => {
      if (selected == null) {
        return null;
      }
      const selectedOption = options.find(o => o.id === selected.id);
      if (selectedOption == null) {
        return null;
      }
      return {
        id: null,
        eatenOn: luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.now(),
        pfcc: selectedOption.pfcc,
        cooked: selectedOption.type === 'dish',
        foodId: selectedOption.foodId,
        dishId: selectedOption.type === 'dish' ? selectedOption.dishId : null,
        weight: selected.weight
      };
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe(newMeal => {
      allDishOptions$.complete();
      if (newMeal != null) {
        this.store.dispatch(new _state_domain_domain_state_models__WEBPACK_IMPORTED_MODULE_5__.AddMealAction(newMeal));
      }
    });
  }
  getMealName(meal) {
    return (meal.dishId != null ? meal.dish?.name : meal.food.name) || null;
  }
}
DashboardPageComponent.ɵfac = function DashboardPageComponent_Factory(t) {
  return new (t || DashboardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog));
};
DashboardPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: DashboardPageComponent,
  selectors: [["pfc-dashboard-page"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
  decls: 54,
  vars: 88,
  consts: [[1, "nutrients"], [1, "nutrients__period-block"], [1, "nutrients__header"], [1, "nutrients__gauges"], [3, "aim", "title", "value"], [1, "meals"], [1, "meals__header"], ["class", "meals__line", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex-spacer"], [1, "add-meal"], ["color", "accent", "mat-raised-button", "", 3, "click"], [1, "meals__line", 3, "ngClass"], [1, "meals__description"], [1, "meals__title"], [1, "meals__weight"], ["mat-icon-button", "", 3, "click"]],
  template: function DashboardPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "pfc-nutrition-gauge", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "pfc-nutrition-gauge", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "pfc-nutrition-gauge", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "pfc-nutrition-gauge", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 1)(23, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "pfc-nutrition-gauge", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "pfc-nutrition-gauge", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](34, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "pfc-nutrition-gauge", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](38, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "pfc-nutrition-gauge", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 5)(44, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](46, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, DashboardPageComponent_div_47_Template, 12, 10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](48, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 9)(51, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DashboardPageComponent_Template_button_click_51_listener() {
        return ctx.addMeal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](53, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_12_0;
      let tmp_14_0;
      let tmp_16_0;
      let tmp_17_0;
      let tmp_19_0;
      let tmp_20_0;
      let tmp_22_0;
      let tmp_23_0;
      let tmp_25_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 30, "dashboard.weekly-nutrients"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("aim", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 32, ctx.weeklyAims$)) == null ? null : tmp_1_0.protein) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 34, "common.protein"))("value", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 36, ctx.weeklyNutrients$)) == null ? null : tmp_3_0.protein) || 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("aim", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 38, ctx.weeklyAims$)) == null ? null : tmp_4_0.fat) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 40, "common.fat"))("value", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 42, ctx.weeklyNutrients$)) == null ? null : tmp_6_0.fat) || 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("aim", ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 44, ctx.weeklyAims$)) == null ? null : tmp_7_0.carbohydrates) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 46, "common.carbohydrates"))("value", ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 48, ctx.weeklyNutrients$)) == null ? null : tmp_9_0.carbohydrates) || 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("aim", ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 50, ctx.weeklyAims$)) == null ? null : tmp_10_0.calories) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 52, "common.calories"))("value", ((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 54, ctx.weeklyNutrients$)) == null ? null : tmp_12_0.calories) || 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 56, "dashboard.daily-nutrients"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("aim", ((tmp_14_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 58, ctx.dailyAims$)) == null ? null : tmp_14_0.protein) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 60, "common.protein"))("value", ((tmp_16_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 62, ctx.dailyNutrients$)) == null ? null : tmp_16_0.protein) || 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("aim", ((tmp_17_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 64, ctx.dailyAims$)) == null ? null : tmp_17_0.fat) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 66, "common.fat"))("value", ((tmp_19_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](34, 68, ctx.dailyNutrients$)) == null ? null : tmp_19_0.fat) || 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("aim", ((tmp_20_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 70, ctx.dailyAims$)) == null ? null : tmp_20_0.carbohydrates) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 72, "common.carbohydrates"))("value", ((tmp_22_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](38, 74, ctx.dailyNutrients$)) == null ? null : tmp_22_0.carbohydrates) || 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("aim", ((tmp_23_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 76, ctx.dailyAims$)) == null ? null : tmp_23_0.calories) || null)("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](41, 78, "common.calories"))("value", ((tmp_25_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](42, 80, ctx.dailyNutrients$)) == null ? null : tmp_25_0.calories) || 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](46, 82, "dashboard.meals-list.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](48, 84, ctx.eatenMeals$))("ngForTrackBy", ctx.mealTrackBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](53, 86, "dashboard.add-meal-btn"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _components_nutrition_gauge_nutrition_gauge_component__WEBPACK_IMPORTED_MODULE_0__.NutritionGaugeComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatLineModule],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  row-gap: 3vw;\n  height: 100%;\n  padding: 3vw 0;\n}\n\n.nutrients[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 3vw;\n  padding: 0 3vw;\n}\n.nutrients__header[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0 0 0.2rem;\n}\n.nutrients__gauges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.nutrients__gauges[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 22%;\n}\n\n.add-meal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0 3vw;\n}\n.add-meal[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.meals__header[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0 0 0.2rem;\n  padding: 0 3vw;\n}\n.meals__line[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 3vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n.meals__line_even[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.meals__description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.meals__title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.meals__weight[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkLXBhZ2UvZGFzaGJvYXJkLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFKO0FBRUk7RUFDRSxVQUFBO0FBQU47O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFGRjtBQUlFO0VBQ0UsV0FBQTtBQUZKOztBQU9FO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKSjtBQU9FO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBTEo7QUFPSTtFQUNFLG9DQUFBO0FBTE47QUFTRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBUEo7QUFVRTtFQUNFLGlCQUFBO0FBUko7QUFXRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7QUFUSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICByb3ctZ2FwOiAzdnc7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogM3Z3IDA7XG59XG5cbi5udXRyaWVudHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAzdnc7XG4gIHBhZGRpbmc6IDAgM3Z3O1xuXG4gICZfX2hlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luOiAwIDAgLjJyZW07XG4gIH1cblxuICAmX19nYXVnZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICA+ICoge1xuICAgICAgd2lkdGg6IDIyJTtcbiAgICB9XG4gIH1cbn1cblxuLmFkZC1tZWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDN2dztcblxuICA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5tZWFscyB7XG4gICZfX2hlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luOiAwIDAgLjJyZW07XG4gICAgcGFkZGluZzogMCAzdnc7XG4gIH1cblxuICAmX19saW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDAgM3Z3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICAmX2V2ZW4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgfVxuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICB9XG5cbiAgJl9fd2VpZ2h0IHtcbiAgICBmb250LXNpemU6IC42NXJlbTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNTQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 4055:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/skipWhile.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skipWhile": () => (/* binding */ skipWhile)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);


function skipWhile(predicate) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let taking = false;
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => (taking || (taking = !predicate(value, index++))) && subscriber.next(value)));
  });
}

/***/ }),

/***/ 2088:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2020/accordion.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkAccordion": () => (/* binding */ CdkAccordion),
/* harmony export */   "CdkAccordionItem": () => (/* binding */ CdkAccordionItem),
/* harmony export */   "CdkAccordionModule": () => (/* binding */ CdkAccordionModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 1755);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate unique ID for each accordion. */
let nextId$1 = 0;
/**
 * Injection token that can be used to reference instances of `CdkAccordion`. It serves
 * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CdkAccordion');
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
class CdkAccordion {
  constructor() {
    /** Emits when the state of the accordion changes */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Stream that emits true/false when openAll/closeAll is triggered. */
    this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** A readonly id value to use for unique selection coordination. */
    this.id = `cdk-accordion-${nextId$1++}`;
    this._multi = false;
  }
  /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
  get multi() {
    return this._multi;
  }
  set multi(multi) {
    this._multi = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(multi);
  }
  /** Opens all enabled accordion items in an accordion where multi is enabled. */
  openAll() {
    if (this._multi) {
      this._openCloseAllActions.next(true);
    }
  }
  /** Closes all enabled accordion items. */
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
}
CdkAccordion.ɵfac = function CdkAccordion_Factory(t) {
  return new (t || CdkAccordion)();
};
CdkAccordion.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkAccordion,
  selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
  inputs: {
    multi: "multi"
  },
  exportAs: ["cdkAccordion"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: CDK_ACCORDION,
    useExisting: CdkAccordion
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-accordion, [cdkAccordion]',
      exportAs: 'cdkAccordion',
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
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
/** Used to generate unique ID for each accordion item. */
let nextId = 0;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
class CdkAccordionItem {
  /** Whether the AccordionItem is expanded. */
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    expanded = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(expanded);
    // Only emit events and update the internal value if the value changes.
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        /**
         * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
         * the name value is the id of the accordion.
         */
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      // Ensures that the animation will run when the value is set outside of an `@Input`.
      // This includes cases like the open, close and toggle methods.
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the AccordionItem is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(disabled);
  }
  constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
    this.accordion = accordion;
    this._changeDetectorRef = _changeDetectorRef;
    this._expansionDispatcher = _expansionDispatcher;
    /** Subscription to openAll/closeAll events. */
    this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Event emitted every time the AccordionItem is closed. */
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted every time the AccordionItem is opened. */
    this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the AccordionItem is destroyed. */
    this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits whenever the expanded state of the accordion changes.
     * Primarily used to facilitate two-way binding.
     * @docs-private
     */
    this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** The unique AccordionItem id. */
    this.id = `cdk-accordion-child-${nextId++}`;
    this._expanded = false;
    this._disabled = false;
    /** Unregister function for _expansionDispatcher. */
    this._removeUniqueSelectionListener = () => {};
    this._removeUniqueSelectionListener = _expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    });
    // When an accordion item is hosted in an accordion, subscribe to open/close events.
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Emits an event for the accordion item being destroyed. */
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  /** Toggles the expanded state of the accordion item. */
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  /** Sets the expanded state of the accordion item to false. */
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  /** Sets the expanded state of the accordion item to true. */
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe(expanded => {
      // Only change expanded state if item is enabled
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
}
CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) {
  return new (t || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher));
};
CdkAccordionItem.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkAccordionItem,
  selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
  inputs: {
    expanded: "expanded",
    disabled: "disabled"
  },
  outputs: {
    closed: "closed",
    opened: "opened",
    destroyed: "destroyed",
    expandedChange: "expandedChange"
  },
  exportAs: ["cdkAccordionItem"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
  // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
  // registering to the same accordion.
  {
    provide: CDK_ACCORDION,
    useValue: undefined
  }])]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-accordion-item, [cdkAccordionItem]',
      exportAs: 'cdkAccordionItem',
      providers: [
      // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
      // registering to the same accordion.
      {
        provide: CDK_ACCORDION,
        useValue: undefined
      }]
    }]
  }], function () {
    return [{
      type: CdkAccordion,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [CDK_ACCORDION]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher
    }];
  }, {
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    destroyed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    expandedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
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
class CdkAccordionModule {}
CdkAccordionModule.ɵfac = function CdkAccordionModule_Factory(t) {
  return new (t || CdkAccordionModule)();
};
CdkAccordionModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CdkAccordionModule
});
CdkAccordionModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [CdkAccordion, CdkAccordionItem],
      declarations: [CdkAccordion, CdkAccordionItem]
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



/***/ }),

/***/ 7591:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/expansion.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EXPANSION_PANEL_ANIMATION_TIMING": () => (/* binding */ EXPANSION_PANEL_ANIMATION_TIMING),
/* harmony export */   "MAT_ACCORDION": () => (/* binding */ MAT_ACCORDION),
/* harmony export */   "MAT_EXPANSION_PANEL": () => (/* binding */ MAT_EXPANSION_PANEL),
/* harmony export */   "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS": () => (/* binding */ MAT_EXPANSION_PANEL_DEFAULT_OPTIONS),
/* harmony export */   "MatAccordion": () => (/* binding */ MatAccordion),
/* harmony export */   "MatExpansionModule": () => (/* binding */ MatExpansionModule),
/* harmony export */   "MatExpansionPanel": () => (/* binding */ MatExpansionPanel),
/* harmony export */   "MatExpansionPanelActionRow": () => (/* binding */ MatExpansionPanelActionRow),
/* harmony export */   "MatExpansionPanelContent": () => (/* binding */ MatExpansionPanelContent),
/* harmony export */   "MatExpansionPanelDescription": () => (/* binding */ MatExpansionPanelDescription),
/* harmony export */   "MatExpansionPanelHeader": () => (/* binding */ MatExpansionPanelHeader),
/* harmony export */   "MatExpansionPanelTitle": () => (/* binding */ MatExpansionPanelTitle),
/* harmony export */   "matExpansionAnimations": () => (/* binding */ matExpansionAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ 2088);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/keycodes */ 8456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/collections */ 1755);


















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
 * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
 */
const _c0 = ["body"];
function MatExpansionPanel_ng_template_5_Template(rf, ctx) {}
const _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
const _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanelHeader_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
  }
}
const _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
const _c4 = ["mat-panel-title", "mat-panel-description", "*"];
const MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_ACCORDION');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Time and timing curve for expansion panel animations. */
// Note: Keep this in sync with the Sass variable for the panel header animation.
const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 *
 * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
 * causes the animation state of moved components to become `void` upon exit, and not update again
 * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
 * of the panel is `expanded` or `collapsed` but the animation state is `void`.
 *
 * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
 * are defined to have the same styles. Since angular animates from the current styles to the
 * destination state's style definition, in situations where we are moving from `void`'s styles to
 * `collapsed` this acts a noop since no style values change.
 *
 * In the case where angular's animation state is out of sync with the expansion panel's state, the
 * expansion panel being `expanded` and angular animations being `void`, the animation from the
 * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
 * occur as expected.
 *
 * Angular Bug: https://github.com/angular/angular/issues/18847
 *
 * @docs-private
 */
const matExpansionAnimations = {
  /** Animation that rotates the indicator arrow. */
  indicatorRotate: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('indicatorRotate', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'rotate(0deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'rotate(180deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(EXPANSION_PANEL_ANIMATION_TIMING))]),
  /** Animation that expands and collapses the panel content. */
  bodyExpansion: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('bodyExpansion', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    height: '0px',
    visibility: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    height: '*',
    visibility: 'visible'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(EXPANSION_PANEL_ANIMATION_TIMING))])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Token used to provide a `MatExpansionPanel` to `MatExpansionPanelContent`.
 * Used to avoid circular imports between `MatExpansionPanel` and `MatExpansionPanelContent`.
 */
const MAT_EXPANSION_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_EXPANSION_PANEL');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */
class MatExpansionPanelContent {
  constructor(_template, _expansionPanel) {
    this._template = _template;
    this._expansionPanel = _expansionPanel;
  }
}
MatExpansionPanelContent.ɵfac = function MatExpansionPanelContent_Factory(t) {
  return new (t || MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL, 8));
};
MatExpansionPanelContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatExpansionPanelContent,
  selectors: [["ng-template", "matExpansionPanelContent", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[matExpansionPanelContent]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_EXPANSION_PANEL]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();

/** Counter for generating unique element ids. */
let uniqueId = 0;
/**
 * Injection token that can be used to configure the default
 * options for the expansion panel component.
 */
const MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
/**
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */
class MatExpansionPanel extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionItem {
  /** Whether the toggle indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle || this.accordion && this.accordion.hideToggle;
  }
  set hideToggle(value) {
    this._hideToggle = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** The position of the expansion indicator. */
  get togglePosition() {
    return this._togglePosition || this.accordion && this.accordion.togglePosition;
  }
  set togglePosition(value) {
    this._togglePosition = value;
  }
  constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
    this._viewContainerRef = _viewContainerRef;
    this._animationMode = _animationMode;
    this._hideToggle = false;
    /** An event emitted after the body's expansion animation happens. */
    this.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** An event emitted after the body's collapse animation happens. */
    this.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Stream that emits for changes in `@Input` properties. */
    this._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /** ID for the associated header element. Used for a11y labelling. */
    this._headerId = `mat-expansion-panel-header-${uniqueId++}`;
    /** Stream of body animation done events. */
    this._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.accordion = accordion;
    this._document = _document;
    // We need a Subject with distinctUntilChanged, because the `done` event
    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
    this._bodyAnimationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)((x, y) => {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe(event => {
      if (event.fromState !== 'void') {
        if (event.toState === 'expanded') {
          this.afterExpand.emit();
        } else if (event.toState === 'collapsed') {
          this.afterCollapse.emit();
        }
      }
    });
    if (defaultOptions) {
      this.hideToggle = defaultOptions.hideToggle;
    }
  }
  /** Determines whether the expansion panel should have spacing between it and its siblings. */
  _hasSpacing() {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === 'default';
    }
    return false;
  }
  /** Gets the expanded state string. */
  _getExpandedState() {
    return this.expanded ? 'expanded' : 'collapsed';
  }
  /** Toggles the expanded state of the expansion panel. */
  toggle() {
    this.expanded = !this.expanded;
  }
  /** Sets the expanded state of the expansion panel to false. */
  close() {
    this.expanded = false;
  }
  /** Sets the expanded state of the expansion panel to true. */
  open() {
    this.expanded = true;
  }
  ngAfterContentInit() {
    if (this._lazyContent && this._lazyContent._expansionPanel === this) {
      // Render the content as soon as the panel becomes open.
      this.opened.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => this.expanded && !this._portal), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(() => {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
  }
  ngOnChanges(changes) {
    this._inputChanges.next(changes);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._bodyAnimationDone.complete();
    this._inputChanges.complete();
  }
  /** Checks whether the expansion panel's content contains the currently-focused element. */
  _containsFocus() {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }
    return false;
  }
}
MatExpansionPanel.ɵfac = function MatExpansionPanel_Factory(t) {
  return new (t || MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
};
MatExpansionPanel.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatExpansionPanel,
  selectors: [["mat-expansion-panel"]],
  contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelContent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
    }
  },
  viewQuery: function MatExpansionPanel_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
    }
  },
  hostAttrs: [1, "mat-expansion-panel"],
  hostVars: 6,
  hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
    }
  },
  inputs: {
    disabled: "disabled",
    expanded: "expanded",
    hideToggle: "hideToggle",
    togglePosition: "togglePosition"
  },
  outputs: {
    opened: "opened",
    closed: "closed",
    expandedChange: "expandedChange",
    afterExpand: "afterExpand",
    afterCollapse: "afterCollapse"
  },
  exportAs: ["matExpansionPanel"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
  // Provide MatAccordion as undefined to prevent nested expansion panels from registering
  // to the same accordion.
  {
    provide: MAT_ACCORDION,
    useValue: undefined
  }, {
    provide: MAT_EXPANSION_PANEL,
    useExisting: MatExpansionPanel
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c2,
  decls: 7,
  vars: 4,
  consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
  template: function MatExpansionPanel_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
        return ctx._bodyAnimationDone.next($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._headerId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
    }
  },
  dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.CdkPortalOutlet],
  styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*=\"visibility: hidden\"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}"],
  encapsulation: 2,
  data: {
    animation: [matExpansionAnimations.bodyExpansion]
  },
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-expansion-panel',
      exportAs: 'matExpansionPanel',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['disabled', 'expanded'],
      outputs: ['opened', 'closed', 'expandedChange'],
      animations: [matExpansionAnimations.bodyExpansion],
      providers: [
      // Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: undefined
      }, {
        provide: MAT_EXPANSION_PANEL,
        useExisting: MatExpansionPanel
      }],
      host: {
        'class': 'mat-expansion-panel',
        '[class.mat-expanded]': 'expanded',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
      },
      template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
      styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*=\"visibility: hidden\"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_ACCORDION]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
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
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    hideToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    togglePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    afterExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    afterCollapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _lazyContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatExpansionPanelContent]
    }],
    _body: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['body']
    }]
  });
})();
/**
 * Actions of a `<mat-expansion-panel>`.
 */
class MatExpansionPanelActionRow {}
MatExpansionPanelActionRow.ɵfac = function MatExpansionPanelActionRow_Factory(t) {
  return new (t || MatExpansionPanelActionRow)();
};
MatExpansionPanelActionRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatExpansionPanelActionRow,
  selectors: [["mat-action-row"]],
  hostAttrs: [1, "mat-action-row"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelActionRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-action-row',
      host: {
        class: 'mat-action-row'
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
// Boilerplate for applying mixins to MatExpansionPanelHeader.
/** @docs-private */
class MatExpansionPanelHeaderBase {}
const _MatExpansionPanelHeaderMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.mixinTabIndex)(MatExpansionPanelHeaderBase);
/**
 * Header element of a `<mat-expansion-panel>`.
 */
class MatExpansionPanelHeader extends _MatExpansionPanelHeaderMixinBase {
  constructor(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode, tabIndex) {
    super();
    this.panel = panel;
    this._element = _element;
    this._focusMonitor = _focusMonitor;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
    const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(changes => !!(changes['hideToggle'] || changes['togglePosition']))) : rxjs__WEBPACK_IMPORTED_MODULE_14__.EMPTY;
    this.tabIndex = parseInt(tabIndex || '') || 0;
    // Since the toggle state depends on an @Input on the panel, we
    // need to subscribe and trigger change detection manually.
    this._parentChangeSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.merge)(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(changes => {
      return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
    }))).subscribe(() => this._changeDetectorRef.markForCheck());
    // Avoids focus being lost if the panel contained the focused element and was closed.
    panel.closed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => panel._containsFocus())).subscribe(() => _focusMonitor.focusVia(_element, 'program'));
    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */
  get disabled() {
    return this.panel.disabled;
  }
  /** Toggles the expanded state of the panel. */
  _toggle() {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }
  /** Gets whether the panel is expanded. */
  _isExpanded() {
    return this.panel.expanded;
  }
  /** Gets the expanded state string of the panel. */
  _getExpandedState() {
    return this.panel._getExpandedState();
  }
  /** Gets the panel id. */
  _getPanelId() {
    return this.panel.id;
  }
  /** Gets the toggle position for the header. */
  _getTogglePosition() {
    return this.panel.togglePosition;
  }
  /** Gets whether the expand indicator should be shown. */
  _showToggle() {
    return !this.panel.hideToggle && !this.panel.disabled;
  }
  /**
   * Gets the current height of the header. Null if no custom height has been
   * specified, and if the default height from the stylesheet should be used.
   */
  _getHeaderHeight() {
    const isExpanded = this._isExpanded();
    if (isExpanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!isExpanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }
    return null;
  }
  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event) {
    switch (event.keyCode) {
      // Toggle for space and enter keys.
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.SPACE:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ENTER:
        if (!(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.hasModifierKey)(event)) {
          event.preventDefault();
          this._toggle();
        }
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion._handleHeaderKeydown(event);
        }
        return;
    }
  }
  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._element).subscribe(origin => {
      if (origin && this.panel.accordion) {
        this.panel.accordion._handleHeaderFocus(this);
      }
    });
  }
  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element);
  }
}
MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(t) {
  return new (t || MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
};
MatExpansionPanelHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatExpansionPanelHeader,
  selectors: [["mat-expansion-panel-header"]],
  hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
  hostVars: 15,
  hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
        return ctx._toggle();
      })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
        return ctx._keydown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx._getHeaderHeight());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    tabIndex: "tabIndex",
    expandedHeight: "expandedHeight",
    collapsedHeight: "collapsedHeight"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c4,
  decls: 5,
  vars: 3,
  consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]],
  template: function MatExpansionPanelHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-content-hide-toggle", !ctx._showToggle());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._showToggle());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf],
  styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}"],
  encapsulation: 2,
  data: {
    animation: [matExpansionAnimations.indicatorRotate]
  },
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-expansion-panel-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['tabIndex'],
      animations: [matExpansionAnimations.indicatorRotate],
      host: {
        'class': 'mat-expansion-panel-header mat-focus-indicator',
        'role': 'button',
        '[attr.id]': 'panel._headerId',
        '[attr.tabindex]': 'tabIndex',
        '[attr.aria-controls]': '_getPanelId()',
        '[attr.aria-expanded]': '_isExpanded()',
        '[attr.aria-disabled]': 'panel.disabled',
        '[class.mat-expanded]': '_isExpanded()',
        '[class.mat-expansion-toggle-indicator-after]': `_getTogglePosition() === 'after'`,
        '[class.mat-expansion-toggle-indicator-before]': `_getTogglePosition() === 'before'`,
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[style.height]': '_getHeaderHeight()',
        '(click)': '_toggle()',
        '(keydown)': '_keydown($event)'
      },
      template: "<span class=\"mat-content\" [class.mat-content-hide-toggle]=\"!_showToggle()\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
      styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}"]
    }]
  }], function () {
    return [{
      type: MatExpansionPanel,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
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
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }];
  }, {
    expandedHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    collapsedHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Description element of a `<mat-expansion-panel-header>`.
 */
class MatExpansionPanelDescription {}
MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(t) {
  return new (t || MatExpansionPanelDescription)();
};
MatExpansionPanelDescription.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatExpansionPanelDescription,
  selectors: [["mat-panel-description"]],
  hostAttrs: [1, "mat-expansion-panel-header-description"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelDescription, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-panel-description',
      host: {
        class: 'mat-expansion-panel-header-description'
      }
    }]
  }], null, null);
})();
/**
 * Title element of a `<mat-expansion-panel-header>`.
 */
class MatExpansionPanelTitle {}
MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(t) {
  return new (t || MatExpansionPanelTitle)();
};
MatExpansionPanelTitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatExpansionPanelTitle,
  selectors: [["mat-panel-title"]],
  hostAttrs: [1, "mat-expansion-panel-header-title"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-panel-title',
      host: {
        class: 'mat-expansion-panel-header-title'
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
/**
 * Directive for a Material Design Accordion.
 */
class MatAccordion extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordion {
  constructor() {
    super(...arguments);
    /** Headers belonging to this accordion. */
    this._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    this._hideToggle = false;
    /**
     * Display mode used for all expansion panels in the accordion. Currently two display
     * modes exist:
     *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
     *     panel at a different elevation from the rest of the accordion.
     *  flat - no spacing is placed around expanded panels, showing all panels at the same
     *     elevation.
     */
    this.displayMode = 'default';
    /** The position of the expansion indicator. */
    this.togglePosition = 'after';
  }
  /** Whether the expansion indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle;
  }
  set hideToggle(show) {
    this._hideToggle = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(show);
  }
  ngAfterContentInit() {
    this._headers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(this._headers)).subscribe(headers => {
      this._ownHeaders.reset(headers.filter(header => header.panel.accordion === this));
      this._ownHeaders.notifyOnChanges();
    });
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
  }
  /** Handles keyboard events coming in from the panel headers. */
  _handleHeaderKeydown(event) {
    this._keyManager.onKeydown(event);
  }
  _handleHeaderFocus(header) {
    this._keyManager.updateActiveItem(header);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._keyManager?.destroy();
    this._ownHeaders.destroy();
  }
}
MatAccordion.ɵfac = /* @__PURE__ */function () {
  let ɵMatAccordion_BaseFactory;
  return function MatAccordion_Factory(t) {
    return (ɵMatAccordion_BaseFactory || (ɵMatAccordion_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAccordion)))(t || MatAccordion);
  };
}();
MatAccordion.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatAccordion,
  selectors: [["mat-accordion"]],
  contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelHeader, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headers = _t);
    }
  },
  hostAttrs: [1, "mat-accordion"],
  hostVars: 2,
  hostBindings: function MatAccordion_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
    }
  },
  inputs: {
    multi: "multi",
    hideToggle: "hideToggle",
    displayMode: "displayMode",
    togglePosition: "togglePosition"
  },
  exportAs: ["matAccordion"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_ACCORDION,
    useExisting: MatAccordion
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAccordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-accordion',
      exportAs: 'matAccordion',
      inputs: ['multi'],
      providers: [{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }],
      host: {
        class: 'mat-accordion',
        // Class binding which is only used by the test harness as there is no other
        // way for the harness to detect if multiple panel support is enabled.
        '[class.mat-accordion-multi]': 'this.multi'
      }
    }]
  }], null, {
    _headers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatExpansionPanelHeader, {
        descendants: true
      }]
    }],
    hideToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    togglePosition: [{
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
class MatExpansionModule {}
MatExpansionModule.ɵfac = function MatExpansionModule_Factory(t) {
  return new (t || MatExpansionModule)();
};
MatExpansionModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatExpansionModule
});
MatExpansionModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule],
      exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
      declarations: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
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
//# sourceMappingURL=src_app_pages_dashboard-page_dashboard-page_component_ts.js.map