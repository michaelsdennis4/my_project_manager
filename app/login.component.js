/**
 * Created by Michael on 6/12/16.
 */
System.register(['angular2/core', "angular2/router", "./login.service", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_service_1, http_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_loginService, _router) {
                    this._loginService = _loginService;
                    this._router = _router;
                    this.message = "";
                }
                LoginComponent.prototype.onSubmit = function (form) {
                    var self = this;
                    this._loginService.authenticate(form).subscribe(function (result) {
                        if (result.message === 'ok') {
                            console.log('authentication success');
                            self._router.navigate(['Dashboard']);
                        }
                        else {
                            console.log(result.message);
                            self.message = result.message;
                        }
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        template: "\n        <div class=\"login\">\n            <div class=\"container title\" id=\"title\">\n                Product Development Manager\n            </div>\n            <div class=\"container profile-credentials\" id=\"credentials\">\n                Login\n                <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.form)\" class=\"profile-form\">\n                    <label for=\"email\">E-mail:</label>\n                    <br>\n                    <input type=\"text\" name=\"email\" ngControl=\"email\" placeholder=\"E-mail\"/>\n                    <br><br>\n                    <label for=\"password\">Password:</label>\n                    <br>\n                    <input type=\"password\" name=\"password\" ngControl=\"password\" placeholder=\"Password\"/>\n                    <br><br>\n                    <input class=\"profile-submit\" type=\"submit\" id=\"login-submit\" value=\"Log In\"/>\n                </form>\n                <span class=\"submit-message\" id=\"login-message\">{{message}}</span>\n            </div>\n            <div class=\"container signup-link\" id=\"signup\">\n                <a [routerLink]=\"['SignUp']\">Sign Up</a>\n            </div>\n\t    </div>",
                        host: { 'class': 'ng-animate loginContainer' },
                        styleUrls: ['app/stylesheets/login.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [login_service_1.LoginService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map