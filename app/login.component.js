/**
 * Created by Michael on 6/12/16.
 */
System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent() {
                }
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        template: "\n        <link rel=\"stylesheet\" href=\"app/stylesheets/login.css\">\n        <div class=\"container title\" id=\"title\">\n\t\t    Product Development Manager\n\t    </div>\n\t    <div class=\"container profile-credentials\" id=\"credentials\">\n\t    \tLogin\n\t\t    <form class=\"profile-form\" method=\"get\" action=\"/dashboard\">\n\t\t    \t<label for=\"email\">E-mail:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"text\" name=\"email\" placeholder=\"E-mail\"/>\n\t\t    \t<br><br>\n\t\t    \t<label for=\"password\">Password:</label>\n\t\t    \t<br>\n\t\t\t    <input type=\"password\" name=\"password\" placeholder=\"Password\"/>\n\t\t\t    <br><br>\n\t\t    \t<input class=\"profile-submit\" type=\"submit\" id=\"login-submit\" value=\"Log In\"/>\n\t\t    </form>\n\t\t    <p class=\"submit-message\" id=\"login-message\"></p>\n\t    </div>\n\t    <div class=\"container signup\" id=\"signup\">\n\t    \t<a href=\"/signup\">Sign Up</a>\n\t    </div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map