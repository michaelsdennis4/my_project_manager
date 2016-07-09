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
    var SignUpComponent;
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
            SignUpComponent = (function () {
                function SignUpComponent(_loginService, _router) {
                    this._loginService = _loginService;
                    this._router = _router;
                    this.message = "";
                }
                SignUpComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    var self = this;
                    this._loginService.signUp(form).subscribe(function (result) {
                        if (result.message === 'ok') {
                            console.log('new user created');
                            _this._router.navigate(['Dashboard']);
                        }
                        else {
                            console.log(result.message);
                            _this.message = result.message;
                        }
                    });
                };
                SignUpComponent = __decorate([
                    core_1.Component({
                        selector: 'sign-up',
                        template: "\n        <div class=\"top-link\"><a [routerLink]=\"['Login']\">Home</a></div>\n\t    <div class=\"container profile-caption\" id=\"signup-caption\">\n\t    \tSign Up for a New Account\n\t    </div>\n\t    <div class=\"container profile-credentials\" id=\"signup-credentials\">\n\t    \t<form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.form)\" class=\"profile-form\">\n\t    \t\t<label for=\"first_name\">First Name:</label>\n\t    \t\t<br>\n\t    \t\t<input type=\"text\" name=\"first_name\" ngControl=\"first_name\" placeholder=\"First Name\"/>\n\t    \t\t<br><br>\n\t    \t\t<label for=\"last_name\">Last Name:</label>\n\t    \t\t<br>\n\t    \t\t<input type=\"text\" name=\"last_name\" ngControl=\"last_name\" placeholder=\"Last Name\"/>\n\t    \t\t<br><br>\n\t    \t\t<label for=\"email\">E-mail:</label>\n\t    \t\t<br>\n\t    \t\t<input type=\"text\" name=\"email\" ngControl=\"email\" placeholder=\"E-mail\"/>\n\t\t    \t<br><br>\n\t\t    \t<label for=\"password\">Password:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"password\" name=\"password\" ngControl=\"password\" placeholder=\"Password\"/>\n\t\t    \t<br><br>\n\t\t    \t<label for=\"password\">Confirm Password:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"password\" name=\"confirm_password\" ngControl=\"confirm_password\" placeholder=\"Confirm Password\"/>\n\t\t    \t<br><br>\n\t\t    \t<input class=\"profile-submit\" type=\"submit\" id=\"signup-submit\" value=\"Sign Up\"/>\n\t    \t</form>\n\t    \t<p class=\"submit-message\" id=\"signup-message\">{{message}}</p>\n\t    </div>",
                        styleUrls: ['app/stylesheets/login.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [login_service_1.LoginService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
                ], SignUpComponent);
                return SignUpComponent;
            }());
            exports_1("SignUpComponent", SignUpComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map