(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Authentication/auth-component/auth-component.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Authentication/auth-component/auth-component.component.ts ***!
  \***************************************************************************/
/*! exports provided: AuthComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponentComponent", function() { return AuthComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/Authentication/shared/auth.service.ts");
/* harmony import */ var _shared_acrud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/acrud.service */ "./src/app/Authentication/shared/acrud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../spinner/loading-spinner/loading-spinner.component */ "./src/app/spinner/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function AuthComponentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
} }
function AuthComponentComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/reset-password"]; };
function AuthComponentComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthComponentComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSubmit(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponentComponent_form_4_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSwitchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Forget Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponentComponent_form_4_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.tryGoogleLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Login with Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.isLoginMode ? "Login" : "Sign Up", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Switch to ", ctx_r2.isLoginMode ? "Sign Up" : "Login", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
} }
class AuthComponentComponent {
    constructor(authService, acrud, router) {
        this.authService = authService;
        this.acrud = acrud;
        this.router = router;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
        this.isPorfileset = false;
    }
    ngOnInit() {
    }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        this.isLoading = true;
        if (this.isLoginMode) {
            this.authService.SignIn(email, password)
                .then(d => {
                this.isLoading = false;
                this.authService.LoginData.subscribe(x => {
                    if (x.user.emailVerified) {
                        this.getProfileByUid(x.user.uid);
                    }
                });
            })
                .catch(e => {
                this.isLoading = false;
                this.error = e.message;
            });
        }
        else {
            this.authService.SignUp(email, password).then(d => {
                this.isLoading = false;
                this.authService.logout();
            })
                .catch(e => {
                this.authService.logout();
                this.isLoading = false;
                this.error = e;
            });
        }
        form.reset();
    }
    tryGoogleLogin() {
        this.isLoading = true;
        this.authService.doGoogleLogin()
            .then(res => {
            this.isLoading = false;
            this.getProfileByUid(res.uid);
        });
    }
    getProfileByUid(uid) {
        this.acrud.getProfileFromUid(uid).subscribe(data => {
            let x = this.acrud.seprate(data);
            this.isPorfileset = x[0];
            this.isLoading = false;
            if (this.isPorfileset) {
                this.router.navigate(['']);
            }
            else {
                this.router.navigate(['myprofile']);
            }
        });
    }
}
AuthComponentComponent.ɵfac = function AuthComponentComponent_Factory(t) { return new (t || AuthComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_acrud_service__WEBPACK_IMPORTED_MODULE_2__["ACrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponentComponent, selectors: [["app-auth-component"]], decls: 5, vars: 3, consts: [[1, "row"], [1, "col-xs-12", "col-md-6", "col-md-offset-3"], ["class", "alert alert-danger", 4, "ngIf"], ["style", "text-align: center;", "class", "loading-text", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "loading-text", 2, "text-align", "center"], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "ngModel", "", "name", "email", "required", "", "email", "", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "ngModel", "", "name", "password", "required", "", "minlength", "6", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-link", 3, "routerLink"], ["type", "button", 1, "btn", "btn-block", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-google"]], template: function AuthComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponentComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuthComponentComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AuthComponentComponent_form_4_Template, 22, 5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__["LoadingSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".btn-link[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQXV0aGVudGljYXRpb24vYXV0aC1jb21wb25lbnQvYXV0aC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9BdXRoZW50aWNhdGlvbi9hdXRoLWNvbXBvbmVudC9hdXRoLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1saW5rIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-component',
                templateUrl: './auth-component.component.html',
                styleUrls: ['./auth-component.component.css']
            }]
    }], function () { return [{ type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _shared_acrud_service__WEBPACK_IMPORTED_MODULE_2__["ACrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Authentication/resetpassword/resetpassword.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Authentication/resetpassword/resetpassword.component.ts ***!
  \*************************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/Authentication/shared/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../spinner/loading-spinner/loading-spinner.component */ "./src/app/spinner/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function ResetpasswordComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
} }
function ResetpasswordComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/auth"]; };
function ResetpasswordComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetpasswordComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSubmit(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Reset Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
class ResetpasswordComponent {
    constructor(auth) {
        this.auth = auth;
        this.isLoading = false;
        this.error = "";
    }
    ngOnInit() {
    }
    onSubmit(form) {
        this.isLoading = true;
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        this.auth.sendPasswordResetEmail(email).then(() => {
            this.isLoading = false;
        })
            .catch(e => {
            this.isLoading = false;
            this.error = e.message;
            this.auth.showerrorForResetMail();
        });
    }
}
ResetpasswordComponent.ɵfac = function ResetpasswordComponent_Factory(t) { return new (t || ResetpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
ResetpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetpasswordComponent, selectors: [["app-resetpassword"]], decls: 5, vars: 3, consts: [[1, "row"], [1, "col-xs-12", "col-md-6", "col-md-offset-3"], ["class", "alert alert-danger", 4, "ngIf"], ["style", "text-align: center;", "class", "loading-text", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "loading-text", 2, "text-align", "center"], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "ngModel", "", "name", "email", "required", "", "email", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "btn", "btn-link", 3, "routerLink"]], template: function ResetpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetpasswordComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResetpasswordComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResetpasswordComponent_form_4_Template, 11, 3, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGhlbnRpY2F0aW9uL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetpasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resetpassword',
                templateUrl: './resetpassword.component.html',
                styleUrls: ['./resetpassword.component.css']
            }]
    }], function () { return [{ type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Authentication/shared/acrud.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Authentication/shared/acrud.service.ts ***!
  \********************************************************/
/*! exports provided: ACrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACrudService", function() { return ACrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_Unauthenticated_shared_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Unauthenticated/shared/crud.service */ "./src/app/Unauthenticated/shared/crud.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/Authentication/shared/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");










class ACrudService {
    constructor(http, ucrud, authService, afs, router, toastr) {
        this.http = http;
        this.ucrud = ucrud;
        this.authService = authService;
        this.afs = afs;
        this.router = router;
        this.toastr = toastr;
        this.postdata = {};
        this.d1 = [];
        this.d2 = [];
        this.d3 = [];
        this.d4 = [];
        this.OthersUid = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.pu = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.pr = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.all = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.d3);
        this.all3 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.d3);
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.PostDataForLikeCount = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.PostDataForLikedByUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        setTimeout(() => {
            this.authService.user.subscribe(data => {
                if (data) {
                    this.uid = data.id;
                }
            });
        }, 2000);
    }
    getUid() {
        return new Promise(res => {
            this.authService.user.subscribe((user) => {
                if (user) {
                    this.uid = user.uid;
                }
                res(this.uid);
            });
        });
    }
    sortDesecending(Post) {
        Post.sort((a, b) => b.created_date - a.created_date);
        return Post;
    }
    createProfile(value) {
        this.getUid();
        this.ProfieData = {
            id: this.uid,
            uname: value.uname.trim(),
            desc: value.desc,
            email: value.email,
            name: value.name,
            created_date: this.ucrud.currentDate,
            imgurl: this.ucrud.downloadURL,
            isProfileSet: true
        };
        this.createPublicProfile(this.ProfieData, this.ProfieData.uname.trim());
        this.getUid().then(d => {
            this.http.post(`https://fir-2f842.firebaseio.com/post/${this.uid}/profile.json`, this.ProfieData)
                .subscribe(responseData => {
                this.showSuccessCreateProfile();
            });
        });
    }
    createPublicProfile(postdata, uname) {
        this.http.post(`https://fir-2f842.firebaseio.com/PublicProfile/${uname}.json`, postdata)
            .subscribe(responseData => {
        });
    }
    getProfile() {
        this.getUid();
        if (this.uid) {
            return this.http.get(`https://fir-2f842.firebaseio.com/post/${this.uid}/profile.json`);
        }
        else {
            this.getUid().then((d) => {
                this.uid = d;
                return this.http.get(`https://fir-2f842.firebaseio.com/post/${this.uid}/profile.json`);
            });
        }
    }
    createPost(value) {
        this.postdata = {
            title: value.title,
            nameToSearch: value.title.toLowerCase(),
            desc: value.desc,
            category: value.category,
            subcategory: value.subcategory,
            name: value.name,
            created_date: this.ucrud.currentDate,
            imgurl: this.ucrud.downloadURL,
            privacy: value.privacy,
            uid: this.id,
            uname: this.uname.trim(),
        };
        if (value.privacy == "true") {
            this.getUid().then((d) => {
                this.uid = d;
                this.http.post(`https://fir-2f842.firebaseio.com/post/${this.uid}/public.json`, this.postdata)
                    .subscribe(responseData => {
                    this.router.navigate(['']);
                    this.showSuccess();
                }, err => {
                });
            });
        }
        else {
            this.http.post(`https://fir-2f842.firebaseio.com/post//${this.uid}/private.json`, this.postdata)
                .subscribe(responseData => {
                this.router.navigate(['']);
            });
        }
    }
    getPublicPost() {
        return this.http.get(`https://fir-2f842.firebaseio.com/post/${this.uid}/public.json`);
    }
    getPrivatePost() {
        return this.http.get(`https://fir-2f842.firebaseio.com/post/${this.uid}/private.json`);
    }
    getAllData() {
        this.getUid();
        let x = this.http.get(`https://fir-2f842.firebaseio.com/post/${this.uid}/public.json`);
        let y = this.http.get(`https://fir-2f842.firebaseio.com/post/${this.uid}/private.json`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(x, y);
    }
    seprate(x1) {
        let x3 = [];
        for (const key in x1) {
            if (x1.hasOwnProperty(key)) {
                x3.push(Object.assign({}, x1[key]));
            }
        }
        return x3;
    }
    getDemo1() {
        this.http.get(`https://fir-2f842.firebaseio.com/post/${this.uid}/private.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(responseData => {
            const postsArray = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    postsArray.push(Object.assign({}, responseData[key]));
                }
            }
            return postsArray;
        }))
            .subscribe(posts => {
            this.d1 = posts;
            this.pr.next(posts);
            this.combine();
            return this.d1;
        });
    }
    getDemo2() {
        this.http.get(`https://fir-2f842.firebaseio.com/post/${this.uid}/public.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(responseData => {
            const postsArray = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    postsArray.push(Object.assign({}, responseData[key]));
                }
            }
            return postsArray;
        }))
            .subscribe(posts => {
            this.pu.next(posts);
            this.d2 = posts;
            this.combine();
            return this.d2;
        });
    }
    combine() {
        this.d3 = this.d2.concat(this.d1);
        this.all.next(this.d3);
    }
    update(id, value, formvalue, imgurl) {
        this.postdata = {
            title: formvalue.title,
            nameToSearch: formvalue.title.toLowerCase(),
            desc: formvalue.desc,
            category: formvalue.category,
            subcategory: formvalue.subcategory,
            name: formvalue.name,
            imgurl: imgurl,
            privacy: formvalue.privacy,
            created_date: this.ucrud.currentDate,
            uid: value.uid,
            uname: value.uname.trim()
        };
        this.Comare_In_FireStore(value, formvalue);
        if (value.privacy == "true") {
            if (formvalue.privacy == "true") {
                let c = this.pb(id, value);
                this.Edit_Public_Post(this.postdata, c);
                this.EditInFireStore(this.postdata, value);
            }
            else {
                this.Create_Private_Post(this.postdata);
                let c = this.pb(id, value);
                this.deletePublicPost(this.postdata, c);
                this.deleteFromFireStore(value);
            }
        }
        else {
            if (formvalue.privacy == "false") {
                let c = this.getpr(value);
                this.Edit_Private_Post(this.postdata, c);
            }
            else {
                this.Create_Public_Post(this.postdata);
                let c = this.getpr(value);
                this.deletePrivatePost(this.postdata, c);
                this.CreateInFireStore(this.postdata);
            }
        }
    }
    EditInFireStore(postdata, value) {
        this.x.subscribe((querySnapshot) => {
            for (const key in querySnapshot) {
                if (querySnapshot[key].title == value.title && querySnapshot[key].name == value.name) {
                    this.firestorekey = querySnapshot[key].id;
                    this.afs.collection("normal-users").doc(this.firestorekey).update(postdata);
                }
            }
        });
    }
    CreateInFireStore(postdata) {
        this.afs.collection("normal-users").add(postdata).then(r => {
        }).catch(e => {
        });
    }
    deleteFromFireStore(value) {
        this.x.subscribe((querySnapshot) => {
            for (const key in querySnapshot) {
                if (querySnapshot[key].title == value.title && querySnapshot[key].name == value.name) {
                    this.firestorekey = querySnapshot[key].id;
                    this.afs.collection("normal-users").doc(this.firestorekey).delete();
                }
            }
        });
    }
    deletePublicPost(postdata, c) {
        c.subscribe(x => {
            this.http.delete(`https://fir-2f842.firebaseio.com/post/${this.uid}/public/${this.db_key}.json`)
                .subscribe(d => {
                this.router.navigate(['myposts']);
            });
        });
    }
    deletePrivatePost(postdata, c) {
        c.subscribe(x => {
            this.http.delete(`https://fir-2f842.firebaseio.com/post/${this.uid}/private/${this.db_key}.json`)
                .subscribe(d => {
                this.router.navigate(['myposts']);
            });
        });
    }
    Edit_Private_Post(postdata, c) {
        c.subscribe(x => {
            this.http.patch(`https://fir-2f842.firebaseio.com/post/${this.uid}/private/${this.db_key}.json`, postdata)
                .subscribe(d => {
                this.router.navigate([`myposts/${this.url}/${this.post_id}`]);
                this.showSuccessEdit();
            });
        });
    }
    Edit_Public_Post(postdata, c) {
        c.subscribe(x => {
            this.http.patch(`https://fir-2f842.firebaseio.com/post/${this.uid}/public/${this.db_key}.json`, postdata)
                .subscribe(d => {
                this.router.navigate([`myposts/${this.url}/${this.post_id}`]);
                this.showSuccessEdit();
            });
        });
    }
    Create_Private_Post(postdata) {
        this.http.post(`https://fir-2f842.firebaseio.com/post/${this.uid}/private.json`, this.postdata)
            .subscribe(responseData => {
        });
    }
    Create_Public_Post(postdata) {
        this.http.post(`https://fir-2f842.firebaseio.com/post/${this.uid}/public.json`, postdata)
            .subscribe(responseData => {
        });
    }
    Comare_In_FireStore(value, formvalue) {
        this.x = this.afs.collection("normal-users").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    pb(id, value) {
        return this.http.get(`https://fir-2f842.firebaseio.com/post/${this.uid}/public.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(responseData => {
            for (const key in responseData) {
                if (responseData[key].title == value.title) {
                    this.db_key = key;
                }
                else {
                    console.log("no data  ");
                }
            }
        }));
    }
    getpr(value) {
        return this.http.get(`https://fir-2f842.firebaseio.com/post/${this.uid}/private.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(responseData => {
            for (const key in responseData) {
                if (responseData[key].title == value.title) {
                    this.db_key = key;
                }
                else {
                    console.log("no data  ");
                }
            }
        }));
    }
    passParams(url, id) {
        this.url = url;
        this.post_id = id;
    }
    UpdateProfile(value, oldvalue, imgdownloadurl) {
        this.editedProfileData = {
            id: oldvalue.id,
            uname: value.uname.trim(),
            desc: value.desc,
            email: value.email,
            name: value.name,
            imgurl: imgdownloadurl,
            isProfileSet: true,
            created_date: oldvalue.created_date,
        };
        let uname = oldvalue.uname;
        let newuname = value.uname;
        console.log(imgdownloadurl);
        let c = this.getProfileKey(value, oldvalue.uname);
        let c2 = this.getPublicProfileKey(value, oldvalue.uname);
        c.subscribe(d => {
            this.http.delete(`https://fir-2f842.firebaseio.com/PublicProfile/${uname}.json`)
                .subscribe(responseData => {
            });
            this.createPublicProfile(this.editedProfileData, newuname);
            this.http.patch(`https://fir-2f842.firebaseio.com/post/${this.uid}/profile/${this.db_key}.json`, this.editedProfileData)
                .subscribe(responseData => {
                this.username.next(newuname);
                this.router.navigate(['/myprofile', newuname]);
                this.showSuccessEditProfile();
            });
        });
    }
    getPublicProfileKey(value, uname) {
        return this.http.get(`https://fir-2f842.firebaseio.com/PublicProfile/${uname}.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(responseData => {
            for (const key in responseData) {
                if (responseData[key].uname == uname) {
                    this.db_key = key;
                }
                else {
                    console.log("no data  ");
                }
            }
        }));
    }
    getProfileKey(value, uname) {
        return this.http.get(`https://fir-2f842.firebaseio.com/post/${this.uid}/profile.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(responseData => {
            for (const key in responseData) {
                if (responseData[key].uname == uname) {
                    this.db_key = key;
                }
                else {
                    console.log("no data  ");
                }
            }
        }));
    }
    getPublicProfile(uname) {
        return this.http.get(`https://fir-2f842.firebaseio.com/PublicProfile/${uname}.json`);
    }
    getProfileFromUid(uid) {
        return this.http.get(`https://fir-2f842.firebaseio.com/post/${uid}/profile.json`);
    }
    getPublicPostsFromProfileId(uid) {
        this.uid = uid;
        return this.http.get(`https://fir-2f842.firebaseio.com/post/${this.uid}/public.json`);
    }
    getPrivateFromProfileId(uid) {
        this.uid = uid;
        return this.http.get(`https://fir-2f842.firebaseio.com/post/${this.uid}/private.json`);
    }
    sendUidandUname(uname, id) {
        this.uname = uname.trim();
        this.id = id;
    }
    CreateLikeEntry(likecount, likestatus, postuserid, title, desc) {
        this.getUid();
        let likedata = {
            count: likecount
        };
        let userdata = {
            islike: likestatus,
            uid: this.uid,
        };
        let postid;
        let x = this.getPostId(postuserid, title, desc);
        x.subscribe(post => {
            for (const key in post) {
                if ((post[key].title == title) && (post[key].desc == desc)) {
                    postid = key;
                }
            }
            this.http.patch(`https://fir-2f842.firebaseio.com/post/${postuserid}/public/${postid}/likestatus.json`, likedata)
                .subscribe(responseData => {
            });
            this.PostDataForLikedByUser.subscribe(d => {
                let userlikedetailkey;
                let allusrid = [];
                //
                for (const key in d) {
                    if (d[key].uid == this.uid) {
                        userlikedetailkey = key;
                        allusrid = allusrid.concat(d[key].uid);
                    }
                }
                const found = allusrid.some(el => el === this.uid);
                if (found) {
                    this.http.put(`https://fir-2f842.firebaseio.com/post/${postuserid}/public/${postid}/likestatus/uid/${userlikedetailkey}.json`, userdata).subscribe(d => {
                    });
                }
                if (!found) {
                    this.http.post(`https://fir-2f842.firebaseio.com/post/${postuserid}/public/${postid}/likestatus/uid.json`, userdata).subscribe(d => {
                    });
                }
                let x = this.seprate(d);
            });
        });
    }
    getLike(postuserid, title, desc) {
        let dbkey;
        this.http.get(`https://fir-2f842.firebaseio.com/post/${postuserid}/public.json`)
            .subscribe(post => {
            for (const key in post) {
                if ((post[key].title == title) && (post[key].desc == desc)) {
                    dbkey = key;
                }
            }
            return this.http.get(`https://fir-2f842.firebaseio.com/post/${postuserid}/public/${dbkey}/likestatus.json`);
        });
    }
    getPostId(postuserid, title, desc) {
        return this.http.get(`https://fir-2f842.firebaseio.com/post/${postuserid}/public.json`);
    }
    getPostDetailForLike(postid, title, desc) {
        let x = this.getPostId(postid, title, desc);
        let dbkey;
        x.subscribe(post => {
            for (const key in post) {
                if ((post[key].title == title) && (post[key].desc == desc)) {
                    dbkey = key;
                }
            }
            if (dbkey) {
                this.http.get(`https://fir-2f842.firebaseio.com/post/${postid}/public/${dbkey}.json`)
                    .subscribe((data) => {
                    var _a, _b;
                    this.PostDataForLikeCount.next((_a = data.likestatus) === null || _a === void 0 ? void 0 : _a.count);
                    this.PostDataForLikedByUser.next((_b = data.likestatus) === null || _b === void 0 ? void 0 : _b.uid);
                });
            }
        });
    }
    CreateComment(value, currentUserId, post_userid, title, desc) {
        return new Promise(res => {
            this.getUid();
            this.uid = currentUserId;
            this.commentData = {
                comment: value.comment,
                commentOn: this.ucrud.currentDate,
                commentByUserId: currentUserId
            };
            let dbkey;
            this.getCommentKey(post_userid, title, desc).
                then(d => {
                dbkey = d;
                this.http.post(`https://fir-2f842.firebaseio.com/post/${post_userid}/public/${dbkey}/commentData.json`, this.commentData)
                    .subscribe((data) => {
                    this.getCommentDataFromKey(post_userid, dbkey);
                    res(true);
                });
            });
        });
    }
    getCommentDataFromKey(post_userid, dbkey) {
        return this.http.get(`https://fir-2f842.firebaseio.com/post/${post_userid}/public/${dbkey}/commentData.json`);
    }
    getCommentKey(post_userid, title, desc) {
        return new Promise(resolve => {
            let x = this.getPostId(post_userid, title, desc);
            let dbkey;
            x.subscribe(post => {
                for (const key in post) {
                    if ((post[key].title == title) && (post[key].desc == desc)) {
                        dbkey = key;
                    }
                }
                resolve(dbkey);
            });
        });
    }
    deletPostEvent(value, id) {
        return new Promise(res => {
            if (value.privacy == "true") {
                let c = this.pb(id, value);
                this.Comare_In_FireStore(value, c);
                this.deleteFromFireStore(value);
                res(this.deletePublicPost(value, c));
            }
            if (value.privacy == "false") {
                let c = this.getpr(value);
                res(this.deletePrivatePost(value, c));
            }
        });
    }
    getFeaturedPost() {
        return new Promise(resolve => {
            this.http.get(`https://fir-2f842.firebaseio.com/post.json`).subscribe(d => {
                var _a;
                let x = this.seprate(d);
                let z = [];
                debugger;
                for (let i in x) {
                    let featured = x[i].public;
                    z = z.concat(this.seprate(featured));
                    this.featuredPost = z;
                    let s = [];
                    for (let a in this.featuredPost) {
                        if (((_a = this.featuredPost[a].likestatus) === null || _a === void 0 ? void 0 : _a.count) > 1) {
                            s = s.concat(this.featuredPost[a]);
                            this.featuredPostsorted = s;
                        }
                    }
                }
                resolve(this.featuredPostsorted);
            });
        });
    }
    getAllPost() {
        // return this.db.list('post').valueChanges();
        return new Promise(resolve => {
            this.http.get('https://fir-2f842.firebaseio.com/post.json').subscribe(d => {
                let x = this.seprate(d);
                let z = [];
                for (let i in x) {
                    let featured = x[i].public;
                    z = z.concat(this.seprate(featured));
                }
                resolve(z);
            });
        });
    }
    showSuccess() {
        this.toastr.success('Post Added Successfully', 'Success', {
            timeOut: 20000
        });
    }
    showSuccessDelete() {
        this.toastr.success('Post Deleted Successfully', 'Success', {
            timeOut: 20000
        });
    }
    showSuccessEdit() {
        this.toastr.success('Post Edited Successfully', 'Success', {
            timeOut: 20000
        });
    }
    showSuccessCreateProfile() {
        this.toastr.success('Profile Created Successfully', 'Success', {
            timeOut: 20000
        });
    }
    showSuccessEditProfile() {
        this.toastr.success('Profile Edited Successfully', 'Success', {
            timeOut: 20000
        });
    }
    showWarningForProfileSet() {
        this.toastr.warning('Please set your Profile', 'Warning', {
            timeOut: 20000
        });
    }
}
ACrudService.ɵfac = function ACrudService_Factory(t) { return new (t || ACrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Unauthenticated_shared_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
ACrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ACrudService, factory: ACrudService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ACrudService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: src_app_Unauthenticated_shared_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Authentication/shared/auth-guard.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/Authentication/shared/auth-guard.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/Authentication/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isLoggedIn1()) {
            return true;
        }
        this.router.navigate(["/auth"], {
            queryParams: { returnUrl: state.url }
        });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Authentication/shared/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/Authentication/shared/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.model */ "./src/app/Authentication/shared/user.model.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");












class AuthService {
    constructor(http, afAuth, router, toastr, ngZone) {
        this.http = http;
        this.afAuth = afAuth;
        this.router = router;
        this.toastr = toastr;
        this.ngZone = ngZone;
        this.isAuthenticated = false;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig.apiKey;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.userdata = null;
        this.LoginData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    signup(email, password) {
        return this.http
            .post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + this.api, {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    login(email, password) {
        return this.http
            .post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + this.api, {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    doGoogleLogin() {
        return new Promise((resolve, reject) => {
            let provider = new firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            this.afAuth.auth
                .signInWithPopup(provider)
                .then(res => {
                this.handleAuthentication(res.user.email, res.user.uid, res.user.refreshToken, +360000);
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }
    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() -
                new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }
    logout() {
        return this.afAuth.auth.signOut().then(() => {
            this.user.next(null);
            localStorage.removeItem('userData');
            if (this.tokenExpirationTimer) {
                clearTimeout(this.tokenExpirationTimer);
            }
            this.tokenExpirationTimer = null;
            this.router.navigate(['/auth']);
        });
    }
    autoLogout(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }
    handleAuthentication(email, userId, token, expiresIn) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](email, userId, token, expirationDate);
        this.userdata = user;
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
        this.isAuthenticated = true;
    }
    handleError(errorRes) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    }
    isLoggedIn() {
        this.user.subscribe(userdata => {
            this.userdata = userdata;
        });
        if (this.userdata !== null) {
            return true;
        }
    }
    sendEmailVerification() {
        this.afAuth.auth.currentUser.sendEmailVerification();
        this.router.navigate(['auth']);
    }
    sendPasswordResetEmail(passwordResetEmail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
                .then(() => {
                if (this.isAuthenticated) {
                    this.logout();
                }
                this.router.navigate(['auth']);
                this.showSuccess();
            });
        });
    }
    SignUp(email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
            this.logout();
            this.SendVerificationMail(); // Sending email verification notification, when new user registers
        });
    }
    SendVerificationMail() {
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(() => {
            this.showError();
            this.router.navigate(['verify-mail']);
        })
            .catch(e => {
            this.toastr.warning(e.message, 'Alert', {
                timeOut: 5000
            });
        });
    }
    SignIn(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            this.LoginData.next(result);
            if (result.user.emailVerified !== true) {
                this.SendVerificationMail();
            }
            else {
                this.SetUserData(result.user);
            }
        });
    }
    isLoggedIn1() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.user.next(user);
        return (user !== null && user.emailVerified !== false) ? true : false;
    }
    SetUserData(user) {
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                const user1 = JSON.parse(localStorage.getItem('user'));
                this.user.next(user1);
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    showSuccess() {
        this.toastr.success('Password Link Sent', 'Please check your registered email', {
            timeOut: 20000
        });
    }
    showError() {
        this.toastr.info('Email Verfication Link Sent.Verify Using the link', 'Please check your registered email', {
            timeOut: 5000
        });
    }
    showerrorForResetMail() {
        this.toastr.error('Error while sending Reset Password Link', 'Error ', {
            timeOut: 5000
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Authentication/shared/no-sanitize.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/Authentication/shared/no-sanitize.pipe.ts ***!
  \***********************************************************/
/*! exports provided: NoSanitizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoSanitizePipe", function() { return NoSanitizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class NoSanitizePipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(html) {
        return this.domSanitizer.bypassSecurityTrustHtml(html);
    }
}
NoSanitizePipe.ɵfac = function NoSanitizePipe_Factory(t) { return new (t || NoSanitizePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
NoSanitizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "noSanitize", type: NoSanitizePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoSanitizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'noSanitize'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Authentication/shared/user.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/Authentication/shared/user.model.ts ***!
  \*****************************************************/
/*! exports provided: User, Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
class User {
    constructor(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}
class Profile {
}


/***/ }),

/***/ "./src/app/Authentication/verify-mail/verify-mail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Authentication/verify-mail/verify-mail.component.ts ***!
  \*********************************************************************/
/*! exports provided: VerifyMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyMailComponent", function() { return VerifyMailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/Authentication/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function VerifyMailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "We have sent a confirmation email to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please check your email and click on the link to verfiy your email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
} }
class VerifyMailComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    OnClick() {
        this.authService.logout();
    }
}
VerifyMailComponent.ɵfac = function VerifyMailComponent_Factory(t) { return new (t || VerifyMailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
VerifyMailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerifyMailComponent, selectors: [["app-verify-mail"]], decls: 18, vars: 1, consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "authBlock"], [1, "text-center"], ["class", "formGroup text-info part2", 4, "ngIf"], [1, "formGroup", "text-center", "text-info"], ["type", "button", 1, "btn", "btnPrimary", 3, "click"], [1, "fas", "fa-redo-alt"], [1, "redirectToLogin", "text-info"], [1, "redirect", 3, "click"], [1, "formGroup", "text-info", "part2"]], template: function VerifyMailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Thank You for Registering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerifyMailComponent_div_5_Template, 8, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "After verfying kidnly try to login again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyMailComponent_Template_button_click_9_listener() { return ctx.authService.SendVerificationMail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Resend Verification Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Go back to?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyMailComponent_Template_span_click_16_listener() { return ctx.OnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".text-info[_ngcontent-%COMP%] {\r\n    padding-top: 35px;\r\n}\r\n\r\n.redirect[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.redirect[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.btnPrimary[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n}\r\n\r\n@media screen and (max-width:767px) {\r\n    .part2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQXV0aGVudGljYXRpb24vdmVyaWZ5LW1haWwvdmVyaWZ5LW1haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvQXV0aGVudGljYXRpb24vdmVyaWZ5LW1haWwvdmVyaWZ5LW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWluZm8ge1xyXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbn1cclxuXHJcbi5yZWRpcmVjdDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZWRpcmVjdCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJ0blByaW1hcnkge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgLnBhcnQyIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerifyMailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-verify-mail',
                templateUrl: './verify-mail.component.html',
                styleUrls: ['./verify-mail.component.css']
            }]
    }], function () { return [{ type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Unauthenticated/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Unauthenticated/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/crud.service */ "./src/app/Unauthenticated/shared/crud.service.ts");
/* harmony import */ var _Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Authentication/shared/acrud.service */ "./src/app/Authentication/shared/acrud.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../spinner/loading-spinner/loading-spinner.component */ "./src/app/spinner/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _Authentication_shared_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Authentication/shared/no-sanitize.pipe */ "./src/app/Authentication/shared/no-sanitize.pipe.ts");












const _c0 = function (a1) { return ["/featured", a1]; };
function HomeComponent_div_10_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.$implicit;
    const c_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, c_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", i_r8.imgurl, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, i_r8.desc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", i_r8.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("On ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 10, i_r8.created_date, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r8.likestatus.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.commenData[c_r9].length);
} }
function HomeComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_10_div_3_div_1_Template, 21, 15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", result_r4);
} }
function HomeComponent_div_10_h4_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Results Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Most-liked Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_10_div_3_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_10_h4_5_Template, 2, 0, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r4 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isFetching && (result_r4 == null ? null : result_r4.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", result_r4.length === 0);
} }
const _c1 = function (a0) { return [a0]; };
function HomeComponent_div_20_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.$implicit;
    const c_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, c_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", i_r15.imgurl, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r15.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, i_r15.desc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" By : ", i_r15.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" On : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, i_r15.created_date), " ");
} }
function HomeComponent_div_20_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_20_div_3_div_1_Template, 15, 12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", result_r11);
} }
function HomeComponent_div_20_h4_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Results Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Latest Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_20_div_3_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_20_h4_5_Template, 2, 0, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r11 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isFetching && (result_r11 == null ? null : result_r11.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", result_r11.length === 0);
} }
function HomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.error);
} }
class HomeComponent {
    constructor(cd, acrud, toastr) {
        this.cd = cd;
        this.acrud = acrud;
        this.toastr = toastr;
        this.isFetching = false;
        this.commenData = [];
    }
    ngOnInit() {
        this.getAllPost();
        this.getFeaturedPost();
    }
    getAllPost() {
        this.isFetching = true;
        this.acrud.getAllPost().then((x) => {
            this.isFetching = false;
            this.data = x;
            debugger;
            this.sortDesecending(this.data);
        });
    }
    sortDesecending(data) {
        this.sorted = data.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
    }
    onReadMore(index) {
    }
    getFeaturedPost() {
        this.acrud.getFeaturedPost().then(x => {
            let c = 0;
            this.featuredPost = x;
            for (let i in this.featuredPost) {
                debugger;
                let y = this.acrud.seprate(this.featuredPost[i].commentData);
                this.commenData.push(y);
            }
        }, err => {
            console.log(err);
        });
    }
    public_data() {
        this.isFetching = true;
        this.cd.get_public_post()
            .subscribe(result => {
            debugger;
            this.data = result.map(e => {
                return Object.assign({}, e.payload.doc.data());
            });
            this.isFetching = false;
        }, err => {
            this.isFetching = false;
            this.error = err;
        });
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
            throw new Error('Error: Getting document:' + error); // throw an Error
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_3__["ACrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 25, vars: 12, consts: [[1, "container"], [1, "row"], [1, "col-md-5", "col-xs-12", "col-md-push-7"], [1, "search-hero", "search-input-wrapper", "fadeInUp", "hidden-md", "hidden-lg"], ["for", "search"], ["type", "text", "name", "search", "id", "search", "autocomplete", "off", "placeholder", "   Search by Title or Author name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "search-button"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], [4, "ngIf"], [1, "col-md-6", "col-sm-12", "col-xs-12", "col-md-pull-5"], [1, "search-hero", "search-input-wrapper", "fadeInUp", "hidden-xs", "hidden-sm"], ["for", "search1"], ["type", "text", "id", "search1", "name", "search1", "autocomplete", "off", "placeholder", "   Search by Title or Author name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "loading-text", 4, "ngIf"], ["class", "error-text", 4, "ngIf"], [1, "Featured"], [1, "text-left", "no-result"], ["class", "card row card-featured", 4, "ngFor", "ngForOf"], [1, "card", "row", "card-featured"], [3, "routerLink"], [1, "img", "img-col"], ["alt", "", 1, "img-responsive", 2, "width", "100%", 3, "src"], [1, "title", "main-content"], [1, "title"], [3, "innerHTML"], [1, "author-date"], [1, "author-name"], [1, "date"], [1, "likecomment"], [1, "fa", "fa-heart", 2, "font-size", "21px"], [1, "fa", "fa-comment-o", 2, "font-size", "21px"], [1, "Featured", "hidden-md", "hidden-lg"], [1, "loading-text", "text-left", "no-result"], ["class", "card row", 4, "ngFor", "ngForOf"], [1, "card", "row"], [1, "col-md-4", "col-xs-12", "img-col", "col-md-push-8"], ["alt", "Avatar ", "alt", "img", 1, "img-responsive", 2, "width", "100%", 3, "src"], [1, "col-md-8", "col-xs-12", "main-content", "col-md-pull-4"], [1, "desc", "desc1", 3, "innerHTML"], [1, "author-date", "col-md-6", "col-xs-12"], [1, "loading-text"], [1, "error-text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "circle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "line", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_15_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "circle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "line", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_20_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_23_Template, 3, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 6, ctx.featuredPost, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 9, ctx.sorted, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFetching && !ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error && !ctx.isFetching);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipe"], _Authentication_shared_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_10__["NoSanitizePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".card.row[_ngcontent-%COMP%] {\r\n        border-radius: 6px;\r\n        min-height: 180px;\r\n        position: relative;\r\n    }\r\n    \r\n    .col-md-8.col-xs-7.main-content[_ngcontent-%COMP%] {\r\n        position: unset;\r\n    }\r\n    \r\n    .main-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n    \r\n    .author-date[_ngcontent-%COMP%] {\r\n        margin-top: 10px\r\n    }\r\n    \r\n    .author-date[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\r\n        color: gray;\r\n        margin: 0\r\n    }\r\n    \r\n    .author-date.col-md-6.col-xs-12[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        bottom: 0;\r\n        padding-bottom: 5px\r\n    }\r\n    \r\n    .card.row[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n        color: #000;\r\n    }\r\n    \r\n    .img-col[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n    \r\n    .img-col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        min-height: 180px;\r\n    }\r\n    \r\n    h3.title[_ngcontent-%COMP%] {\r\n        margin-top: 7px;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        display: -webkit-box;\r\n        -webkit-line-clamp: 2;\r\n        -webkit-box-orient: vertical;\r\n        font-size: 24px;\r\n        line-height: 1.3;\r\n    }\r\n    \r\n    @media screen and (max-width:767px) {\r\n        .img-col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .card.row[_ngcontent-%COMP%] {\r\n            min-height: 158px;\r\n        }\r\n        h3.title[_ngcontent-%COMP%] {\r\n            font-size: 18px;\r\n        }\r\n        .col-md-7.col-sm-12.col-xs-12[_ngcontent-%COMP%] {\r\n            padding: 0;\r\n        }\r\n    }\r\n    \r\n    .loading-text[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        margin: 0 auto;\r\n    }\r\n    \r\n    .search-hero[_ngcontent-%COMP%] {\r\n        max-width: 500px;\r\n        padding-bottom: 50px;\r\n        margin: auto;\r\n    }\r\n    \r\n    .search-hero[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n        -moz-box-shadow: 0 10px 35px rgba(0, 0, 0, .1);\r\n        -webkit-appearance: none!important;\r\n        -webkit-box-shadow: 0 10px 35px rgba(0, 0, 0, .1);\r\n        background: #fff;\r\n        border: 0;\r\n        border-radius: 5px;\r\n        box-shadow: 0 10px 35px rgba(0, 0, 0, .1);\r\n        color: #6c757d;\r\n        height: 6rem;\r\n        outline: none;\r\n        font-size: 16px;\r\n        font-weight: 500;\r\n        padding: 1rem 1rem 1rem 5rem;\r\n        width: calc(100% - 4rem);\r\n        line-height: normal;\r\n    }\r\n    \r\n    .form-control[_ngcontent-%COMP%] {\r\n        box-shadow: 0 10px 40px 0 #B0C1D9;\r\n    }\r\n    \r\n    .search-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n        color: rgba(108, 117, 125, .6);\r\n        margin-left: 15px;\r\n        position: absolute;\r\n        top: 4.00rem;\r\n        transition: all .2s ease-in-out;\r\n    }\r\n    \r\n    .fadeInUp[_ngcontent-%COMP%] {\r\n        -webkit-animation-duration: .45s;\r\n        animation-duration: .45s;\r\n        -webkit-animation-fill-mode: both;\r\n        animation-fill-mode: both;\r\n        -webkit-animation-name: fadeInUp;\r\n        animation-name: fadeInUp;\r\n    }\r\n    \r\n    p[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\r\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    }\r\n    \r\n    .no-result[_ngcontent-%COMP%] {\r\n        padding-top: 45px;\r\n    }\r\n    \r\n    @media screen and (max-width:767px) {\r\n        .no-result[_ngcontent-%COMP%] {\r\n            text-align: center;\r\n            padding-top: 15px;\r\n        }\r\n        .col-md-5.col-xs-12.col-md-push-7[_ngcontent-%COMP%], .col-md-6.col-sm-12.col-xs-12.col-md-pull-5[_ngcontent-%COMP%] {\r\n            padding-left: 5px;\r\n            padding-right: 5px;\r\n        }\r\n        .search-hero[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n            width: 100%;\r\n            padding-left: 4rem;\r\n        }\r\n        input[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n            \r\n            font-size: 14px;\r\n        }\r\n        .search-hero.search-input-wrapper.fadeInUp.hidden-md.hidden-lg[_ngcontent-%COMP%] {\r\n            padding-bottom: 25px;\r\n        }\r\n    }\r\n    \r\n    .card-featured[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        padding-bottom: 15px;\r\n    }\r\n    \r\n    .card-featured[_ngcontent-%COMP%]   .title.main-content[_ngcontent-%COMP%] {\r\n        padding-left: 15px;\r\n    }\r\n    \r\n    .card-featured[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n    \r\n    .likecomment[_ngcontent-%COMP%] {\r\n        float: right;\r\n        position: absolute;\r\n        right: 0;\r\n        bottom: 13px;\r\n    }\r\n    \r\n    .likecomment[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n        padding-right: 25px;\r\n    }\r\n    \r\n    .fa.fa-heart[_ngcontent-%COMP%] {\r\n        color: red\r\n    }\r\n    \r\n    .fa.fa-heart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        color: #000\r\n    }\r\n    \r\n    .Featured[_ngcontent-%COMP%] {\r\n        padding-bottom: 10px;\r\n    }\r\n    \r\n    input[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n        \r\n        text-align: left;\r\n        text-indent: -10px;\r\n    }\r\n    \r\n    @media (min-width: 992px) {\r\n        .col-md-pull-5[_ngcontent-%COMP%] {\r\n            right: 39.666667%;\r\n        }\r\n    }\r\n    \r\n    a[_ngcontent-%COMP%]:hover {\r\n        text-decoration: none;\r\n    }\r\n    \r\n    p.desc.desc1[_ngcontent-%COMP%] {\r\n        max-height: 45px;\r\n    }\r\n    \r\n    p.desc.desc1[_ngcontent-%COMP%] {\r\n        max-height: 45px;\r\n    }\r\n    \r\n    .main-content[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n    \r\n    @media screen and (max-width:767px) {\r\n        h2.title[_ngcontent-%COMP%] {\r\n            padding-top: 7px;\r\n        }\r\n        .author-date.col-md-6.col-xs-12[_ngcontent-%COMP%] {\r\n            position: relative;\r\n            padding-bottom: 10px;\r\n        }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVW5hdXRoZW50aWNhdGVkL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFdBQVc7UUFDWDtJQUNKOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVDtJQUNKOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJOztZQUVJLGlCQUFpQjtRQUNyQjtRQUNBO1lBQ0ksZUFBZTtRQUNuQjtRQUNBO1lBQ0ksVUFBVTtRQUNkO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLDhDQUE4QztRQUM5QyxrQ0FBa0M7UUFDbEMsaURBQWlEO1FBQ2pELGdCQUFnQjtRQUNoQixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLHlDQUF5QztRQUN6QyxjQUFjO1FBQ2QsWUFBWTtRQUNaLGFBQWE7UUFDYixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLDRCQUE0QjtRQUM1Qix3QkFBd0I7UUFDeEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksaUNBQWlDO0lBQ3JDOztJQUVBO1FBQ0ksOEJBQThCO1FBQzlCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLCtCQUErQjtJQUNuQzs7SUFFQTtRQUNJLGdDQUFnQztRQUNoQyx3QkFBd0I7UUFDeEIsaUNBQWlDO1FBQ2pDLHlCQUF5QjtRQUN6QixnQ0FBZ0M7UUFDaEMsd0JBQXdCO0lBQzVCOztJQUVBOzs7UUFHSSwwSkFBMEo7SUFDOUo7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSTtZQUNJLGtCQUFrQjtZQUNsQixpQkFBaUI7UUFDckI7UUFDQTs7WUFFSSxpQkFBaUI7WUFDakIsa0JBQWtCO1FBQ3RCO1FBQ0E7WUFDSSxXQUFXO1lBQ1gsa0JBQWtCO1FBQ3RCO1FBQ0E7WUFDSSxvQkFBb0I7WUFDcEIsZUFBZTtRQUNuQjtRQUNBO1lBQ0ksb0JBQW9CO1FBQ3hCO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSTtZQUNJLGlCQUFpQjtRQUNyQjtJQUNKOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0k7WUFDSSxnQkFBZ0I7UUFDcEI7UUFDQTtZQUNJLGtCQUFrQjtZQUNsQixvQkFBb0I7UUFDeEI7SUFDSiIsImZpbGUiOiJzcmMvYXBwL1VuYXV0aGVudGljYXRlZC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuY2FyZC5yb3cge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtbWQtOC5jb2wteHMtNy5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiB1bnNldDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1haW4tY29udGVudCBkaXYge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hdXRob3ItZGF0ZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYXV0aG9yLWRhdGU+cCB7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgbWFyZ2luOiAwXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hdXRob3ItZGF0ZS5jb2wtbWQtNi5jb2wteHMtMTIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZC5yb3c+YSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbWctY29sIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW1nLWNvbCBpbWcge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMy50aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgICAgICAuaW1nLWNvbCBpbWcsXHJcbiAgICAgICAgLmNhcmQucm93IHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTU4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLW1kLTcuY29sLXNtLTEyLmNvbC14cy0xMiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9hZGluZy10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtaGVybyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtaGVybyBpbnB1dCB7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggMzVweCByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDM1cHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzNXB4IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICAgIGhlaWdodDogNnJlbTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDVyZW07XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDRyZW0pO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IDAgI0IwQzFEOTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlYXJjaC1idXR0b24gc3ZnIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgxMDgsIDExNywgMTI1LCAuNik7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNC4wMHJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmFkZUluVXAge1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuNDVzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjQ1cztcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcclxuICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZUluVXA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAsXHJcbiAgICBhLFxyXG4gICAgZGl2IHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uby1yZXN1bHQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAgICAgLm5vLXJlc3VsdCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbWQtNS5jb2wteHMtMTIuY29sLW1kLXB1c2gtNyxcclxuICAgICAgICAuY29sLW1kLTYuY29sLXNtLTEyLmNvbC14cy0xMi5jb2wtbWQtcHVsbC01IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1oZXJvIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAvKiBXZWJLaXQgYnJvd3NlcnMgKi9cclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLWhlcm8uc2VhcmNoLWlucHV0LXdyYXBwZXIuZmFkZUluVXAuaGlkZGVuLW1kLmhpZGRlbi1sZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtZmVhdHVyZWQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtZmVhdHVyZWQgLnRpdGxlLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZC1mZWF0dXJlZCAuYXV0aG9yLWRhdGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpa2Vjb21tZW50IHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMTNweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpa2Vjb21tZW50IC5mYSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZhLmZhLWhlYXJ0IHtcclxuICAgICAgICBjb2xvcjogcmVkXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mYS5mYS1oZWFydCBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzAwMFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuRmVhdHVyZWQge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgLyogV2ViS2l0IGJyb3dzZXJzICovXHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB0ZXh0LWluZGVudDogLTEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgIC5jb2wtbWQtcHVsbC01IHtcclxuICAgICAgICAgICAgcmlnaHQ6IDM5LjY2NjY2NyU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAuZGVzYy5kZXNjMSB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcC5kZXNjLmRlc2MxIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgICAgICBoMi50aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdXRob3ItZGF0ZS5jb2wtbWQtNi5jb2wteHMtMTIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _shared_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }, { type: _Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_3__["ACrudService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Unauthenticated/shared/crud.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Unauthenticated/shared/crud.service.ts ***!
  \********************************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");







class CrudService {
    constructor(router, afStorage, afs) {
        this.router = router;
        this.afStorage = afStorage;
        this.afs = afs;
        this.currentDate = new Date();
        this.downloadurlchange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    handleError(error) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    getdata(data) {
        this.selectedFile = data;
    }
    get_public_post() {
        return this.afs.collection('normal-users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    sendUidandUname(uname, id) {
        this.uid = id;
        this.uname = uname;
    }
    createUser(value) {
        return this.afs.collection(`normal-users`).add({
            title: value.title,
            nameToSearch: value.title.toLowerCase(),
            desc: value.desc,
            category: value.category,
            subcategory: value.subcategory,
            name: value.name,
            created_date: this.currentDate,
            imgurl: this.downloadURL,
            uid: this.uid,
            uname: this.uname
        });
    }
    uploadFile() {
        const file = this.selectedFile;
        this.filepath = 'UauthUsers';
        const filePath = `${this.filepath}/${file.name}`;
        const fileRef = this.afStorage.ref(filePath);
        const task = this.afStorage.upload(filePath, file);
        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            fileRef.getDownloadURL().toPromise().then((url) => {
                this.downloadURL = url;
                this.downloadurlchange.next(this.downloadURL);
            }).catch(err => { console.log(err); });
        }))
            .subscribe();
    }
}
CrudService.ɵfac = function CrudService_Factory(t) { return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"])); };
CrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CrudService, factory: CrudService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrudService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Unauthenticated/u-create-post/u-create-post.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Unauthenticated/u-create-post/u-create-post.component.ts ***!
  \**************************************************************************/
/*! exports provided: UCreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UCreatePostComponent", function() { return UCreatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/crud.service */ "./src/app/Unauthenticated/shared/crud.service.ts");
/* harmony import */ var src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Authentication/shared/auth.service */ "./src/app/Authentication/shared/auth.service.ts");
/* harmony import */ var src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Authentication/shared/acrud.service */ "./src/app/Authentication/shared/acrud.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../spinner/loading-spinner/loading-spinner.component */ "./src/app/spinner/loading-spinner/loading-spinner.component.ts");










function UCreatePostComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
} }
function UCreatePostComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UCreatePostComponent_form_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UCreatePostComponent_form_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "To view Image click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r4.downloadURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UCreatePostComponent_form_4_ng_container_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r13.message, "");
} }
function UCreatePostComponent_form_4_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UCreatePostComponent_form_4_ng_container_17_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r13 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.exampleForm.get("title").hasError(validation_r13.type) && (ctx_r5.exampleForm.get("title").dirty || ctx_r5.exampleForm.get("title").touched));
} }
function UCreatePostComponent_form_4_ng_container_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r16.message, "");
} }
function UCreatePostComponent_form_4_ng_container_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Minimun 50 characters required in description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UCreatePostComponent_form_4_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UCreatePostComponent_form_4_ng_container_22_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UCreatePostComponent_form_4_ng_container_22_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r16 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.exampleForm.get("desc").hasError(validation_r16.type) && (ctx_r6.exampleForm.get("desc").dirty || ctx_r6.exampleForm.get("desc").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.exampleForm.get("desc").hasError("minlength") && ctx_r6.exampleForm.get("desc").touched);
} }
function UCreatePostComponent_form_4_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", value_r20, " ");
} }
function UCreatePostComponent_form_4_ng_container_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r21.message, "");
} }
function UCreatePostComponent_form_4_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UCreatePostComponent_form_4_ng_container_29_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r21 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.exampleForm.get("category").hasError(validation_r21.type) && (ctx_r9.exampleForm.get("category").dirty || ctx_r9.exampleForm.get("category").touched));
} }
function UCreatePostComponent_form_4_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UCreatePostComponent_form_4_ng_container_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r24.message, "");
} }
function UCreatePostComponent_form_4_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UCreatePostComponent_form_4_ng_container_37_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r24 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.exampleForm.get("name").hasError(validation_r24.type) && (ctx_r11.exampleForm.get("name").dirty || ctx_r11.exampleForm.get("name").touched));
} }
function UCreatePostComponent_form_4_div_38_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r28.message, "");
} }
function UCreatePostComponent_form_4_div_38_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UCreatePostComponent_form_4_div_38_ng_container_11_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.exampleForm.get("title").hasError(validation_r28.type) && (ctx_r27.exampleForm.get("title").dirty || ctx_r27.exampleForm.get("title").touched));
} }
function UCreatePostComponent_form_4_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Keep your post Public:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Yes keep my post Public ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " No keep it private ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UCreatePostComponent_form_4_div_38_ng_container_11_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.validation_messages.title);
} }
function UCreatePostComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UCreatePostComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onSubmit(ctx_r31.exampleForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UCreatePostComponent_form_4_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.detectFiles($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UCreatePostComponent_form_4_div_8_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UCreatePostComponent_form_4_div_9_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UCreatePostComponent_form_4_ng_container_17_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UCreatePostComponent_form_4_ng_container_22_Template, 3, 2, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Category list:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UCreatePostComponent_form_4_Template_select_change_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.onChange(_r7.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UCreatePostComponent_form_4_option_28_Template, 2, 1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UCreatePostComponent_form_4_ng_container_29_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UCreatePostComponent_form_4_div_31_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UCreatePostComponent_form_4_ng_container_37_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UCreatePostComponent_form_4_div_38_Template, 12, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.exampleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.imageSrc || "http://placehold.it/180", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, ctx_r2.uploadPercent));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isimgloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.uploadPercent && !ctx_r2.isimgloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.validation_messages.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.validation_messages.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.validation_messages.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selected == "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.validation_messages.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isAuthenticated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.exampleForm.valid);
} }
class UCreatePostComponent {
    constructor(router, firebaseService, fb, authService, acrud) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.fb = fb;
        this.authService = authService;
        this.acrud = acrud;
        this.isAuthenticated = false;
        this.values = ['Happy', 'Sad', 'Success', 'Failure', 'Hurt', 'Study', 'Educational', 'Portfolio', 'Other'];
        this.selected = 'Happy';
        this.isloggedin = false;
        this.validation_messages = {
            'title': [
                { type: 'required', message: 'Title is required.' }
            ],
            'desc': [
                { type: 'required', message: 'Description is required.' }
            ],
            'category': [
                { type: 'required', message: 'Category is required.' },
            ],
            'name': [
                { type: 'required', message: 'Name is required.' },
            ]
        };
    }
    onChange(value) {
        this.selected = value;
    }
    detectFiles(event) {
        this.isimgloading = true;
        this.selectedFile = event.target.files[0];
        if (this.selectedFile.type.split('/')[0] !== 'image') {
            return alert('Pleas select an Image file');
        }
        this.firebaseService.getdata(this.selectedFile);
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.imageSrc = reader.result;
            reader.readAsDataURL(file);
        }
        this.firebaseService.uploadFile();
        this.uploadPercent = this.firebaseService.uploadPercent;
        this.firebaseService.downloadurlchange.subscribe((data) => {
            this.downloadURL = data;
            this.isimgloading = false;
        }, err => {
            this.error = err;
            console.log(err.message);
        });
    }
    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
            let uid = user.uid;
            this.acrud.getProfileFromUid(uid).subscribe(data => {
                let profile = this.acrud.seprate(data);
                this.isprofileset = profile[0].isProfileSet;
                if (!this.isprofileset) {
                    this.router.navigate(['myprofile']);
                    this.acrud.showWarningForProfileSet();
                }
            });
        });
        /*
            this.acrud.getProfileFromUid() */
        this.createForm();
        if (this.isAuthenticated) {
            this.getUidandUname();
        }
    }
    getUidandUname() {
        this.isloading = true;
        this.acrud.getProfile().subscribe(d => {
            let x = this.acrud.seprate(d);
            this.isloading = false;
            this.username = x[0].uname;
            this.uid = x[0].id;
            this.acrud.sendUidandUname(this.username, this.uid);
            this.firebaseService.sendUidandUname(this.username, this.uid);
        }, err => {
            this.error = err;
        });
    }
    createForm() {
        this.exampleForm = this.fb.group({
            imgurl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(50)]],
            category: [this.selected, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subcategory: ['  ', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            privacy: ["true"],
        });
    }
    onSubmit(value) {
        if (!!this.isAuthenticated) {
            if (this.exampleForm.value.privacy == "true") {
                this.firebaseService.createUser(value);
            }
            this.acrud.createPost(value);
            this.exampleForm.reset();
            this.isloading = true;
        }
        else {
            this.firebaseService.createUser(value)
                .then(res => {
                this.exampleForm.reset();
                this.router.navigate(['']);
            })
                .catch(err => {
                this.error = err;
                console.log("err" + err);
            });
        }
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
UCreatePostComponent.ɵfac = function UCreatePostComponent_Factory(t) { return new (t || UCreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_5__["ACrudService"])); };
UCreatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UCreatePostComponent, selectors: [["app-u-create-post"]], decls: 5, vars: 3, consts: [[1, "container"], [1, "col-md-10", "col-sm-12", "col-xs-12", "center-block"], ["class", "alert alert-danger", 4, "ngIf"], ["style", "text-align: center;", "class", "loading-text", 4, "ngIf"], ["class", "create-form", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "loading-text", 2, "text-align", "center"], ["novalidate", "", 1, "create-form", 3, "formGroup", "ngSubmit"], [1, "col-md-4", "col-sm-3", "col-xs-12"], ["type", "file", "multiple", "", "accept", "image/x-png,image/gif,image/jpeg", "formControlName", "imgurl", 1, "form-control", 3, "change"], ["id", "blah", "height", "200", "width", "200", "alt", "your image", 1, "img-rounded", 3, "src"], [1, "col-xs-2", "percantage"], ["class", "col-xs-3", "style", "width: 30px; height: 30px;", 4, "ngIf"], ["class", "col-xs-7", 4, "ngIf"], [1, "col-md-8", "col-sm-9", "col-xs-12"], [1, "form-group"], ["for", "comment"], [1, "input-style"], ["placeholder", "Title", "formControlName", "title", 1, "form-control"], [4, "ngFor", "ngForOf"], ["rows", "5", "id", "comment", "formControlName", "desc", 1, "form-control"], ["for", "sel1"], ["formControlName", "category", 1, "form-control", 3, "change"], ["t", ""], ["class", "input-style", 4, "ngIf"], ["placeholder", "Name", "formControlName", "name", 1, "form-control"], ["class", "form-group", 4, "ngIf"], [1, "row", "submit-button-container"], [1, "col-md-4"], ["color", "primary", "type", "submit", 1, "btn", "btn-primary", "submit-button", 3, "disabled"], [1, "col-xs-3", 2, "width", "30px", "height", "30px"], ["src", "/assets/Eclipse-1s-200px.gif", 2, "width", "60px", "height", "60px"], [1, "col-xs-7"], [3, "href"], ["class", "help-block has-error", 4, "ngIf"], [1, "help-block", "has-error"], ["placeholder", "Other category", "formControlName", "subcategory", 1, "form-control"], [1, "md-check"], ["type", "radio", "value", "true", "name", "privacy", "formControlName", "privacy", "checked", "true"], ["type", "radio", "value", "false", "name", "privacy", "formControlName", "privacy"]], template: function UCreatePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UCreatePostComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UCreatePostComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UCreatePostComponent_form_4_Template, 43, 15, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isloading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isloading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["input[type=\"file\"][_ngcontent-%COMP%] {\r\n    width: 200px;\r\n}\r\n\r\n.col-md-4.col-sm-3.col-xs-12[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.percantage[_ngcontent-%COMP%] {\r\n    width: 29%;\r\n}\r\n\r\n.center-block[_ngcontent-%COMP%] {\r\n    float: none\r\n}\r\n\r\n.col-xs-7[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVW5hdXRoZW50aWNhdGVkL3UtY3JlYXRlLXBvc3QvdS1jcmVhdGUtcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9VbmF1dGhlbnRpY2F0ZWQvdS1jcmVhdGUtcG9zdC91LWNyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5jb2wtbWQtNC5jb2wtc20tMy5jb2wteHMtMTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnBlcmNhbnRhZ2Uge1xyXG4gICAgd2lkdGg6IDI5JTtcclxufVxyXG5cclxuLmNlbnRlci1ibG9jayB7XHJcbiAgICBmbG9hdDogbm9uZVxyXG59XHJcblxyXG4uY29sLXhzLTcge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UCreatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-u-create-post',
                templateUrl: './u-create-post.component.html',
                styleUrls: ['./u-create-post.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_5__["ACrudService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Unauthenticated/upost-detail/upost-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Unauthenticated/upost-detail/upost-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: UPostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPostDetailComponent", function() { return UPostDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/crud.service */ "./src/app/Unauthenticated/shared/crud.service.ts");
/* harmony import */ var src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Authentication/shared/acrud.service */ "./src/app/Authentication/shared/acrud.service.ts");
/* harmony import */ var src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Authentication/shared/auth.service */ "./src/app/Authentication/shared/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../spinner/loading-spinner/loading-spinner.component */ "./src/app/spinner/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _Authentication_shared_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Authentication/shared/no-sanitize.pipe */ "./src/app/Authentication/shared/no-sanitize.pipe.ts");











const _c0 = function (a1, a2) { return ["/myposts", a1, a2, "edit"]; };
const _c1 = function (a0) { return { active: a0 }; };
const _c2 = function () { return ["/myposts"]; };
function UPostDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add new Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Please confirm Delete Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Are you sure you want to Delete Post.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UPostDetailComponent_div_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.OnDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r0.postype, ctx_r0.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r0.isPrivate == true))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
} }
function UPostDetailComponent_div_3_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sub ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.unauthpost.subcategory, " ");
} }
function UPostDetailComponent_div_3_div_18_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 42);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://i.pinimg.com/originals/10/b2/f6/10b2f6d95195994fca386842dae53bb2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UPostDetailComponent_div_3_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UPostDetailComponent_div_3_div_18_img_1_Template, 1, 1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function UPostDetailComponent_div_3_div_18_Template_img_load_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.isImgLoaded = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r21.isImgLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r21.isImgLoaded)("src", ctx_r21.unauthpost.imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.unauthpost.title);
} }
function UPostDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UPostDetailComponent_div_3_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.navigateToProfile(ctx_r25.unauthpost.uname); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UPostDetailComponent_div_3_span_14_Template, 4, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UPostDetailComponent_div_3_div_18_Template, 5, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UPostDetailComponent_div_3_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.Like(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.unauthpost.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.ProfileImgUrl || "https://i.pinimg.com/originals/10/b2/f6/10b2f6d95195994fca386842dae53bb2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.unauthpost.uname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.unauthpost.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.unauthpost.subcategory && ctx_r1.unauthpost.subcategory.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 11, ctx_r1.postDate, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.unauthpost.imgurl)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.likeStatus ? "is-active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Like ", ctx_r1.count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 14, ctx_r1.unauthpost.desc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function UPostDetailComponent_div_4_div_19_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 44);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://i.pinimg.com/originals/10/b2/f6/10b2f6d95195994fca386842dae53bb2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UPostDetailComponent_div_4_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UPostDetailComponent_div_4_div_19_img_1_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function UPostDetailComponent_div_4_div_19_Template_img_load_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.isImgLoaded = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r29.isImgLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r29.isImgLoaded)("src", data_r28.imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r28.title);
} }
function UPostDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UPostDetailComponent_div_4_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const data_r28 = ctx.ngIf; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.navigateToProfile(data_r28.uname); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Written on : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UPostDetailComponent_div_4_div_19_Template, 5, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UPostDetailComponent_div_4_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.Like(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r28 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r28.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.ProfileImgUrl || "https://i.pinimg.com/originals/10/b2/f6/10b2f6d95195994fca386842dae53bb2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r28.uname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r28.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 10, data_r28.created_date, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r28.imgurl)("ngIfElse", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.likeStatus ? "is-active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Like ", ctx_r2.count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 13, data_r28.desc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function UPostDetailComponent_div_5_div_19_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 44);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://i.pinimg.com/originals/10/b2/f6/10b2f6d95195994fca386842dae53bb2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UPostDetailComponent_div_5_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UPostDetailComponent_div_5_div_19_img_1_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function UPostDetailComponent_div_5_div_19_Template_img_load_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.isImgLoaded = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r38.isImgLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r38.isImgLoaded)("src", i_r37[ctx_r38.id] == null ? null : i_r37[ctx_r38.id].imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r37[ctx_r38.id] == null ? null : i_r37[ctx_r38.id].title);
} }
function UPostDetailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UPostDetailComponent_div_5_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const i_r37 = ctx.ngIf; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.navigateToProfile(i_r37[ctx_r43.id] == null ? null : i_r37[ctx_r43.id].uname); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Written on : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UPostDetailComponent_div_5_div_19_Template, 5, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r37 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r37[ctx_r3.id] == null ? null : i_r37[ctx_r3.id].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r37[ctx_r3.id] == null ? null : i_r37[ctx_r3.id].uname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r37[ctx_r3.id] == null ? null : i_r37[ctx_r3.id].category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 7, i_r37[ctx_r3.id] == null ? null : i_r37[ctx_r3.id].created_date, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r37[ctx_r3.id] == null ? null : i_r37[ctx_r3.id].imgurl)("ngIfElse", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 10, i_r37[ctx_r3.id] == null ? null : i_r37[ctx_r3.id].desc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function UPostDetailComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Written on : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r45 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r45[ctx_r4.id] == null ? null : i_r45[ctx_r4.id].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r45[ctx_r4.id] == null ? null : i_r45[ctx_r4.id].uname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r45[ctx_r4.id] == null ? null : i_r45[ctx_r4.id].category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 7, i_r45[ctx_r4.id] == null ? null : i_r45[ctx_r4.id].created_date, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", i_r45[ctx_r4.id] == null ? null : i_r45[ctx_r4.id].imgurl, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r45[ctx_r4.id] == null ? null : i_r45[ctx_r4.id].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, i_r45[ctx_r4.id] == null ? null : i_r45[ctx_r4.id].desc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function UPostDetailComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Written on : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r46 = ctx.ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r46[ctx_r5.id] == null ? null : i_r46[ctx_r5.id].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r46[ctx_r5.id] == null ? null : i_r46[ctx_r5.id].uname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r46[ctx_r5.id] == null ? null : i_r46[ctx_r5.id].category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 7, i_r46[ctx_r5.id] == null ? null : i_r46[ctx_r5.id].created_date, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", i_r46[ctx_r5.id] == null ? null : i_r46[ctx_r5.id].imgurl, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r46[ctx_r5.id] == null ? null : i_r46[ctx_r5.id].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, i_r46[ctx_r5.id] == null ? null : i_r46[ctx_r5.id].desc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function UPostDetailComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UPostDetailComponent_div_9_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.onSubmit(ctx_r47.CommentForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Leave Your Comment Here:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Post your comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.CommentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r6.CommentForm.valid);
} }
function UPostDetailComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r50.uname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, x_r50.commentOn, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r50.comment);
} }
function UPostDetailComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UPostDetailComponent_div_10_div_2_Template, 9, 6, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.Comment_Data);
} }
function UPostDetailComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UPostDetailComponent_ng_template_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r52.errorkey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r52.error, "");
} }
function UPostDetailComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UPostDetailComponent_ng_template_11_div_0_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UPostDetailComponent_ng_template_11_div_1_Template, 5, 2, "div", 60);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isFetching && ctx_r9.isUnauth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.error || ctx_r9.errorkey);
} }
function UPostDetailComponent_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "loaduin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UPostDetailComponent_ng_template_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r54.errorkey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r54.error, "");
} }
function UPostDetailComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UPostDetailComponent_ng_template_13_div_0_Template, 3, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UPostDetailComponent_ng_template_13_div_1_Template, 5, 2, "div", 60);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.isFetching && ctx_r11.postype === "public");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.error || ctx_r11.errorkey);
} }
function UPostDetailComponent_ng_template_15_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UPostDetailComponent_ng_template_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r56.errorkey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r56.error, "");
} }
function UPostDetailComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UPostDetailComponent_ng_template_15_div_0_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UPostDetailComponent_ng_template_15_div_1_Template, 5, 2, "div", 60);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isFetching && ctx_r13.postype === "private");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.error || ctx_r13.errorkey);
} }
function UPostDetailComponent_ng_template_17_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UPostDetailComponent_ng_template_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r58.errorkey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r58.error, "");
} }
function UPostDetailComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UPostDetailComponent_ng_template_17_div_0_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UPostDetailComponent_ng_template_17_div_1_Template, 5, 2, "div", 60);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.isFetching && ctx_r15.postype === "allpost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.error || ctx_r15.errorkey);
} }
function UPostDetailComponent_ng_template_19_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UPostDetailComponent_ng_template_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r60.errorkey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r60.error, "");
} }
function UPostDetailComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UPostDetailComponent_ng_template_19_div_0_Template, 2, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UPostDetailComponent_ng_template_19_div_1_Template, 5, 2, "div", 60);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.publicpostOfSingleUser && (ctx_r17.xyz[3] === "publicposts" || ctx_r17.xyz[1] == "featured"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.error || ctx_r17.errorkey);
} }
class UPostDetailComponent {
    /*   LikeData: {count:number,uid:{islike:boolean,uid:string}}; */
    constructor(route, router, cd, acrud, authService, fb) {
        this.route = route;
        this.router = router;
        this.cd = cd;
        this.acrud = acrud;
        this.authService = authService;
        this.fb = fb;
        this.count = 0;
        this.isFetching = false;
        this.isAll = true;
        this.isPublic = false;
        this.isPrivate = false;
        this.isUnauth = false;
        this.isImgLoaded = false;
        this.showComment = false;
    }
    ngOnInit() {
        this.href = this.router.url;
        this.xyz = this.href.split("/");
        this.id = this.xyz[2];
        this.route.params
            .subscribe((params) => {
            this.id = +params['id'];
            this.postype = params['type'];
            if (this.xyz[1] == "home") {
                this.getAllPost();
                this.showComment = true;
            }
            if (this.xyz[1] == "featured") {
                this.getFeaturedPost();
                this.showComment = true;
            }
            if (this.postype === 'allpost') {
                this.getAuthAllPost();
            }
            if (this.postype === 'public') {
                this.acrud.getDemo2();
                this.getAuthPublicPost();
                this.showComment = true;
            }
            if (this.postype === 'private') {
                this.acrud.getDemo1();
                this.getAuthPrivatePost();
                this.showComment = false;
            }
            if (this.xyz[3] === 'publicposts') {
                this.profileuname = this.xyz[2];
                this.getPostFromProfile(this.profileuname);
                this.showComment = true;
            }
        });
        this.userSub = this.authService.user.subscribe(user => {
            if (user) {
                this.currentUserId = user.uid;
            }
            this.isAuthenticated = !!user;
        });
        if (this.isAuthenticated) {
            this.getUidandUname();
        }
        this.getLikeCountandStatus();
        this.CallCommentForm();
    }
    getUidandUname() {
        this.acrud.getProfile().subscribe(d => {
            let x = this.acrud.seprate(d);
            this.username = x[0].uname;
        });
    }
    getLikeCountandStatus() {
        this.acrud.PostDataForLikeCount.subscribe(d => {
            if (d) {
                this.count = d;
            }
        });
        this.acrud.PostDataForLikedByUser.subscribe(d => {
            let x = this.acrud.seprate(d);
            for (const i in x) {
                if ((x[i].uid) == this.currentUserId) {
                    this.likeStatus = x[i].islike;
                }
            }
        });
    }
    getPostFromProfile(uname) {
        this.acrud.getPublicProfile(uname).subscribe(d => {
            let x = this.acrud.seprate(d);
            let y = x[0].id;
            this.getPublicPostsFromProfileId(y);
            this.acrud.getPublicProfile(uname).subscribe(d => {
                var _a;
                let x = this.acrud.seprate(d);
                this.ProfileImgUrl = (_a = x[0]) === null || _a === void 0 ? void 0 : _a.imgurl;
            });
        });
    }
    getPublicPostsFromProfileId(profileid) {
        this.isPublicPostOfSingleUser = false;
        this.acrud.getPublicPostsFromProfileId(profileid).subscribe(d => {
            this.isPublicPostOfSingleUser = true;
            let x = this.acrud.seprate(d);
            this.sortDesecendingByDate(x);
            this.publicpostOfSingleUser = x[this.id];
            let id = this.id;
            this.posttitle = this.publicpostOfSingleUser.title;
            this.postdesc = this.publicpostOfSingleUser.desc;
            this.post_userid = this.publicpostOfSingleUser.uid;
            this.getComment(this.publicpostOfSingleUser.uid, this.publicpostOfSingleUser.title, this.publicpostOfSingleUser.desc);
            this.acrud.getPostDetailForLike(this.post_userid, this.posttitle, this.postdesc);
        });
    }
    getFeaturedPost() {
        this.isFetching = true;
        this.acrud.getFeaturedPost().then((d) => {
            this.publicpostOfSingleUser = d[this.id];
            this.acrud.getPublicProfile(this.publicpostOfSingleUser.uname).subscribe(d => {
                var _a;
                let x = this.acrud.seprate(d);
                this.ProfileImgUrl = (_a = x[0]) === null || _a === void 0 ? void 0 : _a.imgurl;
            });
            let id = this.id;
            this.posttitle = this.publicpostOfSingleUser.title;
            this.postdesc = this.publicpostOfSingleUser.desc;
            this.post_userid = this.publicpostOfSingleUser.uid;
            this.getComment(this.publicpostOfSingleUser.uid, this.publicpostOfSingleUser.title, this.publicpostOfSingleUser.desc);
            this.acrud.getPostDetailForLike(this.post_userid, this.posttitle, this.postdesc);
            this.isFetching = false;
        });
    }
    getAllPost() {
        this.isUnauth = true;
        this.isFetching = true;
        this.acrud.getAllPost().then((x) => {
            var _a, _b, _c, _d;
            this.isFetching = false;
            this.sortDesecendingByDate(x);
            this.unauthpost = x[this.id];
            if ((_a = this.unauthpost) === null || _a === void 0 ? void 0 : _a.uid) {
                this.post_userid = (_b = this.unauthpost) === null || _b === void 0 ? void 0 : _b.uid;
                this.posttitle = (_c = this.unauthpost) === null || _c === void 0 ? void 0 : _c.title;
                this.postdesc = (_d = this.unauthpost) === null || _d === void 0 ? void 0 : _d.desc;
                this.getProfileFromUid(this.post_userid);
                this.postDate = this.unauthpost.created_date;
                this.acrud.getPostDetailForLike(this.post_userid, this.posttitle, this.postdesc);
                this.getComment(this.post_userid, this.unauthpost.title, this.unauthpost.desc);
            }
            else {
                this.router.navigate(["home"]);
            }
        }, err => {
            this.isFetching = false;
            this.error = err;
        });
    }
    sortDesecendingByDate(data) {
        return data.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
    }
    getUauthPublicPost() {
        this.isUnauth = true;
        this.isFetching = true;
        this.cd.get_public_post()
            .subscribe(result => {
            var _a, _b, _c, _d;
            this.unauthpostss = result.map(e => {
                return Object.assign({}, e.payload.doc.data());
            }, err => {
                this.error = err;
            });
            this.isFetching = false;
            this.sortDesecending();
            this.unauthpost = this.unauthpostss[this.id];
            if (this.unauthpost == undefined) {
                this.router.navigate(["home"]);
            }
            let CommentKeyPromise;
            if ((_a = this.unauthpost) === null || _a === void 0 ? void 0 : _a.uid) {
                this.post_userid = (_b = this.unauthpost) === null || _b === void 0 ? void 0 : _b.uid;
                this.posttitle = (_c = this.unauthpost) === null || _c === void 0 ? void 0 : _c.title;
                this.postdesc = (_d = this.unauthpost) === null || _d === void 0 ? void 0 : _d.desc;
                this.getProfileFromUid(this.post_userid);
                this.postDate = this.unauthpost.created_date;
                this.postDate = this.postDate.toDate();
                this.acrud.getPostDetailForLike(this.post_userid, this.posttitle, this.postdesc);
                this.getComment(this.post_userid, this.unauthpost.title, this.unauthpost.desc);
            }
            else {
                this.router.navigate(["home"]);
            }
        }, err => {
            this.errorkey = err;
        });
    }
    getComment(postid, title, desc) {
        let CommentKeyPromise = this.acrud.getCommentKey(postid, title, desc)
            .then(d => {
            return new Promise(resolve => {
                resolve(d);
            });
        });
        if (CommentKeyPromise) {
            CommentKeyPromise.then(key => {
                this.acrud.getCommentDataFromKey(postid, key)
                    .subscribe((commentData) => {
                    this.Comment_Data = this.acrud.seprate(commentData);
                    if (commentData) {
                        this.Comment_Data.sort((a, b) => new Date(b.commentOn).getTime() - new Date(a.commentOn).getTime());
                    }
                    for (let i in this.Comment_Data) {
                        this.acrud.getProfileFromUid(this.Comment_Data[i].commentByUserId)
                            .subscribe(data => {
                            let x = this.acrud.seprate(data);
                            this.Comment_Data[i].uname = x[0].uname;
                        });
                    }
                });
            });
        }
    }
    getProfileFromUid(postuserid) {
        this.acrud.getProfileFromUid(postuserid)
            .subscribe((data) => {
            let profile = this.acrud.seprate(data);
            this.ProfileImgUrl = profile[0].imgurl;
        });
    }
    getAuthPublicPost() {
        this.isAll = false;
        this.isPublic = true;
        this.isPrivate = false;
        this.isFetching = true;
        this.puSub = this.acrud.pu.subscribe(d => {
            if (d) {
                this.sortDesecendingByDate(d);
                this.public_post = d;
                if (this.public_post) {
                }
                let id = this.id;
                this.posttitle = this.public_post[id].title;
                this.postdesc = this.public_post[id].desc;
                this.post_userid = this.public_post[id].uid;
                this.getComment(this.public_post[id].uid, this.public_post[id].title, this.public_post[id].desc);
                //this.SinglePost=this.public_post[this.id]
                // this.SinglePost = this.public_post[this.id]
            }
        }, err => this.error = err);
    }
    getAuthAllPost() {
        this.isFetching = true;
        this.isAll = true;
        this.isPublic = false;
        this.isPrivate = false;
        this.acrud.getAllData()
            .subscribe(data => {
            var _a, _b;
            this.isFetching = false;
            let x1 = data[0];
            let x2 = data[1];
            let x3 = [];
            x3 = this.acrud.seprate(x1);
            let x4 = this.acrud.seprate(x2);
            let x5 = x3.concat(x4);
            this.allPost = x5;
            this.sortDesecendingByDate(this.allPost);
            let id = this.id;
            if (((_a = this.allPost[id]) === null || _a === void 0 ? void 0 : _a.privacy) == "true") {
                this.showComment = true;
            }
            if (((_b = this.allPost[id]) === null || _b === void 0 ? void 0 : _b.privacy) == "false") {
                this.showComment = false;
            }
            this.posttitle = this.allPost[id].title;
            this.postdesc = this.allPost[id].desc;
            this.post_userid = this.allPost[id].uid;
            this.getComment(this.allPost[id].uid, this.allPost[id].title, this.allPost[id].desc);
        }, err => {
            this.error = err;
        });
    }
    getAuthPrivatePost() {
        this.route.params
            .subscribe((params) => {
            this.id = +params['id'];
            this.isAll = false;
            this.isPublic = false;
            this.isPrivate = true;
            this.isFetching = true;
            this.prSub = this.acrud.pr.subscribe(d => {
                this.isFetching = false;
                this.private_post = d;
                this.SinglePost = this.private_post[this.id];
            });
        });
    }
    sortDesecending() {
        this.acrud.sortDesecending(this.unauthpostss);
    }
    Like() {
        if (!this.currentUserId) {
            this.router.navigate(["/auth"]);
        }
        else {
            let likestatus = this.likeStatus;
            if (likestatus) {
                this.count = this.count - 1;
            }
            else {
                this.count = this.count + 1;
            }
            this.likeStatus = !this.likeStatus;
            this.acrud.CreateLikeEntry(this.count, this.likeStatus, this.post_userid, this.posttitle, this.postdesc);
        }
    }
    navigateToProfile(uname) {
        if (uname) {
            this.router.navigate(['myprofile', uname]);
        }
        else {
            this.router.navigate(["/home"]);
        }
    }
    CallCommentForm() {
        this.CommentForm = this.fb.group({
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    onSubmit(value) {
        if (this.isAuthenticated) {
            this.acrud.CreateComment(value, this.currentUserId, this.post_userid, this.posttitle, this.postdesc)
                .then(() => {
                this.CommentForm.reset();
                setTimeout(() => {
                    window.location.reload();
                }, 900);
            });
        }
        else {
            alert("Please Login or create your account to do Comment");
        }
    }
    OnDelete() {
        if (this.xyz[2] == "allpost") {
            this.acrud.passParams(this.xyz[2], this.id);
            this.acrud.deletPostEvent(this.allPost[this.id], this.id)
                .then(d => {
                this.acrud.showSuccessDelete();
            });
        }
        if (this.xyz[2] == "public") {
            this.acrud.passParams(this.xyz[2], this.id);
            this.acrud.deletPostEvent(this.public_post[this.id], this.id).then(d => {
                this.acrud.showSuccessDelete();
            });
        }
        if (this.xyz[2] == "private") {
            this.acrud.passParams(this.xyz[2], this.id);
            this.acrud.deletPostEvent(this.private_post[this.id], this.id)
                .then(d => {
                this.acrud.showSuccessDelete();
            });
        }
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
        if (this.prSub && this.private_post) {
            this.prSub.unsubscribe();
        }
        if (this.puSub && this.public_post) {
            this.puSub.unsubscribe();
        }
    }
}
UPostDetailComponent.ɵfac = function UPostDetailComponent_Factory(t) { return new (t || UPostDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_4__["ACrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
UPostDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UPostDetailComponent, selectors: [["app-upost-detail"]], decls: 21, vars: 15, consts: [[1, "row"], ["class", "col-md-3 col-sm-12 post-exist", 4, "ngIf"], [1, "container", "container-postdetil", "col-md-9", "col-sm-12"], ["class", "row", 4, "ngIf", "ngIfElse"], ["class", "row ", 4, "ngIf", "ngIfElse"], [4, "ngIf"], ["class", "col-md-12 commentsection", 4, "ngIf"], ["loading", ""], ["loading2", ""], ["loading3", ""], ["loading5", ""], ["loading7", ""], [1, "col-md-3", "col-sm-12", "post-exist"], [1, "list-group"], ["routerLink", "/create-post", 1, "list-group-item"], [1, "list-group-item", 3, "routerLink"], ["data-toggle", "modal", "data-target", "#myModal", 1, "list-group-item"], [1, "list-group-item", 3, "ngClass", "routerLink"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], [1, "col-xs-12"], [1, "title"], [1, "avtar"], ["alt", "", 1, "img-responsive", "img-circle", 3, "src"], [1, "avtar-text"], [1, "author-name", 3, "click"], [1, "category"], [1, "date"], [4, "ngIf", "ngIfElse"], [1, "stage", 3, "click"], [1, "heart", 3, "ngClass"], [1, "desc", 3, "innerHTML"], ["class", "img-responsive", "alt", "img", 3, "src", 4, "ngIf"], ["alt", "", 1, "img-responsive", 3, "hidden", "src", "load"], ["alt", "img", 1, "img-responsive", 3, "src"], ["alt", "", "class", "img-responsive", 3, "src", 4, "ngIf"], ["alt", "", 1, "img-responsive", 3, "src"], [1, "col-md-9", "col-xs-12"], ["alt", "", "src", "https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg ", 1, "img-responsive", "img-circle"], ["alt", " ", 1, "img-responsive", 3, "hidden", "src", "load"], [1, "author-name"], ["alt", "img", 1, "img-responsive", "post-img", 3, "src"], ["novalidate", "", 1, "create-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "comment "], ["rows", "5 ", "id", "comment ", "formControlName", "comment", 1, "form-control"], [1, "row", "submit-button-container"], [1, "col-md-4"], ["color", "primary ", "type", "submit ", 1, "btn", "btn-primary", "submit-button", 3, "disabled"], [1, "col-md-12", "commentsection"], [4, "ngFor", "ngForOf"], [1, "data"], ["class", "loading-text ", 4, "ngIf"], [1, "loading-text"], ["class", "loading-text", 4, "ngIf"]], template: function UPostDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UPostDetailComponent_div_1_Template, 26, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UPostDetailComponent_div_3_Template, 25, 16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UPostDetailComponent_div_4_Template, 26, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UPostDetailComponent_div_5_Template, 22, 12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UPostDetailComponent_div_6_Template, 24, 12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UPostDetailComponent_div_8_Template, 24, 12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UPostDetailComponent_div_9_Template, 11, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UPostDetailComponent_div_10_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UPostDetailComponent_ng_template_11_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UPostDetailComponent_ng_template_13_Template, 2, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UPostDetailComponent_ng_template_15_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UPostDetailComponent_ng_template_17_Template, 2, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UPostDetailComponent_ng_template_19_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated && ctx.xyz[1] !== "home" && ctx.xyz[1] !== "myprofile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.xyz[1] == "home" && ctx.isUnauth && ctx.unauthpost && !ctx.isFetching)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.xyz[3] == "publicposts" || ctx.xyz[1] === "featured") && ctx.publicpostOfSingleUser)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postype == "public" && ctx.public_post)("ngIfElse", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, ctx.postype == "private" && ctx.acrud.pr))("ngIfElse", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postype == "allpost" && !ctx.isFetching && ctx.allPost)("ngIfElse", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showComment && !ctx.isFetching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Comment_Data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _Authentication_shared_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_8__["NoSanitizePipe"]], styles: [".container-postdetil[_ngcontent-%COMP%] {\r\n    float: none;\r\n    margin: 0 auto;\r\n}\r\n\r\n.post-exist[_ngcontent-%COMP%] + .container-postdetil[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    line-height: 48px;\r\n    font-size: 40px;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    color: rgba(0, 0, 0, 0.84);\r\n    font-weight: 400;\r\n}\r\n\r\n.container-main[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    max-width: 680px;\r\n    width: 100%;\r\n}\r\n\r\n.avtar[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    height: 75px;\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.date[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.avtar-text[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    float: left;\r\n    padding-left: 25px;\r\n}\r\n\r\n.author-name[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    font-size: 20px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.avtar[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\r\n    margin-left: 12px;\r\n    color: rgba(0, 0, 0, 0.84);\r\n}\r\n\r\nfigcaption[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 15px;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%] {\r\n    margin-top: 2em;\r\n    font-size: 18px;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\r\n\r\n.heart[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: -35px;\r\n    top: -60px;\r\n    width: 100px;\r\n    height: 68px;\r\n    background: url(\"https://cssanimation.rocks/images/posts/steps/heart.png\") no-repeat;\r\n    background-position: 0 0;\r\n    cursor: pointer;\r\n    transition: background-position 1s steps(28);\r\n    transition-duration: 0s;\r\n}\r\n\r\n.heart.is-active[_ngcontent-%COMP%] {\r\n    transition-duration: 1s;\r\n    background-position: -2800px 0;\r\n}\r\n\r\n.stage[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    \r\n}\r\n\r\n.heart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    padding-left: 80px;\r\n    position: absolute;\r\n    \r\n    padding-top: 41px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.avtar[_ngcontent-%COMP%] + div[_ngcontent-%COMP%] {\r\n    margin-top: 120px\r\n}\r\n\r\n.post-img[_ngcontent-%COMP%] {\r\n    margin-top: 95px;\r\n}\r\n\r\n@media screen and (max-width:767px) {\r\n    .post-exist[_ngcontent-%COMP%] + .container-postdetil[_ngcontent-%COMP%] {\r\n        float: none;\r\n    }\r\n    .avtar[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        float: left;\r\n        margin-left: 15px;\r\n        margin-top: 8px;\r\n    }\r\n    .avtar-text[_ngcontent-%COMP%] {\r\n        margin-top: 0;\r\n        padding-left: 15px;\r\n    }\r\n    .post-img[_ngcontent-%COMP%] {\r\n        margin-top: 115px;\r\n    }\r\n    .heart[_ngcontent-%COMP%] {\r\n        top: -37px\r\n    }\r\n     [_nghost-%COMP%]  section h2:nth-child(6) {\r\n        font-size: 16px;\r\n    }\r\n     [_nghost-%COMP%]  section a {\r\n        word-break: break-word;\r\n        font-size: 16px;\r\n    }\r\n     [_nghost-%COMP%]  section p {\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n[_nghost-%COMP%]  section img, [_nghost-%COMP%]  p.desc img {\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    float: none;\r\n    display: table;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    width: 100%;\r\n}\r\n\r\n.heart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #0d6fc3;\r\n    white-space: nowrap;\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n}\r\n\r\n.author-name[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\ndiv#myModal[_ngcontent-%COMP%] {\r\n    top: 20%\r\n}\r\n\r\n.commentsection[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\r\n\r\n.commentsection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    color: #000;\r\n    font-weight: 600;\r\n}\r\n\r\n.commentsection[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.data[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n}\r\n\r\n.commentsection[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.commentsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    margin-bottom: 25px;\r\n    box-shadow: 0 10px 35px rgba(0, 0, 0, .1);\r\n}\r\n\r\n.row.submit-button-container[_ngcontent-%COMP%] {\r\n    padding-bottom: 25px;\r\n}\r\n\r\n.avtar[_ngcontent-%COMP%] + img[_ngcontent-%COMP%] {\r\n    box-shadow: 0 10px 35px rgba(0, 0, 0, .1);\r\n}\r\n\r\n.category[_ngcontent-%COMP%], .category[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    margin-top: 8px;\r\n}\r\n\r\n.category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    padding-left: 10px;\r\n}\r\n\r\n.avtar[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVW5hdXRoZW50aWNhdGVkL3Vwb3N0LWRldGFpbC91cG9zdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwSkFBMEo7SUFDMUosMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLDBKQUEwSjtBQUM5Sjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osb0ZBQW9GO0lBQ3BGLHdCQUF3QjtJQUN4QixlQUFlO0lBRWYsNENBQTRDO0lBRTVDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUVJLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEI7Ozs7dUNBSW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksU0FBUztRQUNULFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSTtJQUNKO0tBQ0M7UUFDRyxlQUFlO0lBQ25CO0tBQ0M7UUFDRyxzQkFBc0I7UUFDdEIsZUFBZTtJQUNuQjtLQUNDO1FBQ0csZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMEpBQTBKO0FBQzlKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBOztJQUVJLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL1VuYXV0aGVudGljYXRlZC91cG9zdC1kZXRhaWwvdXBvc3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLXBvc3RkZXRpbCB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucG9zdC1leGlzdCsuY29udGFpbmVyLXBvc3RkZXRpbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLW1haW4ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDY4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hdnRhcj5pbWcge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmF2dGFyLXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uYXV0aG9yLW5hbWUge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5hdnRhcj5wIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG59XHJcblxyXG4uaGVhcnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTM1cHg7XHJcbiAgICB0b3A6IC02MHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9jc3NhbmltYXRpb24ucm9ja3MvaW1hZ2VzL3Bvc3RzL3N0ZXBzL2hlYXJ0LnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMXMgc3RlcHMoMjgpO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAxcyBzdGVwcygyOCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XHJcbn1cclxuXHJcbi5oZWFydC5pcy1hY3RpdmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI4MDBweCAwO1xyXG59XHJcblxyXG4uc3RhZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogLTIwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cclxufVxyXG5cclxuLmhlYXJ0IHNwYW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogcGFkZGluZzogNDZweDsgKi9cclxuICAgIHBhZGRpbmctdG9wOiA0MXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmF2dGFyK2RpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjBweFxyXG59XHJcblxyXG4ucG9zdC1pbWcge1xyXG4gICAgbWFyZ2luLXRvcDogOTVweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgLnBvc3QtZXhpc3QrLmNvbnRhaW5lci1wb3N0ZGV0aWwge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmF2dGFyIC5kYXRlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgfVxyXG4gICAgLmF2dGFyLXRleHQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnBvc3QtaW1nIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMTVweDtcclxuICAgIH1cclxuICAgIC5oZWFydCB7XHJcbiAgICAgICAgdG9wOiAtMzdweFxyXG4gICAgfVxyXG4gICAgIDpob3N0OjpuZy1kZWVwIHNlY3Rpb24gaDI6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAgOmhvc3Q6Om5nLWRlZXAgc2VjdGlvbiBhIHtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgICA6aG9zdDo6bmctZGVlcCBzZWN0aW9uIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAgc2VjdGlvbiBpbWcsXHJcbjpob3N0OjpuZy1kZWVwIHAuZGVzYyBpbWcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhcnQgc3BhbiB7XHJcbiAgICBjb2xvcjogIzBkNmZjMztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYXV0aG9yLW5hbWU6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5kaXYjbXlNb2RhbCB7XHJcbiAgICB0b3A6IDIwJVxyXG59XHJcblxyXG4uY29tbWVudHNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxufVxyXG5cclxuLmNvbW1lbnRzZWN0aW9uIGg0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmNvbW1lbnRzZWN0aW9uIC5kYXRlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmRhdGEge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jb21tZW50c2VjdGlvbiBociB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY29tbWVudHNlY3Rpb24gZGl2IHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDM1cHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbn1cclxuXHJcbi5yb3cuc3VibWl0LWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5hdnRhcitpbWcge1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDM1cHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbn1cclxuXHJcbi5jYXRlZ29yeSxcclxuLmNhdGVnb3J5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLmNhdGVnb3J5IHNwYW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uYXZ0YXIrZGl2IGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UPostDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upost-detail',
                templateUrl: './upost-detail.component.html',
                styleUrls: ['./upost-detail.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }, { type: src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_4__["ACrudService"] }, { type: src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Unauthenticated_u_create_post_u_create_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Unauthenticated/u-create-post/u-create-post.component */ "./src/app/Unauthenticated/u-create-post/u-create-post.component.ts");
/* harmony import */ var _Unauthenticated_upost_detail_upost_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Unauthenticated/upost-detail/upost-detail.component */ "./src/app/Unauthenticated/upost-detail/upost-detail.component.ts");
/* harmony import */ var _Unauthenticated_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Unauthenticated/home/home.component */ "./src/app/Unauthenticated/home/home.component.ts");
/* harmony import */ var _Authentication_auth_component_auth_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Authentication/auth-component/auth-component.component */ "./src/app/Authentication/auth-component/auth-component.component.ts");
/* harmony import */ var _user_user_post_user_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user-post/user-post.component */ "./src/app/user/user-post/user-post.component.ts");
/* harmony import */ var _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/profile/profile.component */ "./src/app/user/profile/profile.component.ts");
/* harmony import */ var _user_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/view-profile/view-profile.component */ "./src/app/user/view-profile/view-profile.component.ts");
/* harmony import */ var _user_view_only_public_post_view_only_public_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/view-only-public-post/view-only-public-post.component */ "./src/app/user/view-only-public-post/view-only-public-post.component.ts");
/* harmony import */ var _Authentication_shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Authentication/shared/auth-guard.service */ "./src/app/Authentication/shared/auth-guard.service.ts");
/* harmony import */ var _Authentication_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Authentication/resetpassword/resetpassword.component */ "./src/app/Authentication/resetpassword/resetpassword.component.ts");
/* harmony import */ var _Authentication_verify_mail_verify_mail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Authentication/verify-mail/verify-mail.component */ "./src/app/Authentication/verify-mail/verify-mail.component.ts");
















const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _Unauthenticated_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'home/:id', component: _Unauthenticated_upost_detail_upost_detail_component__WEBPACK_IMPORTED_MODULE_3__["UPostDetailComponent"], pathMatch: 'full' },
    { path: 'featured/:id', component: _Unauthenticated_upost_detail_upost_detail_component__WEBPACK_IMPORTED_MODULE_3__["UPostDetailComponent"], pathMatch: 'full' },
    { path: 'myprofile', component: _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], pathMatch: 'full', canActivate: [_Authentication_shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'myprofile/:username', component: _user_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_9__["ViewProfileComponent"], pathMatch: 'full' },
    { path: 'myprofile/:username/editProfile', component: _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], canActivate: [_Authentication_shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'myprofile/:username/publicposts', component: _user_view_only_public_post_view_only_public_post_component__WEBPACK_IMPORTED_MODULE_10__["ViewOnlyPublicPostComponent"] },
    { path: 'myprofile/:username/publicposts/:id', component: _Unauthenticated_upost_detail_upost_detail_component__WEBPACK_IMPORTED_MODULE_3__["UPostDetailComponent"] },
    { path: 'create-post', component: _Unauthenticated_u_create_post_u_create_post_component__WEBPACK_IMPORTED_MODULE_2__["UCreatePostComponent"], canActivate: [_Authentication_shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'auth', component: _Authentication_auth_component_auth_component_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponentComponent"] },
    { path: 'verify-mail', component: _Authentication_verify_mail_verify_mail_component__WEBPACK_IMPORTED_MODULE_13__["VerifyMailComponent"] },
    { path: 'reset-password', component: _Authentication_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_12__["ResetpasswordComponent"] },
    { path: 'myposts', redirectTo: 'myposts/allpost', pathMatch: 'full' },
    { path: 'myposts/:type', component: _user_user_post_user_post_component__WEBPACK_IMPORTED_MODULE_6__["UserPostComponent"], pathMatch: 'full' },
    { path: 'myposts/:type/:id', component: _Unauthenticated_upost_detail_upost_detail_component__WEBPACK_IMPORTED_MODULE_3__["UPostDetailComponent"] },
    { path: 'myposts/:type/:id/edit', component: _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"] },
    { path: 'myposts/:type/:id/delete', component: _Unauthenticated_upost_detail_upost_detail_component__WEBPACK_IMPORTED_MODULE_3__["UPostDetailComponent"] },
    { path: '**/undefined', redirectTo: '/home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Authentication/shared/auth.service */ "./src/app/Authentication/shared/auth.service.ts");
/* harmony import */ var _Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Authentication/shared/acrud.service */ "./src/app/Authentication/shared/acrud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AppComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Authenticate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MyPosts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CreateProfile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/myprofile", a1]; };
function AppComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MyProfile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r5.username));
} }
function AppComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_32_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.ViewCV(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My CV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_33_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Open Sourced on GitHub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Read about this Project On MEDIUM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_h5_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tu Hai \u00A9 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authService, acrud, router) {
        this.authService = authService;
        this.acrud = acrud;
        this.router = router;
        this.isAuthenticated = false;
        this.isprofileSet = false;
        this.allpostcount = 0;
        this.isloading = false;
        this.title = 'write-your-heart-out';
        this.ViewCV = () => {
            alert('you dont have permission to download CV ');
            return;
        };
        this.acrud.username.subscribe(d => {
            this.username = d;
        });
    }
    ngOnInit() {
        if (this.isloading) {
            window.onscroll = function () { myFunction(); };
            // Get the header
            var header = document.getElementById("myHeader");
            // Get the offset position of the navbar
            var sticky = header.offsetTop;
            // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
            function myFunction() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                }
                else {
                    header.classList.remove("sticky");
                }
            }
        }
        this.isloading = true;
        this.authService.autoLogin();
        this.authService.isLoggedIn1();
        this.userSub = this.authService.user.subscribe((user) => {
            this.isloading = false;
            if (user) {
                this.isemailverfied = user.emailVerified;
            }
            this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);
            console.log(this.isAuthenticated);
            if (this.isAuthenticated) {
                this.acrud.getProfileFromUid(user.uid).subscribe(d => {
                    let x2 = {};
                    let x = this.acrud.seprate(d);
                    this.ProfieData = x[0];
                    if (this.ProfieData) {
                        this.isprofileSet = this.ProfieData.isProfileSet;
                        this.username = this.ProfieData.uname;
                    }
                });
            }
        });
        this.getAllPosts();
    }
    getAllPosts() {
        this.isloading = true;
        this.acrud.getAllData()
            .subscribe(data => {
            let x1 = data[0];
            let x2 = data[1];
            let x3 = [];
            x3 = this.acrud.seprate(x1);
            let x4 = this.acrud.seprate(x2);
            let x5 = x3.concat(x4);
            this.allpostcount = x5.length;
            this.isloading = false;
        });
    }
    onLogout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_2__["ACrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 52, vars: 10, consts: [[1, "navbar", "navbar-default", "main-header"], [1, "container", "header-main"], [1, "navbar-header"], ["routerLink", "/", 1, "navbar-brand"], [1, "footer-icons"], [1, "navbar-nav"], [1, "nav-item", "inline-block"], ["href", "http://tu-hai.github.io", "aria-label", "Github", 1, "nav-link", "text-github"], [1, "fa", "fa-github", 2, "font-size", "24px", "color", "black"], ["href", "", "aria-label", "Medium", 1, "nav-link"], ["width", "24", "alt", "", "src", "https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png", 1, "img-circle", "medium-icon"], ["href", "https://www.linkedin.com/in/vo-tu-hai-0311aa182/", "aria-label", "Instagram", 1, "nav-link"], [1, "fa", "fa-instagram", 2, "font-size", "24px", "color", "black"], ["href", "https://www.linkedin.com/in/vo-tu-hai-0311aa182/", "aria-label", "LinkedIn", 1, "nav-link"], [1, "fa", "fa-linkedin", 2, "font-size", "24px", "color", "black"], ["id", "myHeader", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active"], ["class", "hover-underline", "routerLink", "/create-post", 4, "ngIf"], ["routerLinkActive", "active", 4, "ngIf"], [1, "nav", "navbar-nav", "navbar-right"], [4, "ngIf"], [1, "footer-icons", "hidden-xs", "hidden-sm"], ["href", "https://tu-hai.github.io", "aria-label", "Github", 1, "nav-link", "text-github"], ["href", "https://www.youtube.com/watch?v=hwccAx8iVag&list=FLHry7FzoRkJWX3vqxM5F7iw&ab_channel=TuHai", "aria-label", "Youtube", 1, "nav-link", "text-youtube"], [1, "fa", "fa-youtube", 2, "font-size", "24px", "color", "black"], ["href", "https://www.facebook.com/hgiveup301/", "aria-label", "Facebook", 1, "nav-link"], [1, "fa", "fa-facebook", 2, "font-size", "24px", "color", "black"], [1, "container", "middle"], ["class", "container", 4, "ngIf"], ["class", "text-center copyright", 4, "ngIf"], ["routerLink", "/create-post", 1, "hover-underline"], ["routerLink", "/auth", 1, "hover-underline"], ["routerLink", "/myposts", 1, "hover-underline"], ["routerLink", "/myprofile", 1, "hover-underline"], [1, "hover-underline", 3, "routerLink"], [1, "hover-underline", 2, "cursor", "pointer", 3, "click"], [1, "container"], [1, "fadeInUp", "col-md-12"], ["href", "https://github.com/tu-hai/MyBlog", 1, "button", "github"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"], ["href", "https://tu-hai.github.io", 1, "button", "btn-light", "medium"], ["width", "20", "alt", "", "src", "https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png", 1, "img-circle"], ["href", "", "aria-label", "Insagram", 1, "nav-link"], [1, "text-center", "copyright"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tu Hai Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_a_25_Template, 2, 0, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppComponent_a_26_Template, 2, 0, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppComponent_li_27_Template, 3, 0, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppComponent_li_28_Template, 3, 0, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AppComponent_li_29_Template, 3, 0, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_li_30_Template, 3, 3, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AppComponent_li_32_Template, 3, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppComponent_li_33_Template, 3, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AppComponent_div_50_Template, 26, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AppComponent_h5_51_Template, 2, 0, "h5", 30);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allpostcount == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allpostcount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated && ctx.isemailverfied);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated && !ctx.isprofileSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated && ctx.isprofileSet && ctx.isemailverfied);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isloading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isloading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".header-main[_ngcontent-%COMP%] {\r\n  background-color: #2c3e50;\r\n  color: #f8f8f8;\r\n}\r\n.header-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  letter-spacing: 0.15em;\r\n\r\n  display: inline-block;\r\n  padding: 15px 20px;\r\n  position: relative;\r\n}\r\n.header-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  background: none repeat scroll 0 0 transparent;\r\n  bottom: 0;\r\n  content: \"\";\r\n  display: block;\r\n  height: 2px;\r\n  left: 50%;\r\n  position: absolute;\r\n  margin-bottom: 3px;\r\n  background: #fff;\r\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\r\n  width: 0;\r\n\r\n}\r\n.header-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.navbar-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: 700;\r\n    font-size: 22px;\r\n}\r\n.navbar-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover  {\r\n  color: #37bf91\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    margin: 5rem auto;\r\n    text-align: center;\r\n}\r\n.github[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    background: #000!important;\r\n    color: #fff!important;\r\n    justify-content: center;\r\n    transition: all .2s ease-in-out;\r\n    font-weight: 600;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px;\r\n    border: 0;\r\n    text-transform: uppercase;\r\n    background: rgba(0, 123, 255, .0627451);\r\n    color: rgba(0, 123, 255, .6);\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    transition: background .2s ease-in-out;\r\n    margin-bottom: .5rem;\r\n    margin-top: 15px;\r\n    outline: none;\r\n    font-size: 13px;\r\n    text-decoration: none;\r\n}\r\n.button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    margin-right: .5rem;\r\n    width: 20px;\r\n    stroke-width: 2px;\r\n}\r\n.button[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n}\r\na.button.btn-light.medium[_ngcontent-%COMP%] {\r\n    background: rgba(87, 100, 112, 0.083);\r\n    width: 30%;\r\n    color: #000!important;\r\n    justify-content: center;\r\n    font-weight: 600;\r\n    padding: 13px;\r\n}\r\na.button.btn-light.medium[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n.github[_ngcontent-%COMP%]:hover {\r\n    background: #343a40!important;\r\n    transform: translateY(-3px);\r\n    transition: all 0.2s ease-in-out;\r\n}\r\na.button.btn-light.medium[_ngcontent-%COMP%]:hover {\r\n    background: rgba(108, 117, 125, 0.5)!important;\r\n    transform: translateY(-3px);\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n.footer-icons[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.footer-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin: 2px auto;\r\n    line-height: 1.4;\r\n    padding-left: 0;\r\n    margin-top: 30px;\r\n    float: none;\r\n}\r\n.footer-icons[_ngcontent-%COMP%]   li.nav-item.inline-block[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    text-align: center;\r\n    list-style-type: none;\r\n    padding: 20px;\r\n    float: none;\r\n}\r\n.copyright[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #2c3e50;\r\n    box-shadow: 0 10px 35px rgba(0, 0, 0, .3);\r\n    padding-top: 25px;\r\n    padding-bottom: 25px;\r\n    margin-bottom: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    bottom: 0;\r\n}\r\nimg.medium-icon[_ngcontent-%COMP%] {\r\n    width: 24px;\r\n    margin-top: -9px;\r\n}\r\n@media (max-width: 551px) {\r\n\r\n    .collapse.navbar-collapse.sticky[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        top: 0;\r\n        z-index: 99999;\r\n        width: 100%;\r\n        display: block;\r\n        background: #f8f8f8;\r\n        box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23);\r\n    }\r\n    .github[_ngcontent-%COMP%], .button[_ngcontent-%COMP%], a.button.btn-light.medium[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        font-size: 12px;\r\n    }\r\n    footer.fadeInUp.col-md-12[_ngcontent-%COMP%] {\r\n        padding: 0\r\n    }\r\n    .navbar-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n      margin-top: 15px;\r\n      color: white;\r\n    }\r\n    .header-main[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%] {\r\n        width: auto;\r\n        text-align: right;\r\n    }\r\n    .header-main[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        float: right;\r\n        margin-top: 15px;\r\n    }\r\n    .header-main[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        padding: 8px;\r\n    }\r\n    .header-main[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n        font-size: 22px !important;\r\n    }\r\n    .header-main[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 20px;\r\n        margin-top: -2px;\r\n    }\r\n    .sticky-header[_ngcontent-%COMP%] {\r\n        top: 0;\r\n    }\r\n    #myHeader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      font-size: 10px;\r\n    }\r\n}\r\n@media screen and (min-width:992px) {\r\n    .footer-icons.hidden-xs.hidden-sm[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        left: 0;\r\n        background: #fff;\r\n        z-index: 55;\r\n        border-radius: 4px;\r\n        box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23);\r\n        \r\n        top: 25%;\r\n        width: auto;\r\n        text-align: left;\r\n    }\r\n    .footer-icons.hidden-xs.hidden-sm[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .footer-icons.hidden-xs.hidden-sm[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-bottom: 30px;\r\n    }\r\n    .navbar-header[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%] {\r\n        display: none\r\n    }\r\n    .main-header[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        top: 0;\r\n        border-color: #e7e7e7;\r\n        width: 100%;\r\n        z-index: 55;\r\n        padding-left: 55px;\r\n        padding-right: 55px;\r\n        box-shadow: 0 0px 0px rgba(0, 0, 0, .28), 0 2px 6px rgba(0, 0, 0, .23);\r\n    }\r\n    .main-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      color: white;\r\n    }\r\n    .footer-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n        opacity: 0.8;\r\n        transform: translateY(-3px);\r\n        transition: all 0.2s ease-in-out;\r\n    }\r\n}\r\n.middle[_ngcontent-%COMP%] {\r\n    min-height: 450px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCOztFQUV0QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsOENBQThDO0VBQzlDLFNBQVM7RUFDVCxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaURBQWlEO0VBQ2pELFFBQVE7O0FBRVY7QUFDQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7QUFHQSxTQUFTO0FBRVQ7SUFDSSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7RUFDRTtBQUNGO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsU0FBUztJQUNULHlCQUF5QjtJQUN6Qix1Q0FBdUM7SUFDdkMsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLDJCQUEyQjtJQUMzQixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLDBKQUEwSjtJQUMxSixTQUFTO0FBQ2I7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSTtRQUNJLGVBQWU7UUFDZixNQUFNO1FBQ04sY0FBYztRQUNkLFdBQVc7UUFDWCxjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLHNFQUFzRTtJQUMxRTtJQUNBOzs7UUFHSSxXQUFXO1FBQ1gsZUFBZTtJQUNuQjtJQUNBO1FBQ0k7SUFDSjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLFlBQVk7SUFDZDtJQUNBO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksTUFBTTtJQUNWO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixzRUFBc0U7UUFDdEUsNEJBQTRCO1FBQzVCLFFBQVE7UUFDUixXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLGVBQWU7UUFDZixNQUFNO1FBQ04scUJBQXFCO1FBQ3JCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixzRUFBc0U7SUFDMUU7SUFDQTtNQUNFLFlBQVk7SUFDZDtJQUNBO1FBQ0ksWUFBWTtRQUNaLDJCQUEyQjtRQUMzQixnQ0FBZ0M7SUFDcEM7QUFDSjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XHJcbiAgY29sb3I6ICNmOGY4Zjg7XHJcbn1cclxuLmhlYWRlci1tYWluIHVsIGxpIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XHJcblxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXItbWFpbiB1bCBsaSBhOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xyXG4gIGJvdHRvbTogMDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcclxuICB3aWR0aDogMDtcclxuXHJcbn1cclxuLmhlYWRlci1tYWluIHVsIGxpIGE6aG92ZXI6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcblxyXG4vKiAvLy8vICovXHJcblxyXG4ubmF2YmFyLWhlYWRlciBhIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5uYXZiYXItaGVhZGVyIGE6aG92ZXIgIHtcclxuICBjb2xvcjogIzM3YmY5MVxyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVyZW0gYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdpdGh1YiB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMCFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTIzLCAyNTUsIC4wNjI3NDUxKTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDEyMywgMjU1LCAuNik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlLWluLW91dDtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5idXR0b24gc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG59XHJcblxyXG4uYnV0dG9uPioge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG5hLmJ1dHRvbi5idG4tbGlnaHQubWVkaXVtIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoODcsIDEwMCwgMTEyLCAwLjA4Myk7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgY29sb3I6ICMwMDAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMTNweDtcclxufVxyXG5cclxuYS5idXR0b24uYnRuLWxpZ2h0Lm1lZGl1bSBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZ2l0aHViOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzNDNhNDAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmEuYnV0dG9uLmJ0bi1saWdodC5tZWRpdW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDExNywgMTI1LCAwLjUpIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZm9vdGVyLWljb25zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vdGVyLWljb25zIHVsIHtcclxuICAgIG1hcmdpbjogMnB4IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGZsb2F0OiBub25lO1xyXG59XHJcblxyXG4uZm9vdGVyLWljb25zIGxpLm5hdi1pdGVtLmlubGluZS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzNXB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbmltZy5tZWRpdW0taWNvbiB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIG1hcmdpbi10b3A6IC05cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTFweCkge1xyXG5cclxuICAgIC5jb2xsYXBzZS5uYXZiYXItY29sbGFwc2Uuc3RpY2t5IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgLjIzKTtcclxuICAgIH1cclxuICAgIC5naXRodWIsXHJcbiAgICAuYnV0dG9uLFxyXG4gICAgYS5idXR0b24uYnRuLWxpZ2h0Lm1lZGl1bSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgZm9vdGVyLmZhZGVJblVwLmNvbC1tZC0xMiB7XHJcbiAgICAgICAgcGFkZGluZzogMFxyXG4gICAgfVxyXG4gICAgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5oZWFkZXItbWFpbiAuZm9vdGVyLWljb25zIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItbWFpbiAuZm9vdGVyLWljb25zIHVsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLW1haW4gLmZvb3Rlci1pY29ucyB1bCBsaSB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1tYWluIC5mb290ZXItaWNvbnMgdWwgbGkgLmZhIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItbWFpbiAuZm9vdGVyLWljb25zIHVsIGxpIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgIH1cclxuICAgIC5zdGlja3ktaGVhZGVyIHtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgICAjbXlIZWFkZXIgdWwgbGkgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gICAgLmZvb3Rlci1pY29ucy5oaWRkZW4teHMuaGlkZGVuLXNtIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHotaW5kZXg6IDU1O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAuMjMpO1xyXG4gICAgICAgIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXHJcbiAgICAgICAgdG9wOiAyNSU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5mb290ZXItaWNvbnMuaGlkZGVuLXhzLmhpZGRlbi1zbSB1bCBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWljb25zLmhpZGRlbi14cy5oaWRkZW4tc20gdWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWhlYWRlciAuZm9vdGVyLWljb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICB9XHJcbiAgICAubWFpbi1oZWFkZXI+LmNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNlN2U3ZTc7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogNTU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDU1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgLjI4KSwgMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgLjIzKTtcclxuICAgIH1cclxuICAgIC5tYWluLWhlYWRlciBhIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1pY29ucyB1bCBsaTpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIH1cclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_2__["ACrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Unauthenticated_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Unauthenticated/home/home.component */ "./src/app/Unauthenticated/home/home.component.ts");
/* harmony import */ var _Unauthenticated_u_create_post_u_create_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Unauthenticated/u-create-post/u-create-post.component */ "./src/app/Unauthenticated/u-create-post/u-create-post.component.ts");
/* harmony import */ var _Unauthenticated_upost_detail_upost_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Unauthenticated/upost-detail/upost-detail.component */ "./src/app/Unauthenticated/upost-detail/upost-detail.component.ts");
/* harmony import */ var _Unauthenticated_shared_crud_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Unauthenticated/shared/crud.service */ "./src/app/Unauthenticated/shared/crud.service.ts");
/* harmony import */ var _Authentication_auth_component_auth_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Authentication/auth-component/auth-component.component */ "./src/app/Authentication/auth-component/auth-component.component.ts");
/* harmony import */ var _Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Authentication/shared/auth.service */ "./src/app/Authentication/shared/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Authentication/shared/acrud.service */ "./src/app/Authentication/shared/acrud.service.ts");
/* harmony import */ var _user_user_post_user_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user-post/user-post.component */ "./src/app/user/user-post/user-post.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
/* harmony import */ var _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/profile/profile.component */ "./src/app/user/profile/profile.component.ts");
/* harmony import */ var _user_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/view-profile/view-profile.component */ "./src/app/user/view-profile/view-profile.component.ts");
/* harmony import */ var _user_view_only_public_post_view_only_public_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/view-only-public-post/view-only-public-post.component */ "./src/app/user/view-only-public-post/view-only-public-post.component.ts");
/* harmony import */ var _Authentication_shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Authentication/shared/auth-guard.service */ "./src/app/Authentication/shared/auth-guard.service.ts");
/* harmony import */ var _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./spinner/loading-spinner/loading-spinner.component */ "./src/app/spinner/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _Authentication_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Authentication/resetpassword/resetpassword.component */ "./src/app/Authentication/resetpassword/resetpassword.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _Authentication_verify_mail_verify_mail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Authentication/verify-mail/verify-mail.component */ "./src/app/Authentication/verify-mail/verify-mail.component.ts");
/* harmony import */ var _Authentication_shared_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Authentication/shared/no-sanitize.pipe */ "./src/app/Authentication/shared/no-sanitize.pipe.ts");


































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_Unauthenticated_shared_crud_service__WEBPACK_IMPORTED_MODULE_12__["CrudService"], _Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_16__["ACrudService"], _Authentication_shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_26__["Ng2SearchPipeModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_28__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _Unauthenticated_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _Unauthenticated_u_create_post_u_create_post_component__WEBPACK_IMPORTED_MODULE_10__["UCreatePostComponent"],
        _Unauthenticated_upost_detail_upost_detail_component__WEBPACK_IMPORTED_MODULE_11__["UPostDetailComponent"],
        _Authentication_auth_component_auth_component_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponentComponent"],
        _user_user_post_user_post_component__WEBPACK_IMPORTED_MODULE_17__["UserPostComponent"],
        _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_20__["UserEditComponent"],
        _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
        _user_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_22__["ViewProfileComponent"],
        _user_view_only_public_post_view_only_public_post_component__WEBPACK_IMPORTED_MODULE_23__["ViewOnlyPublicPostComponent"],
        _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_25__["LoadingSpinnerComponent"],
        _Authentication_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_27__["ResetpasswordComponent"],
        _Authentication_verify_mail_verify_mail_component__WEBPACK_IMPORTED_MODULE_29__["VerifyMailComponent"],
        _Authentication_shared_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_30__["NoSanitizePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_26__["Ng2SearchPipeModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_28__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _Unauthenticated_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _Unauthenticated_u_create_post_u_create_post_component__WEBPACK_IMPORTED_MODULE_10__["UCreatePostComponent"],
                    _Unauthenticated_upost_detail_upost_detail_component__WEBPACK_IMPORTED_MODULE_11__["UPostDetailComponent"],
                    _Authentication_auth_component_auth_component_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponentComponent"],
                    _user_user_post_user_post_component__WEBPACK_IMPORTED_MODULE_17__["UserPostComponent"],
                    _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_20__["UserEditComponent"],
                    _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                    _user_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_22__["ViewProfileComponent"],
                    _user_view_only_public_post_view_only_public_post_component__WEBPACK_IMPORTED_MODULE_23__["ViewOnlyPublicPostComponent"],
                    _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_25__["LoadingSpinnerComponent"],
                    _Authentication_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_27__["ResetpasswordComponent"],
                    _Authentication_verify_mail_verify_mail_component__WEBPACK_IMPORTED_MODULE_29__["VerifyMailComponent"],
                    _Authentication_shared_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_30__["NoSanitizePipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebaseConfig),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_26__["Ng2SearchPipeModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_28__["ToastrModule"].forRoot()
                ],
                providers: [_Unauthenticated_shared_crud_service__WEBPACK_IMPORTED_MODULE_12__["CrudService"], _Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_16__["ACrudService"], _Authentication_shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/spinner/loading-spinner/loading-spinner.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/spinner/loading-spinner/loading-spinner.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoadingSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 3, vars: 0, consts: [[1, "lds-dual-ring"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lds-dual-ring[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    padding-top: 150px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding-top: 30px;\r\n}\r\n\r\n.lds-dual-ring[_ngcontent-%COMP%]:after {\r\n    content: \" \";\r\n    display: block;\r\n    width: 64px;\r\n    height: 64px;\r\n    margin: 8px;\r\n    border-radius: 50%;\r\n    border: 6px solid rgb(77, 155, 245);\r\n    border-color: rgb(53, 120, 243) transparent rgb(28, 130, 212) transparent;\r\n    -webkit-animation: lds-dual-ring 1.2s linear infinite;\r\n            animation: lds-dual-ring 1.2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes lds-dual-ring {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes lds-dual-ring {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyx5RUFBeUU7SUFDekUscURBQTZDO1lBQTdDLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1kdWFsLXJpbmcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5sZHMtZHVhbC1yaW5nOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgcmdiKDc3LCAxNTUsIDI0NSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig1MywgMTIwLCAyNDMpIHRyYW5zcGFyZW50IHJnYigyOCwgMTMwLCAyMTIpIHRyYW5zcGFyZW50O1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtZHVhbC1yaW5nIDEuMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-spinner',
                templateUrl: './loading-spinner.component.html',
                styleUrls: ['./loading-spinner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/user/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Unauthenticated_shared_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Unauthenticated/shared/crud.service */ "./src/app/Unauthenticated/shared/crud.service.ts");
/* harmony import */ var src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Authentication/shared/auth.service */ "./src/app/Authentication/shared/auth.service.ts");
/* harmony import */ var src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Authentication/shared/acrud.service */ "./src/app/Authentication/shared/acrud.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function ProfileComponent_ng_container_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r4.message, "");
} }
function ProfileComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_container_18_div_1_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ProfileForm.get("uname").hasError(validation_r4.type) && (ctx_r0.ProfileForm.get("uname").dirty || ctx_r0.ProfileForm.get("uname").touched));
} }
function ProfileComponent_ng_container_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.erroUsername, "");
} }
function ProfileComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_container_19_div_1_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ProfileForm.get("uname") && (ctx_r1.ProfileForm.get("uname").dirty || ctx_r1.ProfileForm.get("uname").touched));
} }
function ProfileComponent_ng_container_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r8.message, "");
} }
function ProfileComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_container_25_div_1_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.ProfileForm.get("email").hasError(validation_r8.type) && (ctx_r2.ProfileForm.get("email").dirty || ctx_r2.ProfileForm.get("email").touched));
} }
function ProfileComponent_ng_container_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r11.message, "");
} }
function ProfileComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_container_31_div_1_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.ProfileForm.get("name").hasError(validation_r11.type) && (ctx_r3.ProfileForm.get("name").dirty || ctx_r3.ProfileForm.get("name").touched));
} }
class ProfileComponent {
    constructor(router, route, firebaseService, fb, authService, acrud) {
        this.router = router;
        this.route = route;
        this.firebaseService = firebaseService;
        this.fb = fb;
        this.authService = authService;
        this.acrud = acrud;
        this.validation_messages = {
            'uname': [
                { type: 'required', message: 'Title is required.' }
            ],
            'email': [
                { type: 'required', message: 'Category is required.' },
            ],
            'name': [
                { type: 'required', message: 'Name is required.' },
            ]
        };
    }
    detectFiles(event) {
        this.selectedFile = event.target.files[0];
        if (this.selectedFile.type.split('/')[0] !== 'image') {
            return alert('Pleas select an Image file');
        }
        this.firebaseService.getdata(this.selectedFile);
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.imageSrc = reader.result;
            reader.readAsDataURL(file);
        }
        this.firebaseService.uploadFile();
        this.uploadPercent = this.firebaseService.uploadPercent;
        this.firebaseService.downloadurlchange.subscribe((data) => {
            this.downloadURL = data;
        }, err => { console.log(err.message); });
    }
    ngOnInit() {
        this.authService.user.subscribe((x) => {
            if (x.email) {
                this.email = x.email;
            }
        });
        this.href = this.router.url;
        this.x = this.href.split("/");
        this.usernamParam = this.x[2];
        if (this.x[2] && this.x[3] == "editProfile") {
            this.getProfileData();
        }
        this.CreateProfile();
        if (this.x[2] == null) {
            this.checkProfileExist();
        }
    }
    checkProfileExist() {
        this.acrud.getProfile().subscribe(d => {
            let x = this.acrud.seprate(d);
            this.profileReturned = x[0];
            if (this.profileReturned) {
                this.router.navigate(['myprofile', this.profileReturned.uname]);
            }
        });
    }
    getProfileData() {
        this.acrud.getProfile().subscribe(d => {
            let x = this.acrud.seprate(d);
            this.profileReturned = x[0];
            if (this.usernamParam !== this.profileReturned.uname.trim()) {
                // this.router.navigate(["home"])
            }
            this.SetProfileForm(x[0]);
        });
    }
    SetProfileForm(profiled4eturned) {
        this.imageSrc = profiled4eturned.imgurl;
        this.downloadURL = profiled4eturned.imgurl;
        this.ProfileForm.patchValue({
            uname: profiled4eturned.uname,
            desc: profiled4eturned.desc,
            name: profiled4eturned.name,
            email: this.email,
        });
    }
    CreateProfile() {
        this.ProfileForm = this.fb.group({
            imgurl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            desc: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,],
        });
    }
    validateUsername() {
        let x = "";
        if (this.profileReturned) {
            x = this.profileReturned.uname;
        }
        else {
            x = "";
        }
        if (x !== this.username) {
            this.acrud.getPublicProfile(this.username).subscribe(d => {
                if (d !== null) {
                    this.erroUsername = "Username Already taken";
                }
                else {
                    this.erroUsername = null;
                }
            });
        }
    }
    clearError() {
        this.erroUsername = "";
    }
    checkUsername(value) {
        this.username = value;
        this.validateUsername();
    }
    onSubmit(value) {
        if (this.x[2] && this.x[3] == "editProfile") {
            this.acrud.UpdateProfile(value, this.profileReturned, this.downloadURL);
            this.ProfileForm.reset();
        }
        else {
            this.acrud.createProfile(value);
            this.ProfileForm.reset();
            //this.router.navigate(['']);
            let url = "";
            this.redirectTo(url);
        }
    }
    redirectTo(url) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate([url]));
        setTimeout(() => {
            window.location.href = "";
        }, 1000);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Unauthenticated_shared_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_5__["ACrudService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 40, vars: 11, consts: [[1, "container"], [1, "col-md-12", "col-sm-9", "col-xs-12"], ["novalidate", "", 1, "create-form", 3, "formGroup", "ngSubmit"], [1, "col-md-4", "col-sm-3", "col-xs-12"], ["type", "file", "multiple", "", "accept", "image/x-png,image/gif,image/jpeg", "formControlName", "imgurl", 1, "form-control", 3, "change"], ["alt", "", "id", "blah", "height", "200", "width", "200", "alt", "your image", 1, "img-rounded", 3, "src"], [3, "href"], [1, "col-md-8", "col-xs-12"], [1, "form-group"], ["for", "comment"], [1, "input-style"], ["placeholder", "User Name", "formControlName", "uname", 1, "form-control", 3, "focus", "blur"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["placeholder", "User Name", "formControlName", "email", 1, "form-control"], ["placeholder", "Name", "formControlName", "name", 1, "form-control"], ["rows", "5", "id", "comment", "formControlName", "desc", 1, "form-control"], [1, "row", "submit-button-container"], [1, "col-md-4"], ["color", "primary", "type", "submit", 1, "btn", "btn-primary", "submit-button", 3, "disabled"], ["class", "help-block has-error", 4, "ngIf"], [1, "help-block", "has-error"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(ctx.ProfileForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_4_listener($event) { return ctx.detectFiles($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Click Here To View Your Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ProfileComponent_Template_input_focus_17_listener() { return ctx.clearError(); })("blur", function ProfileComponent_Template_input_blur_17_listener($event) { return ctx.checkUsername($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_ng_container_18_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_ng_container_19_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileComponent_ng_container_25_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProfileComponent_ng_container_31_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ProfileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageSrc || "http://placehold.it/180", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, ctx.uploadPercent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.downloadURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validation_messages.uname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.erroUsername && !ctx.oldusername);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validation_messages.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validation_messages.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.ProfileForm.valid || ctx.erroUsername);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".col-md-4.col-sm-3.col-xs-12[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: red\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtNC5jb2wtc20tMy5jb2wteHMtMTIgaW5wdXQge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uaGVscC1ibG9jayB7XHJcbiAgICBjb2xvcjogcmVkXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_Unauthenticated_shared_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_5__["ACrudService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Authentication/shared/acrud.service */ "./src/app/Authentication/shared/acrud.service.ts");
/* harmony import */ var src_app_Unauthenticated_shared_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Unauthenticated/shared/crud.service */ "./src/app/Unauthenticated/shared/crud.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../spinner/loading-spinner/loading-spinner.component */ "./src/app/spinner/loading-spinner/loading-spinner.component.ts");









function UserEditComponent_div_1_ng_container_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r11.message, "");
} }
function UserEditComponent_div_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserEditComponent_div_1_ng_container_17_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.exampleForm.get("title").hasError(validation_r11.type) && (ctx_r3.exampleForm.get("title").dirty || ctx_r3.exampleForm.get("title").touched));
} }
function UserEditComponent_div_1_ng_container_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r14.message, "");
} }
function UserEditComponent_div_1_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserEditComponent_div_1_ng_container_22_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r14 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.exampleForm.get("desc").hasError(validation_r14.type) && (ctx_r4.exampleForm.get("desc").dirty || ctx_r4.exampleForm.get("desc").touched));
} }
function UserEditComponent_div_1_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", value_r17, " ");
} }
function UserEditComponent_div_1_ng_container_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r18.message, "");
} }
function UserEditComponent_div_1_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserEditComponent_div_1_ng_container_29_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r18 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.exampleForm.get("category").hasError(validation_r18.type) && (ctx_r7.exampleForm.get("category").dirty || ctx_r7.exampleForm.get("category").touched));
} }
function UserEditComponent_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserEditComponent_div_1_ng_container_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r21.message, "");
} }
function UserEditComponent_div_1_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserEditComponent_div_1_ng_container_37_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r21 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.exampleForm.get("name").hasError(validation_r21.type) && (ctx_r9.exampleForm.get("name").dirty || ctx_r9.exampleForm.get("name").touched));
} }
function UserEditComponent_div_1_ng_container_49_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r24.message, "");
} }
function UserEditComponent_div_1_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserEditComponent_div_1_ng_container_49_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r24 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.exampleForm.get("title").hasError(validation_r24.type) && (ctx_r10.exampleForm.get("title").dirty || ctx_r10.exampleForm.get("title").touched));
} }
function UserEditComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserEditComponent_div_1_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onSubmit(ctx_r27.exampleForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserEditComponent_div_1_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.detectFiles($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "your url is View your Image here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserEditComponent_div_1_ng_container_17_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UserEditComponent_div_1_ng_container_22_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Category list:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserEditComponent_div_1_Template_select_change_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.onChange(_r5.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserEditComponent_div_1_option_28_Template, 2, 1, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UserEditComponent_div_1_ng_container_29_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UserEditComponent_div_1_div_31_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserEditComponent_div_1_ng_container_37_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Keep your post Public:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Yes keep my post Public ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " No keep it private ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, UserEditComponent_div_1_ng_container_49_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.exampleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imageSrc || "http://placehold.it/180", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 12, ctx_r0.uploadPercent));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.downloadURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selected == "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.exampleForm.valid);
} }
function UserEditComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r32.error, "");
} }
function UserEditComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserEditComponent_ng_template_2_div_0_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserEditComponent_ng_template_2_div_1_Template, 3, 1, "div", 29);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isFetching && !ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.error);
} }
class UserEditComponent {
    constructor(route, router, acrud, fb, firebaseService) {
        this.route = route;
        this.router = router;
        this.acrud = acrud;
        this.fb = fb;
        this.firebaseService = firebaseService;
        this.values = ['Happy', 'Sad', 'Success', 'Failure', 'Hurt', 'Other'];
        this.selected = 'Happy';
        this.isloggedin = false;
        this.validation_messages = {
            'title': [
                { type: 'required', message: 'Title is required.' }
            ],
            'desc': [
                { type: 'required', message: 'Description is required.' }
            ],
            'category': [
                { type: 'required', message: 'Category is required.' },
            ],
            'name': [
                { type: 'required', message: 'Name is required.' },
            ]
        };
    }
    onChange(value) {
        this.selected = value;
    }
    ngOnInit() {
        this.acrud.getDemo1();
        this.acrud.getDemo2();
        this.acrud.getAllData();
        this.route.params
            .subscribe((params) => {
            this.id = +params['id'];
            this.posttype = params['type'];
        });
        if (this.posttype === 'allpost') {
            this.getAllPosts();
        }
        if (this.posttype === 'public') {
            this.getPublicPosts();
        }
        if (this.posttype === 'private') {
            this.getPriavtePosts();
        }
        this.EditForm();
    }
    getAllPosts() {
        this.isFetching = true;
        this.isAll = true;
        this.isPublic = false;
        this.isPrivate = false;
        this.acrud.getAllData()
            .subscribe(data => {
            let x1 = data[0];
            let x2 = data[1];
            let x3 = [];
            x3 = this.acrud.seprate(x1);
            let x4 = this.acrud.seprate(x2);
            this.d4 = x3.concat(x4);
            this.setFormValue(this.d4[this.id]);
            this.isFetching = false;
        }, err => {
            this.isFetching = false;
            this.error = err;
        });
    }
    setFormValue(d4) {
        this.imageSrc = d4.imgurl;
        this.downloadURL = d4.imgurl;
        this.exampleForm.patchValue({
            title: d4.title,
            desc: d4.desc,
            category: d4.category,
            name: d4.name,
            privacy: d4.privacy
        });
    }
    getPublicPosts() {
        this.isFetching = true;
        this.isAll = false;
        this.isPublic = true;
        this.isPrivate = false;
        this.acrud.getPublicPost()
            .subscribe(data => {
            let x3 = this.acrud.seprate(data);
            this.d4 = x3;
            this.setFormValue(this.d4[this.id]);
            this.isFetching = false;
        }, err => {
            this.isFetching = false;
            this.error = err;
        });
    }
    getPriavtePosts() {
        this.isFetching = true;
        this.isAll = false;
        this.isPublic = false;
        this.isPrivate = true;
        this.acrud.getPrivatePost()
            .subscribe(data => {
            let x3 = this.acrud.seprate(data);
            this.d4 = x3;
            this.setFormValue(this.d4[this.id]);
            this.isFetching = false;
        }, err => {
            this.isFetching = false;
            this.error = err;
        });
    }
    detectFiles(event) {
        this.selectedFile = event.target.files[0];
        if (this.selectedFile.type.split('/')[0] !== 'image') {
            return alert('Pleas select an Image file');
        }
        this.firebaseService.getdata(this.selectedFile);
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.imageSrc = reader.result;
            reader.readAsDataURL(file);
        }
        this.firebaseService.uploadFile();
        this.uploadPercent = this.firebaseService.uploadPercent;
        this.firebaseService.downloadurlchange.subscribe((data) => {
            this.downloadURL = data;
        }, err => { console.log(err.message); });
    }
    EditForm() {
        this.exampleForm = this.fb.group({
            imgurl: [''],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(50)]],
            category: [this.selected, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subcategory: ['  ', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            privacy: ["true"],
        });
    }
    onSubmit(value) {
        if (this.posttype === 'allpost' && value.privacy) {
            this.getAllPosts();
        }
        if (this.posttype === 'public') {
            this.getPublicPosts();
        }
        if (this.posttype === 'private') {
            this.getPriavtePosts();
        }
        this.acrud.passParams(this.posttype, this.id);
        this.acrud.update(this.id, this.d4[this.id], value, this.downloadURL);
    }
}
UserEditComponent.ɵfac = function UserEditComponent_Factory(t) { return new (t || UserEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_3__["ACrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Unauthenticated_shared_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"])); };
UserEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserEditComponent, selectors: [["app-user-edit"]], decls: 4, vars: 2, consts: [[1, "col-md-10", "col-sm-12", "col-xs-12", "center-block"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["novalidate", "", 1, "create-form", 3, "formGroup", "ngSubmit"], [1, "col-md-4", "col-sm-3", "col-xs-12"], ["type", "file", "multiple", "", "accept", "image/x-png,image/gif,image/jpeg", "formControlName", "imgurl", 1, "form-control", 3, "change"], ["id", "blah", "height", "200", "width", "200", "alt", "your image", 1, "img-rounded", 3, "src"], [3, "href"], [1, "col-md-8", "col-sm-9", "col-xs-12"], [1, "form-group"], ["for", "comment"], [1, "input-style"], ["placeholder", "Title", "formControlName", "title", 1, "form-control"], [4, "ngFor", "ngForOf"], ["rows", "5", "id", "comment", "formControlName", "desc", 1, "form-control"], ["for", "sel1"], ["formControlName", "category", 1, "form-control", 3, "change"], ["t", ""], ["class", "input-style", 4, "ngIf"], ["placeholder", "Name", "formControlName", "name", 1, "form-control"], [1, "md-check"], ["type", "radio", "value", "true", "name", "privacy", "formControlName", "privacy", "checked", "true"], ["type", "radio", "value", "false", "name", "privacy", "formControlName", "privacy"], [1, "row", "submit-button-container"], [1, "col-md-4"], ["color", "primary", "type", "submit", 1, "btn", "btn-primary", "submit-button", 3, "disabled"], ["class", "help-block has-error", 4, "ngIf"], [1, "help-block", "has-error"], ["placeholder", "Other category", "formControlName", "subcategory", 1, "form-control"], ["class", "loading-text", 4, "ngIf"], [1, "loading-text"]], template: function UserEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserEditComponent_div_1_Template, 54, 14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserEditComponent_ng_template_2_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFetching && ctx.d4)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["input[type=\"file\"][_ngcontent-%COMP%] {\r\n    width: 200px;\r\n}\r\n\r\n.col-md-4.col-sm-3.col-xs-12[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.center-block[_ngcontent-%COMP%] {\r\n    float: none\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uY29sLW1kLTQuY29sLXNtLTMuY29sLXhzLTEyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5jZW50ZXItYmxvY2sge1xyXG4gICAgZmxvYXQ6IG5vbmVcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-edit',
                templateUrl: './user-edit.component.html',
                styleUrls: ['./user-edit.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_3__["ACrudService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_Unauthenticated_shared_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/user-post/user-post.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-post/user-post.component.ts ***!
  \*******************************************************/
/*! exports provided: UserPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostComponent", function() { return UserPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Authentication/shared/acrud.service */ "./src/app/Authentication/shared/acrud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Authentication/shared/auth.service */ "./src/app/Authentication/shared/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../spinner/loading-spinner/loading-spinner.component */ "./src/app/spinner/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _Authentication_shared_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Authentication/shared/no-sanitize.pipe */ "./src/app/Authentication/shared/no-sanitize.pipe.ts");









const _c0 = function (a0) { return [a0]; };
function UserPostComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.$implicit;
    const c_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, c_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", i_r10.imgurl, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r10.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, i_r10.desc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" By : ", i_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" On : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, i_r10.created_date), " ");
} }
function UserPostComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserPostComponent_div_10_div_1_Template, 15, 12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allpost);
} }
function UserPostComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.$implicit;
    const c_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, c_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", i_r13.imgurl, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r13.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, i_r13.desc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" By : ", i_r13.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" On : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, i_r13.created_date), " ");
} }
function UserPostComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserPostComponent_div_11_div_1_Template, 15, 12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.public_post);
} }
function UserPostComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.$implicit;
    const c_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, c_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", i_r16.imgurl, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r16.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, i_r16.desc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" By : ", i_r16.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" On : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, i_r16.created_date), " ");
} }
function UserPostComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserPostComponent_div_12_div_1_Template, 15, 12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.private_post);
} }
function UserPostComponent_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPostComponent_ng_template_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Post Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPostComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserPostComponent_ng_template_13_div_0_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserPostComponent_ng_template_13_div_1_Template, 3, 0, "div", 24);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isAll && ctx_r4.isFetching);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isAll && !ctx_r4.isFetching);
} }
function UserPostComponent_ng_template_15_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPostComponent_ng_template_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Public Post Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPostComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserPostComponent_ng_template_15_div_0_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserPostComponent_ng_template_15_div_1_Template, 3, 0, "div", 24);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isPublic && ctx_r6.isFetching);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isPublic && !ctx_r6.isFetching);
} }
function UserPostComponent_ng_template_17_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPostComponent_ng_template_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Private Post Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPostComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserPostComponent_ng_template_17_div_0_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserPostComponent_ng_template_17_div_1_Template, 3, 0, "div", 24);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isPrivate && ctx_r8.isFetching);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isPrivate && !ctx_r8.isFetching);
} }
const _c1 = function (a0) { return { active: a0 }; };
const _c2 = function (a1) { return ["/myposts", a1]; };
class UserPostComponent {
    constructor(acrud, router, route, authservice) {
        this.acrud = acrud;
        this.router = router;
        this.route = route;
        this.authservice = authservice;
        this.selectedIndex = 0;
        this.type = ['allpost', 'public', 'private'];
        this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.public_post = null;
        this.isFetching = true;
        this.isAll = false;
        this.isPublic = false;
        this.isPrivate = false;
        this.count_all = 0;
        this.count_pr = 0;
        this.count_pb = 0;
    }
    ngOnInit() {
        this.href = this.router.url;
        this.url = this.href.split("/");
        this.url = this.url[2];
        this.acrud.getDemo1();
        this.acrud.getDemo2();
        this.route.params
            .subscribe((params) => {
            this.url = params['type'];
            if (this.url !== 'allpost' && this.url !== 'public' && this.url !== 'private') {
                this.router.navigate(["home"]);
            }
            if (this.url === 'allpost') {
                this.getAllPosts();
            }
            if (this.url === 'public') {
                this.getPublicPosts();
            }
            if (this.url === 'private') {
                this.getPriavtePosts();
            }
        });
    }
    getAllPosts() {
        this.isLoading$.next(true);
        this.isFetching = true;
        this.isAll = true;
        this.isPublic = false;
        this.isPrivate = false;
        this.acrud.getAllData()
            .subscribe(data => {
            debugger;
            let x1 = data[0];
            let x2 = data[1];
            let x3 = [];
            x3 = this.acrud.seprate(x1);
            let x4 = this.acrud.seprate(x2);
            this.allpost = x3.concat(x4);
            this.sortDesecendingByDate(this.allpost);
            this.count_all = this.allpost.length;
            this.isLoading$.next(false);
            this.isFetching = false;
        }, err => {
            this.error = err;
        });
    }
    getPublicPosts() {
        this.isLoading$.next(true);
        this.isAll = false;
        this.isPublic = true;
        this.isPrivate = false;
        this.isFetching = true;
        this.puSub = this.acrud.pu.subscribe(d => {
            this.public_post = d;
            debugger;
            if (this.public_post) {
                this.sortDesecendingByDate(this.public_post);
            }
            this.isFetching = false;
        }, error => {
            this.isFetching = false;
            this.error = error;
        }, () => {
            this.isFetching = false;
        });
    }
    getPriavtePosts() {
        this.isAll = false;
        this.isPublic = false;
        this.isPrivate = true;
        this.isFetching = true;
        this.prSub = this.acrud.pr.subscribe(d => {
            debugger;
            this.private_post = d;
            this.count_pr = this.private_post.length;
            this.isFetching = false;
        }, error => {
            this.error = error;
            this.isFetching = false;
        });
    }
    sortDesecendingByDate(data) {
        return data.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
    }
    ngOnDestroy() {
        if (this.puSub && this.public_post) {
            this.puSub.unsubscribe();
        }
        if (this.prSub && this.private_post) {
            this.prSub.unsubscribe();
        }
    }
}
UserPostComponent.ɵfac = function UserPostComponent_Factory(t) { return new (t || UserPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_2__["ACrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
UserPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPostComponent, selectors: [["app-user-post"]], decls: 20, vars: 24, consts: [[1, "row"], [1, "col-md-3", "col-sm-12"], [1, "list-group"], [1, "list-group-item", 3, "ngClass", "routerLink", "click"], [1, "col-md-7", "col-sm-12", "col-xs-12", "post-cards"], [4, "ngIf", "ngIfElse"], ["class", "col-md-7 col-sm-12 col-xs-12", 4, "ngIf", "ngIfElse"], ["loading", ""], ["loading2", ""], ["loading3", ""], [1, "col-sm-4", "col-xs-12"], ["class", "card row", 4, "ngFor", "ngForOf"], [1, "card", "row"], [3, "routerLink"], [1, "col-md-4", "col-xs-12", "img-col", "col-md-push-8"], ["alt", "Avatar ", "alt", "img", 1, "img-responsive", 2, "width", "100%", 3, "src"], [1, "col-md-8", "col-xs-12", "main-content", "col-md-pull-4"], [1, "title"], [1, "desc", "desc1", 3, "innerHTML"], [1, "author-date", "col-md-6", "col-xs-12"], [1, "author-name"], [1, "date"], [1, "col-md-7", "col-sm-12", "col-xs-12"], ["class", "loading-text", 4, "ngIf"], ["class", "no-text", 4, "ngIf"], [1, "loading-text"], [1, "no-text"]], template: function UserPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPostComponent_Template_a_click_3_listener() { return ctx.getAllPosts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All Posts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPostComponent_Template_a_click_5_listener() { return ctx.getPublicPosts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Public Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPostComponent_Template_a_click_7_listener() { return ctx.getPriavtePosts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Private Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserPostComponent_div_10_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserPostComponent_div_11_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserPostComponent_div_12_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserPostComponent_ng_template_13_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserPostComponent_ng_template_15_Template, 2, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserPostComponent_ng_template_17_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.isAll == true))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.type[0]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.isPublic == true))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, ctx.type[1]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx.isPrivate == true))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, ctx.type[2]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAll && (ctx.allpost == null ? null : ctx.allpost.length) > 0)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPublic && (ctx.public_post == null ? null : ctx.public_post.length) > 0)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPrivate && ctx.private_post.length > 0)("ngIfElse", _r7);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerComponent"]], pipes: [_Authentication_shared_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_7__["NoSanitizePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["a[_ngcontent-%COMP%]:hover {\r\n    color: #000 !important;\r\n    opacity: 0.9;\r\n}\r\n\r\nh2.title[_ngcontent-%COMP%] {\r\n    color: #000\r\n}\r\n\r\np.desc.desc1[_ngcontent-%COMP%] {\r\n    max-height: 45px;\r\n}\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n@media screen and (max-width:767px) {\r\n    h2.title[_ngcontent-%COMP%] {\r\n        padding-top: 7px;\r\n    }\r\n    .author-date[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        padding-bottom: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXBvc3QvdXNlci1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLG9CQUFvQjtJQUN4QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLXBvc3QvdXNlci1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbmgyLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjMDAwXHJcbn1cclxuXHJcbnAuZGVzYy5kZXNjMSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgaDIudGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICB9XHJcbiAgICAuYXV0aG9yLWRhdGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-post',
                templateUrl: './user-post.component.html',
                styleUrls: ['./user-post.component.css']
            }]
    }], function () { return [{ type: src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_2__["ACrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/view-only-public-post/view-only-public-post.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/user/view-only-public-post/view-only-public-post.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ViewOnlyPublicPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOnlyPublicPostComponent", function() { return ViewOnlyPublicPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Authentication/shared/acrud.service */ "./src/app/Authentication/shared/acrud.service.ts");
/* harmony import */ var src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Authentication/shared/auth.service */ "./src/app/Authentication/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../spinner/loading-spinner/loading-spinner.component */ "./src/app/spinner/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _Authentication_shared_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Authentication/shared/no-sanitize.pipe */ "./src/app/Authentication/shared/no-sanitize.pipe.ts");








const _c0 = function (a0) { return [a0]; };
function ViewOnlyPublicPostComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const c_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, c_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", i_r4.imgurl, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, i_r4.desc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" By ", i_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" On ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, i_r4.created_date), " ");
} }
function ViewOnlyPublicPostComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewOnlyPublicPostComponent_div_18_div_1_Template, 16, 12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.PublicPosts);
} }
function ViewOnlyPublicPostComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewOnlyPublicPostComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Post Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["/myprofile", a1]; };
const _c2 = function () { return { exact: true }; };
const _c3 = function (a1) { return ["/myprofile", a1, "publicposts"]; };
const _c4 = function () { return [""]; };
class ViewOnlyPublicPostComponent {
    constructor(acrud, authService, router) {
        this.acrud = acrud;
        this.authService = authService;
        this.router = router;
        this.isFetching = false;
        this.pbcount = 0;
        this.prcount = 0;
        this.allcount = 0;
    }
    ngOnInit() {
        let url = this.router.url;
        let urlpart = url.split("/");
        this.unameParam = urlpart[2];
        this.getUidFromService();
    }
    getUidFromService() {
        this.isFetching = true;
        this.acrud.getPublicProfile(this.unameParam).subscribe(d => {
            let x = this.acrud.seprate(d);
            let y = x[0].id;
            this.getPublicPostsFromProfileId(y);
            this.getPrivatePstsFromProfileId(y);
            this.isFetching = false;
        });
    }
    getPrivatePstsFromProfileId(y) {
        this.isFetching = true;
        this.acrud.getPrivateFromProfileId(y).subscribe(d => {
            this.isFetching = false;
            let x = this.acrud.seprate(d);
            //this.PublicPosts = x
            this.prcount = x.length;
            this.allcount += this.prcount;
        });
    }
    getPublicPostsFromProfileId(y) {
        this.isFetching = true;
        this.acrud.getPublicPostsFromProfileId(y).subscribe(d => {
            let x = this.acrud.seprate(d);
            this.sortDesecendingByDate(x);
            this.PublicPosts = x;
            this.pbcount = this.PublicPosts.length;
            this.allcount += this.pbcount;
            this.isFetching = false;
        });
    }
    sortDesecendingByDate(data) {
        return data.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
    }
}
ViewOnlyPublicPostComponent.ɵfac = function ViewOnlyPublicPostComponent_Factory(t) { return new (t || ViewOnlyPublicPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_1__["ACrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ViewOnlyPublicPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewOnlyPublicPostComponent, selectors: [["app-view-only-public-post"]], decls: 21, vars: 24, consts: [[1, "row"], [1, "col-md-3", "col-sm-12"], [1, "list-group"], ["routerLinkActive", "active", 1, "list-group-item", 3, "routerLink", "routerLinkActiveOptions"], [1, "count-post"], ["routerLinkActive", "active", 1, "list-group-item", "disabled", 3, "routerLink", "routerLinkActiveOptions"], [1, "col-md-7", "col-sm-12", "col-xs-12", "post-cards"], [4, "ngIf"], ["class", "loading-text", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "card", "row"], [3, "routerLink"], [1, "col-md-4", "col-xs-12", "img-col", "col-md-push-8"], ["alt", "Avatar ", 1, "img-responsive", 2, "width", "100%", 3, "src"], [1, "col-md-8", "col-xs-12", "main-content", "col-md-pull-4"], [1, "title"], [1, "desc", "desc1", 3, "innerHTML"], [1, "author-date", "col-md-6", "col-xs-12"], [1, "author-name"], [1, "date"], [1, "loading-text"]], template: function ViewOnlyPublicPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Public Posts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Private Posts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All Posts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ViewOnlyPublicPostComponent_div_18_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ViewOnlyPublicPostComponent_div_19_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ViewOnlyPublicPostComponent_div_20_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx.unameParam))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c3, ctx.unameParam))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.pbcount, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.prcount, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.allcount, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.PublicPosts == null ? null : ctx.PublicPosts.length) > 0 && !ctx.isFetching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFetching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFetching && (ctx.PublicPosts == null ? null : ctx.PublicPosts.length) < 1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__["LoadingSpinnerComponent"]], pipes: [_Authentication_shared_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_6__["NoSanitizePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["a[_ngcontent-%COMP%]:hover {\r\n    color: #000 !important;\r\n    opacity: 0.9;\r\n}\r\n\r\nh2.title[_ngcontent-%COMP%] {\r\n    color: #000\r\n}\r\n\r\np.desc.desc1[_ngcontent-%COMP%] {\r\n    max-height: 45px;\r\n}\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n@media screen and (max-width:767px) {\r\n    .author-date[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        padding-bottom: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci92aWV3LW9ubHktcHVibGljLXBvc3Qvdmlldy1vbmx5LXB1YmxpYy1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdmlldy1vbmx5LXB1YmxpYy1wb3N0L3ZpZXctb25seS1wdWJsaWMtcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5oMi50aXRsZSB7XHJcbiAgICBjb2xvcjogIzAwMFxyXG59XHJcblxyXG5wLmRlc2MuZGVzYzEge1xyXG4gICAgbWF4LWhlaWdodDogNDVweDtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5hdXRob3ItZGF0ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewOnlyPublicPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-only-public-post',
                templateUrl: './view-only-public-post.component.html',
                styleUrls: ['./view-only-public-post.component.css']
            }]
    }], function () { return [{ type: src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_1__["ACrudService"] }, { type: src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/view-profile/view-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/view-profile/view-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfileComponent", function() { return ViewProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Authentication/shared/acrud.service */ "./src/app/Authentication/shared/acrud.service.ts");
/* harmony import */ var src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Authentication/shared/auth.service */ "./src/app/Authentication/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../spinner/loading-spinner/loading-spinner.component */ "./src/app/spinner/loading-spinner/loading-spinner.component.ts");







const _c0 = function (a1) { return ["/myprofile", a1]; };
const _c1 = function (a1) { return ["/myprofile", a1, "editProfile"]; };
const _c2 = function () { return ["/myposts", "public"]; };
const _c3 = function () { return ["/myposts", "private"]; };
const _c4 = function () { return ["/myposts"]; };
function ViewProfileComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Public Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Private Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "All Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r3.unameParam));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r3.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r3.pbcount, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r3.prcount, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r3.allcount, ")");
} }
const _c5 = function () { return ["publicposts"]; };
const _c6 = function () { return [""]; };
function ViewProfileComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Public Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Private Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r4.unameParam));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r4.pbcount, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r4.prcount, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r4.allcount, ")");
} }
function ViewProfileComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bio : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.ProfileData.imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name : ", ctx_r5.ProfileData.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.ProfileData.uname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.ProfileData.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.ProfileData.desc, " ");
} }
function ViewProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewProfileComponent_div_0_div_1_Template, 18, 15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewProfileComponent_div_0_div_2_Template, 16, 12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewProfileComponent_div_0_div_4_Template, 18, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAuthenticated && ctx_r0.ismyself);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isAuthenticated || !ctx_r0.ismyself);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ProfileData);
} }
function ViewProfileComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewProfileComponent_ng_template_2_div_0_Template, 2, 0, "div", 16);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isloading);
} }
class ViewProfileComponent {
    constructor(acrud, authService, router, route) {
        this.acrud = acrud;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.isAuthenticated = false;
        this.isloading = true;
        this.ismyself = false;
        this.pbcount = 0;
        this.prcount = 0;
        this.allcount = 0;
    }
    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            if (user) {
                this.isAuthenticated = !!user;
            }
        });
        this.route.params
            .subscribe((params) => {
            this.unameParam = params['username'];
            this.getUidFromService();
            if (this.isAuthenticated) {
                this.acrud.getProfile().subscribe(d => {
                    let x = this.acrud.seprate(d);
                    this.myuname = x[0].uname;
                    if (this.myuname == this.unameParam) {
                        this.ismyself = true;
                        this.getPrfoileFromPersonalDb();
                    }
                    else {
                        this.ismyself = false;
                        this.getPrfoileFromPublicDb();
                    }
                });
            }
            if (!this.isAuthenticated) {
                this.ismyself = false;
                this.getPrfoileFromPublicDb();
            }
        });
    }
    getPrfoileFromPublicDb() {
        this.isloading = true;
        this.acrud.getPublicProfile(this.unameParam).subscribe(d => {
            let x = this.acrud.seprate(d);
            this.ProfileData = x[0];
            this.isloading = false;
        });
    }
    getPrfoileFromPersonalDb() {
        this.isloading = true;
        this.acrud.getProfile().subscribe(d => {
            let x = this.acrud.seprate(d);
            this.ProfileData = x[0];
            this.username = this.ProfileData.uname;
            this.isloading = false;
        });
    }
    getUidFromService() {
        this.acrud.getPublicProfile(this.unameParam).subscribe(d => {
            let x = this.acrud.seprate(d);
            if (x[0]) {
                let y = x[0].id;
                this.getPublicPostsFromProfileId(y);
                this.getPrivatePostsFromProfileId(y);
            }
            else {
                this.router.navigate(["home"]);
            }
        });
    }
    getPrivatePostsFromProfileId(y) {
        this.acrud.getPrivateFromProfileId(y).subscribe(d => {
            let x = this.acrud.seprate(d);
            this.prcount = x.length;
            this.allcount += this.prcount;
        });
    }
    getPublicPostsFromProfileId(y) {
        this.acrud.getPublicPostsFromProfileId(y).subscribe(d => {
            let x = this.acrud.seprate(d);
            this.pbcount = x.length;
            this.allcount += this.pbcount;
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
ViewProfileComponent.ɵfac = function ViewProfileComponent_Factory(t) { return new (t || ViewProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_1__["ACrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ViewProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewProfileComponent, selectors: [["app-view-profile"]], decls: 4, vars: 2, consts: [["class", "row", 4, "ngIf", "ngIfElse"], [1, "col-md-9", "col-sm-12"], ["loading", ""], [1, "row"], ["class", "col-md-3 col-sm-12", 4, "ngIf"], [1, "col-md-7", "col-sm-12", "center-block"], ["class", "row", 4, "ngIf"], [1, "col-md-3", "col-sm-12"], [1, "list-group"], ["routerLinkActive", "active", 1, "list-group-item", 3, "routerLink"], [1, "list-group-item", 3, "routerLink"], [1, "count-post"], [1, "list-group-item", "disabled", 3, "routerLink"], [1, "col-md-4", "col-xs-12", "col-md-push-8"], ["alt", "", "width", "150", "height", "150", 1, "img-circle", 3, "src"], [1, "col-md-8", "col-xs-12", "col-md-pull-4"], ["class", "loading-text", 4, "ngIf"], [1, "loading-text"]], template: function ViewProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewProfileComponent_div_0_Template, 5, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewProfileComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isloading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _spinner_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__["LoadingSpinnerComponent"]], styles: ["p[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n}\r\n\r\n@media screen and (max-width:767px) {\r\n    .col-md-4.col-xs-12[_ngcontent-%COMP%] {\r\n        margin-top: 25px;\r\n        float: none;\r\n        text-align: center;\r\n    }\r\n    .img-circle[_ngcontent-%COMP%] {\r\n        width: 150px;\r\n        height: 150px;\r\n        text-align: center;\r\n    }\r\n    h5[_ngcontent-%COMP%] > b[_ngcontent-%COMP%], p[_ngcontent-%COMP%] > b[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n    h2[_ngcontent-%COMP%] {\r\n        padding-bottom: 10px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width:992px) {\r\n    .col-md-8.col-xs-8[_ngcontent-%COMP%] {\r\n        padding-left: 50px;\r\n    }\r\n}\r\n\r\n.center-block[_ngcontent-%COMP%] {\r\n    padding: 25px;\r\n    box-shadow: 0 10px 35px rgba(0, 0, 0, .1);\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], b[_ngcontent-%COMP%] {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci92aWV3LXByb2ZpbGUvdmlldy1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCO0lBQ0E7O1FBRUksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlDQUF5QztBQUM3Qzs7QUFFQTs7O0lBR0ksMEpBQTBKO0FBQzlKIiwiZmlsZSI6InNyYy9hcHAvdXNlci92aWV3LXByb2ZpbGUvdmlldy1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLFxyXG5oNSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5jb2wtbWQtNC5jb2wteHMtMTIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmltZy1jaXJjbGUge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGg1PmIsXHJcbiAgICBwPmIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gICAgLmNvbC1tZC04LmNvbC14cy04IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jZW50ZXItYmxvY2sge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzNXB4IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG59XHJcblxyXG5oMixcclxucCxcclxuYiB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-profile',
                templateUrl: './view-profile.component.html',
                styleUrls: ['./view-profile.component.css']
            }]
    }], function () { return [{ type: src_app_Authentication_shared_acrud_service__WEBPACK_IMPORTED_MODULE_1__["ACrudService"] }, { type: src_app_Authentication_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBXz2WsXGB25SCJ8mNg-BJIL495RWT_fqY",
        authDomain: "fir-2f842.firebaseapp.com",
        databaseURL: "https://fir-2f842.firebaseio.com",
        projectId: "fir-2f842",
        storageBucket: "fir-2f842.appspot.com",
        messagingSenderId: "115483508992",
        appId: "1:115483508992:web:46907f01046236df55f3e5"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ADMIN\Desktop\blog\MyBlog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map