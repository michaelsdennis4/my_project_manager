/**
 * Created by Michael on 7/23/16.
 */
System.register(['angular2/core', "angular2/router", 'angular2/http', './login.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, http_1, login_service_1;
    var AuthenticateRouterOutlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            AuthenticateRouterOutlet = (function (_super) {
                __extends(AuthenticateRouterOutlet, _super);
                function AuthenticateRouterOutlet(_elementRef, _loader, _parentRouter, nameAttr, _loginService) {
                    _super.call(this, _elementRef, _loader, _parentRouter, nameAttr);
                    this.parentRouter = _parentRouter;
                    this.loginService = _loginService;
                    this.publicRoutes = ['login', 'signup'];
                }
                AuthenticateRouterOutlet.prototype.activate = function (instruction) {
                    var _this = this;
                    if (this.publicRoutes.indexOf(instruction.urlPath) >= 0) {
                        return _super.prototype.activate.call(this, instruction);
                    }
                    else {
                        this.loginService.isLoggedIn().subscribe(function (result) {
                            if (result.message === 'login') {
                                _this.parentRouter.navigate(['Login']);
                            }
                            else {
                                return _super.prototype.activate.call(_this, instruction);
                            }
                        });
                    }
                };
                AuthenticateRouterOutlet = __decorate([
                    core_1.Directive({
                        selector: 'router-outlet',
                        providers: [login_service_1.LoginService, http_1.HTTP_PROVIDERS]
                    }),
                    __param(3, core_1.Attribute('name')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, router_1.Router, String, login_service_1.LoginService])
                ], AuthenticateRouterOutlet);
                return AuthenticateRouterOutlet;
            }(router_1.RouterOutlet));
            exports_1("AuthenticateRouterOutlet", AuthenticateRouterOutlet);
        }
    }
});
//# sourceMappingURL=authenticate.directive.js.map