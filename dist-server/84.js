exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 4178:
/*!***********************************************************!*\
  !*** ./src/app/stocks/services/socket-service.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketService": () => (/* binding */ SocketService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 29605);





class SocketService {
    constructor(_platformId) {
        this._platformId = _platformId;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this._platformId)) {
            this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)("https://stocks-socket-server.herokuapp.com/");
        }
    }
    startSending() {
        this.socket.emit('start');
    }
    getStocks() {
        // return this.socket.fromEvent<Stock[]>('ticker').pipe(
        //   filter(() => isPlatformBrowser(this._platformId))
        // );
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
            this.socket.on('ticker', (tickers) => observer.next(tickers));
        });
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID)); };
SocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 98526:
/*!*********************************************************!*\
  !*** ./src/app/stocks/stocks-routing-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StocksRoutingModule": () => (/* binding */ StocksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _stocks_stocks_item_stocks_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocks/stocks-item/stocks-item.component */ 33603);
/* harmony import */ var _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stocks/stocks.component */ 88464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    { path: '', component: _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_1__.StocksComponent },
    { path: ':ticker', component: _stocks_stocks_item_stocks_item_component__WEBPACK_IMPORTED_MODULE_0__.StocksItemComponent }
];
class StocksRoutingModule {
}
StocksRoutingModule.ɵfac = function StocksRoutingModule_Factory(t) { return new (t || StocksRoutingModule)(); };
StocksRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: StocksRoutingModule });
StocksRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StocksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 11022:
/*!*****************************************!*\
  !*** ./src/app/stocks/stocks.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StocksModule": () => (/* binding */ StocksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocks/stocks.component */ 88464);
/* harmony import */ var _stocks_routing_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stocks-routing-routing.module */ 98526);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _stocks_stocks_item_stocks_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stocks/stocks-item/stocks-item.component */ 33603);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _store_stocks_stocks_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/stocks/stocks.reducer */ 75520);
/* harmony import */ var _store_stocks_stocks_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/stocks/stocks.effects */ 77469);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);















class StocksModule {
}
StocksModule.ɵfac = function StocksModule_Factory(t) { return new (t || StocksModule)(); };
StocksModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: StocksModule });
StocksModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _stocks_routing_routing_module__WEBPACK_IMPORTED_MODULE_1__.StocksRoutingModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forFeature(_store_stocks_stocks_reducer__WEBPACK_IMPORTED_MODULE_3__.STOCKS_REDUCER_NODE, _store_stocks_stocks_reducer__WEBPACK_IMPORTED_MODULE_3__.stocksReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsModule.forFeature([_store_stocks_stocks_effects__WEBPACK_IMPORTED_MODULE_4__.StockEffects]),
            ng2_charts__WEBPACK_IMPORTED_MODULE_12__.ChartsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](StocksModule, { declarations: [_stocks_stocks_component__WEBPACK_IMPORTED_MODULE_0__.StocksComponent, _stocks_stocks_item_stocks_item_component__WEBPACK_IMPORTED_MODULE_2__.StocksItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _stocks_routing_routing_module__WEBPACK_IMPORTED_MODULE_1__.StocksRoutingModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsFeatureModule, ng2_charts__WEBPACK_IMPORTED_MODULE_12__.ChartsModule] }); })();


/***/ }),

/***/ 33603:
/*!********************************************************************!*\
  !*** ./src/app/stocks/stocks/stocks-item/stocks-item.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StocksItemComponent": () => (/* binding */ StocksItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_store_router_router_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/router/router.selectors */ 22869);
/* harmony import */ var _store_stocks_stocks_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/stocks/stocks.selectors */ 2479);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 57057);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 86178);










const _c0 = function () {
  return [];
};

class StocksItemComponent {
  constructor(store$, datePipe, _platformId) {
    this.store$ = store$;
    this.datePipe = datePipe;
    this._platformId = _platformId;
    this.routerParam$ = this.store$.select(src_app_store_router_router_selectors__WEBPACK_IMPORTED_MODULE_0__.selectParamTicker);
    this.history$ = this.store$.select(_store_stocks_stocks_selectors__WEBPACK_IMPORTED_MODULE_1__.selectFeatureStockHistory).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.routerParam$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(([history, routerParam]) => Boolean(history) && Boolean(routerParam)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([history, routerParam]) => history[routerParam].slice(-10)));
    this.lineChartData$ = this.history$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this._platformId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(historyArray => {
      return [{
        data: historyArray.map(historyItem => historyItem.price),
        label: historyArray.map(historyItem => historyItem.ticker).slice(0)[0]
      }];
    }));
    this.lineChartLabels$ = this.history$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(historyArray => {
      return historyArray.map(historyItem => this.datePipe.transform(historyItem.last_trade_time, 'h:mm:ss a'));
    }));
    this.lineChartColors = [{
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)'
    }];
    this.lineChartOptions = {
      responsive: true,
      animation: {
        duration: 0
      }
    };
  }

}

StocksItemComponent.ɵfac = function StocksItemComponent_Factory(t) {
  return new (t || StocksItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID));
};

StocksItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: StocksItemComponent,
  selectors: [["app-stocks-item"]],
  decls: 8,
  vars: 14,
  consts: [[1, "container"], [1, "chart-wrapper"], ["baseChart", "", "chartType", "line", 3, "datasets", "labels", "options", "colors", "legend", "plugins"]],
  template: function StocksItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "canvas", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Statistic: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 7, ctx.routerParam$), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("datasets", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 9, ctx.lineChartData$))("labels", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 11, ctx.lineChartLabels$))("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", true)("plugins", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c0));
    }
  },
  directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_8__.BaseChartDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".container[_ngcontent-%COMP%] {\n    margin: 0 20%;\n    color: honeydew;\n    background-color:   rgba(255,255,0,0.28);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2Nrcy1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHdDQUF3QztBQUM1QyIsImZpbGUiOiJzdG9ja3MtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIDIwJTtcbiAgICBjb2xvcjogaG9uZXlkZXc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICByZ2JhKDI1NSwyNTUsMCwwLjI4KTtcbn0iXX0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 88464:
/*!***************************************************!*\
  !*** ./src/app/stocks/stocks/stocks.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StocksComponent": () => (/* binding */ StocksComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _store_stocks_stocks_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/stocks/stocks.selectors */ 2479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);












function StocksComponent_div_0_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " arrow_upward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function StocksComponent_div_0_div_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " arrow_downward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function StocksComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StocksComponent_div_0_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const stock_r6 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return ctx_r10.navigateToStockDesecription(stock_r6.ticker);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, StocksComponent_div_0_div_2_div_8_Template, 4, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, StocksComponent_div_0_div_2_ng_template_9_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const stock_r6 = ctx.$implicit;

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Ticker: ", stock_r6.ticker, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Price: ", stock_r6.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Last change: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 5, stock_r6.last_trade_time, "dd:MM:yyyy, HH:mm:ss"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", stock_r6.yield > 1)("ngIfElse", _r8);
  }
}

function StocksComponent_div_0_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const switcher_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", switcher_r12.ticker);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](switcher_r12.ticker);
  }
}

function StocksComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StocksComponent_div_0_div_2_Template, 11, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, StocksComponent_div_0_li_5_Template, 5, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const stocks_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", stocks_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.switchers);
  }
}

function StocksComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

class StocksComponent {
  constructor(fb, router, store$, route) {
    this.fb = fb;
    this.router = router;
    this.store$ = store$;
    this.route = route;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
    this.stocks$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
    this.switchers = [{
      ticker: 'AAPL',
      checked: true
    }, {
      ticker: 'GOOGL',
      checked: true
    }, {
      ticker: 'MSFT',
      checked: true
    }, {
      ticker: 'AMZN',
      checked: true
    }, {
      ticker: 'FB',
      checked: true
    }, {
      ticker: 'TSLA',
      checked: true
    }];

    this._formInitialize();
  }

  ngOnInit() {
    this.stocks$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.store$.select(_store_stocks_stocks_selectors__WEBPACK_IMPORTED_MODULE_0__.selectFeatureStock), this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(this.form.value))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([stocks, switcherForm]) => stocks.filter(stock => switcherForm[stock.ticker])));
  }

  navigateToStockDesecription(ticker) {
    this.router.navigate([ticker], {
      relativeTo: this.route
    });
  }

  _formInitialize() {
    this.form = this.fb.group(this.switchers.reduce((group, switcher) => ({ ...group,
      [switcher.ticker]: [switcher.checked]
    }), {}));
  }

}

StocksComponent.ɵfac = function StocksComponent_Factory(t) {
  return new (t || StocksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
};

StocksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: StocksComponent,
  selectors: [["app-stocks"]],
  decls: 4,
  vars: 4,
  consts: [["class", "content", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "content"], [1, "stocks-wrap"], ["class", "stock-wrap__stock-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "switchers", 3, "formGroup"], ["class", "switchers__item", 4, "ngFor", "ngForOf"], [1, "stock-wrap__stock-item", 3, "click"], [1, "stock-wrap__name"], [1, "stock-wrap__price"], [1, "stock-wrap__date"], [4, "ngIf", "ngIfElse"], ["arrowDown", ""], [1, "stock-wrap__arrowUp"], ["aria-hidden", "false", "aria-label", "Example home icon"], [1, "stock-wrap__arrowDown"], [1, "switchers__item"], ["type", "checkbox", 3, "formControlName"], [1, "switchers__label"], [1, "loader"]],
  template: function StocksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, StocksComponent_div_0_Template, 6, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StocksComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.stocks$))("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatSpinner],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: [".content[_ngcontent-%COMP%] {\n    margin: 20px 20% 0;\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n}\n.stocks-wrap[_ngcontent-%COMP%]{\n    width: 800px;\n    display: flex;\n    flex-direction: column;\n}\n.stock-wrap__stock-item[_ngcontent-%COMP%]{\n    color: honeydew;\n    background-color: rgb(85, 84, 84);\n    border-radius: 8px;\n    border: 1px solid rgb(85, 84, 84);\n    padding: 10px;\n    display: flex;\n    justify-content: space-between;\n    flex-basis: auto;\n}\n.stock-wrap__stock-item[_ngcontent-%COMP%]:hover {\n    background-color: rgba(153, 156, 121, 0.4);\n}\n.stock-wrap__stock-item[_ngcontent-%COMP%]:active {\n    background-color: rgba(77, 78, 61, 0.4);\n}\n.stock-wrap__stock-item[_ngcontent-%COMP%]    + .stock-wrap__stock-item[_ngcontent-%COMP%] {\n     margin-top: 10px;\n}\n.stock-wrap__arrowDown[_ngcontent-%COMP%]{\n    color: rgb(231, 15, 15);\n}\n.stock-wrap__arrowUp[_ngcontent-%COMP%]{\n    color: rgb(19, 172, 19);\n}\n.switchers[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    padding: 30px;\n    background-color: rgb(85, 84, 84);\n    margin-left: 10px;\n    border-radius: 8px;\n}\n.switchers__item[_ngcontent-%COMP%]{\n    color: honeydew;\n    list-style: none;\n    font-size: 1.6rem;\n}\n.switchers__item[_ngcontent-%COMP%]    + .switchers__item[_ngcontent-%COMP%] {\n    margin-top: 15px;\n}\n.switchers__label[_ngcontent-%COMP%] {\n    padding-left: 10px;\n}\n.loader[_ngcontent-%COMP%]{\n     margin: auto;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2Nrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMENBQTBDO0FBQzlDO0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7QUFFQTtLQUNLLGdCQUFnQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVDO0tBQ0ksWUFBWTtDQUNoQiIsImZpbGUiOiJzdG9ja3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBtYXJnaW46IDIwcHggMjAlIDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc3RvY2tzLXdyYXB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zdG9jay13cmFwX19zdG9jay1pdGVte1xuICAgIGNvbG9yOiBob25leWRldztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODUsIDg0LCA4NCk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4NSwgODQsIDg0KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtYmFzaXM6IGF1dG87XG59XG4uc3RvY2std3JhcF9fc3RvY2staXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1NiwgMTIxLCAwLjQpO1xufVxuLnN0b2NrLXdyYXBfX3N0b2NrLWl0ZW06YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCA3OCwgNjEsIDAuNCk7XG59XG5cbi5zdG9jay13cmFwX19zdG9jay1pdGVtICsgLnN0b2NrLXdyYXBfX3N0b2NrLWl0ZW0ge1xuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnN0b2NrLXdyYXBfX2Fycm93RG93bntcbiAgICBjb2xvcjogcmdiKDIzMSwgMTUsIDE1KTtcbn1cbi5zdG9jay13cmFwX19hcnJvd1Vwe1xuICAgIGNvbG9yOiByZ2IoMTksIDE3MiwgMTkpO1xufVxuXG4uc3dpdGNoZXJzIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODUsIDg0LCA4NCk7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnN3aXRjaGVyc19faXRlbXtcbiAgICBjb2xvcjogaG9uZXlkZXc7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbn1cbi5zd2l0Y2hlcnNfX2l0ZW0gKyAuc3dpdGNoZXJzX19pdGVtIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc3dpdGNoZXJzX19sYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4gLmxvYWRlcntcbiAgICAgbWFyZ2luOiBhdXRvO1xuIH0iXX0= */"]
});

/***/ }),

/***/ 18685:
/*!*******************************************************!*\
  !*** ./src/app/stocks/store/stocks/stocks.actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchStocks": () => (/* binding */ fetchStocks),
/* harmony export */   "fetchStocksSucces": () => (/* binding */ fetchStocksSucces),
/* harmony export */   "fetchStocksHistorySuccess": () => (/* binding */ fetchStocksHistorySuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

const fetchStocks = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[STOCKS] Fetch stocks');
const fetchStocksSucces = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[STOCKS] Fetch stocks success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchStocksHistorySuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[STOCKS] Fetch stocks history success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 77469:
/*!*******************************************************!*\
  !*** ./src/app/stocks/store/stocks/stocks.effects.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockEffects": () => (/* binding */ StockEffects)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var _stocks_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocks.actions */ 18685);
/* harmony import */ var _services_socket_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/socket-service.service */ 4178);








class StockEffects {
    constructor(actions$, _platformId, socketService) {
        this.actions$ = actions$;
        this._platformId = _platformId;
        this.socketService = socketService;
        this.fetchStocks$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_stocks_actions__WEBPACK_IMPORTED_MODULE_0__.fetchStocks), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this._platformId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.socketService.startSending()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(() => this.socketService
            .getStocks()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)((stocks) => [
            (0,_stocks_actions__WEBPACK_IMPORTED_MODULE_0__.fetchStocksSucces)({ stocks }),
            (0,_stocks_actions__WEBPACK_IMPORTED_MODULE_0__.fetchStocksHistorySuccess)({ stocks })
        ])))));
    }
    ngrxOnInitEffects() {
        return (0,_stocks_actions__WEBPACK_IMPORTED_MODULE_0__.fetchStocks)();
    }
}
StockEffects.ɵfac = function StockEffects_Factory(t) { return new (t || StockEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_socket_service_service__WEBPACK_IMPORTED_MODULE_1__.SocketService)); };
StockEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: StockEffects, factory: StockEffects.ɵfac });


/***/ }),

/***/ 75520:
/*!*******************************************************!*\
  !*** ./src/app/stocks/store/stocks/stocks.reducer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STOCKS_REDUCER_NODE": () => (/* binding */ STOCKS_REDUCER_NODE),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "stocksReducer": () => (/* binding */ stocksReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _stocks_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocks.actions */ 18685);


const STOCKS_REDUCER_NODE = 'stocks';
const initialState = {
    stocks: [],
    stocksHistory: {}
};
const stocksReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_stocks_actions__WEBPACK_IMPORTED_MODULE_0__.fetchStocksSucces, (state, { stocks }) => ({
    ...state,
    stocks: stocks,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_stocks_actions__WEBPACK_IMPORTED_MODULE_0__.fetchStocksHistorySuccess, (state, { stocks }) => {
    const newHistory = {
        ...state.stocksHistory
    };
    stocks.forEach((stock) => {
        if (newHistory[stock.ticker]) {
            const history = newHistory[stock.ticker];
            newHistory[stock.ticker] = [...history, stock];
            return;
        }
        newHistory[stock.ticker] = [stock];
    });
    return {
        ...state,
        stocksHistory: newHistory
    };
}));


/***/ }),

/***/ 2479:
/*!*********************************************************!*\
  !*** ./src/app/stocks/store/stocks/stocks.selectors.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectFeature": () => (/* binding */ selectFeature),
/* harmony export */   "selectFeatureStock": () => (/* binding */ selectFeatureStock),
/* harmony export */   "selectFeatureStockHistory": () => (/* binding */ selectFeatureStockHistory)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _stocks_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocks.reducer */ 75520);


const selectFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_stocks_reducer__WEBPACK_IMPORTED_MODULE_0__.STOCKS_REDUCER_NODE);
const selectFeatureStock = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectFeature, (state) => state.stocks);
const selectFeatureStockHistory = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectFeature, (state) => state.stocksHistory);


/***/ }),

/***/ 22869:
/*!**************************************************!*\
  !*** ./src/app/store/router/router.selectors.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectRouter": () => (/* binding */ selectRouter),
/* harmony export */   "selectCurrentRoute": () => (/* binding */ selectCurrentRoute),
/* harmony export */   "selectFragment": () => (/* binding */ selectFragment),
/* harmony export */   "selectQueryParams": () => (/* binding */ selectQueryParams),
/* harmony export */   "selectQueryParam": () => (/* binding */ selectQueryParam),
/* harmony export */   "selectRouteParams": () => (/* binding */ selectRouteParams),
/* harmony export */   "selectRouteParam": () => (/* binding */ selectRouteParam),
/* harmony export */   "selectRouteData": () => (/* binding */ selectRouteData),
/* harmony export */   "selectUrl": () => (/* binding */ selectUrl),
/* harmony export */   "selectParamTicker": () => (/* binding */ selectParamTicker)
/* harmony export */ });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ 39667);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);


const selectRouter = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('router');
const { selectCurrentRoute, // select the current route
selectFragment, // select the current route fragment
selectQueryParams, // select the current route query params
selectQueryParam, // factory function to select a query param
selectRouteParams, // select the current route params
selectRouteParam, // factory function to select a route param
selectRouteData, // select the current route data
selectUrl, // select the current url
 } = (0,_ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__.getSelectors)(selectRouter);
const selectParamTicker = selectRouteParam('ticker');


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 26431,
	"./af.js": 26431,
	"./ar": 81286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 43160,
	"./ar-ly.js": 43160,
	"./ar-ma": 62551,
	"./ar-ma.js": 62551,
	"./ar-sa": 79989,
	"./ar-sa.js": 79989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 81286,
	"./az": 15887,
	"./az.js": 15887,
	"./be": 14572,
	"./be.js": 14572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 93344,
	"./bm.js": 93344,
	"./bn": 58985,
	"./bn-bd": 83990,
	"./bn-bd.js": 83990,
	"./bn.js": 58985,
	"./bo": 94391,
	"./bo.js": 94391,
	"./br": 46728,
	"./br.js": 46728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 41043,
	"./ca.js": 41043,
	"./cs": 70420,
	"./cs.js": 70420,
	"./cv": 33513,
	"./cv.js": 33513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 47978,
	"./da.js": 47978,
	"./de": 46061,
	"./de-at": 25204,
	"./de-at.js": 25204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 46061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 25724,
	"./en-au.js": 25724,
	"./en-ca": 10525,
	"./en-ca.js": 10525,
	"./en-gb": 52847,
	"./en-gb.js": 52847,
	"./en-ie": 67216,
	"./en-ie.js": 67216,
	"./en-il": 39305,
	"./en-il.js": 39305,
	"./en-in": 73364,
	"./en-in.js": 73364,
	"./en-nz": 79130,
	"./en-nz.js": 79130,
	"./en-sg": 11161,
	"./en-sg.js": 11161,
	"./eo": 50802,
	"./eo.js": 50802,
	"./es": 40328,
	"./es-do": 45551,
	"./es-do.js": 45551,
	"./es-mx": 75615,
	"./es-mx.js": 75615,
	"./es-us": 64790,
	"./es-us.js": 64790,
	"./es.js": 40328,
	"./et": 96389,
	"./et.js": 96389,
	"./eu": 52961,
	"./eu.js": 52961,
	"./fa": 26151,
	"./fa.js": 26151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 58898,
	"./fil.js": 58898,
	"./fo": 37779,
	"./fo.js": 37779,
	"./fr": 28174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 38867,
	"./fr-ch.js": 38867,
	"./fr.js": 28174,
	"./fy": 50452,
	"./fy.js": 50452,
	"./ga": 45014,
	"./ga.js": 45014,
	"./gd": 74127,
	"./gd.js": 74127,
	"./gl": 72124,
	"./gl.js": 72124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 37953,
	"./gom-latn.js": 37953,
	"./gu": 76604,
	"./gu.js": 76604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 74235,
	"./hi.js": 74235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 37735,
	"./hu.js": 37735,
	"./hy-am": 90402,
	"./hy-am.js": 90402,
	"./id": 59187,
	"./id.js": 59187,
	"./is": 30536,
	"./is.js": 30536,
	"./it": 35007,
	"./it-ch": 94667,
	"./it-ch.js": 94667,
	"./it.js": 35007,
	"./ja": 62093,
	"./ja.js": 62093,
	"./jv": 80059,
	"./jv.js": 80059,
	"./ka": 66870,
	"./ka.js": 66870,
	"./kk": 80880,
	"./kk.js": 80880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 68785,
	"./kn.js": 68785,
	"./ko": 21721,
	"./ko.js": 21721,
	"./ku": 37851,
	"./ku.js": 37851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 40346,
	"./lb.js": 40346,
	"./lo": 93002,
	"./lo.js": 93002,
	"./lt": 64035,
	"./lt.js": 64035,
	"./lv": 56927,
	"./lv.js": 56927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 94173,
	"./mi.js": 94173,
	"./mk": 86320,
	"./mk.js": 86320,
	"./ml": 11705,
	"./ml.js": 11705,
	"./mn": 31062,
	"./mn.js": 31062,
	"./mr": 92805,
	"./mr.js": 92805,
	"./ms": 11341,
	"./ms-my": 59900,
	"./ms-my.js": 59900,
	"./ms.js": 11341,
	"./mt": 37734,
	"./mt.js": 37734,
	"./my": 19034,
	"./my.js": 19034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 46495,
	"./ne.js": 46495,
	"./nl": 70673,
	"./nl-be": 76272,
	"./nl-be.js": 76272,
	"./nl.js": 70673,
	"./nn": 72486,
	"./nn.js": 72486,
	"./oc-lnc": 46219,
	"./oc-lnc.js": 46219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 78444,
	"./pl.js": 78444,
	"./pt": 53170,
	"./pt-br": 66117,
	"./pt-br.js": 66117,
	"./pt.js": 53170,
	"./ro": 96587,
	"./ro.js": 96587,
	"./ru": 39264,
	"./ru.js": 39264,
	"./sd": 42135,
	"./sd.js": 42135,
	"./se": 95366,
	"./se.js": 95366,
	"./si": 93379,
	"./si.js": 93379,
	"./sk": 46143,
	"./sk.js": 46143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 21082,
	"./sq.js": 21082,
	"./sr": 91621,
	"./sr-cyrl": 98963,
	"./sr-cyrl.js": 98963,
	"./sr.js": 91621,
	"./ss": 41404,
	"./ss.js": 41404,
	"./sv": 55685,
	"./sv.js": 55685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 54106,
	"./ta.js": 54106,
	"./te": 39204,
	"./te.js": 39204,
	"./tet": 83692,
	"./tet.js": 83692,
	"./tg": 86361,
	"./tg.js": 86361,
	"./th": 31735,
	"./th.js": 31735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 96129,
	"./tl-ph.js": 96129,
	"./tlh": 13759,
	"./tlh.js": 13759,
	"./tr": 81644,
	"./tr.js": 81644,
	"./tzl": 90875,
	"./tzl.js": 90875,
	"./tzm": 16878,
	"./tzm-latn": 11041,
	"./tzm-latn.js": 11041,
	"./tzm.js": 16878,
	"./ug-cn": 74357,
	"./ug-cn.js": 74357,
	"./uk": 74810,
	"./uk.js": 74810,
	"./ur": 86794,
	"./ur.js": 86794,
	"./uz": 28966,
	"./uz-latn": 77959,
	"./uz-latn.js": 77959,
	"./uz.js": 28966,
	"./vi": 35386,
	"./vi.js": 35386,
	"./x-pseudo": 23156,
	"./x-pseudo.js": 23156,
	"./yo": 68028,
	"./yo.js": 68028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 89380,
	"./zh-hk.js": 89380,
	"./zh-mo": 60874,
	"./zh-mo.js": 60874,
	"./zh-tw": 96508,
	"./zh-tw.js": 96508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

};
;
//# sourceMappingURL=84.js.map