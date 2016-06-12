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
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent() {
                }
                SignupComponent = __decorate([
                    core_1.Component({
                        selector: 'sign-up',
                        template: "\n        <link rel=\"stylesheet\" href=\"app/stylesheets/login.css\">\n        <a href=\"/\">Home</a>\n\t    <div class=\"container profile-caption\" id=\"signup-caption\">\n\t    \tSign Up for a New Account\n\t    </div>\n\t    <div class=\"container profile-credentials\" id=\"signup-credentials\">\n\t    \t<form class=\"profile-form\" method=\"post\" action=\"/users\">\n\t    \t\t<label for=\"first_name\">First Name:</label>\n\t    \t\t<br>\n\t    \t\t<input type=\"text\" name=\"first_name\" placeholder=\"First Name\"/>\n\t    \t\t<br><br>\n\t    \t\t<label for=\"last_name\">Last Name:</label>\n\t    \t\t<br>\n\t    \t\t<input type=\"text\" name=\"last_name\" placeholder=\"Last Name\"/>\n\t    \t\t<br><br>\n\t    \t\t<label for=\"email\">E-mail:</label>\n\t    \t\t<br>\n\t    \t\t<input type=\"text\" name=\"email\" placeholder=\"E-mail\"/>\n\t\t    \t<br><br>\n\t\t    \t<label for=\"password\">Password:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"password\" name=\"password\" placeholder=\"Password\"/>\n\t\t    \t<br><br>\n\t\t    \t<label for=\"password\">Confirm Password:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"password\" name=\"confirm_password\" placeholder=\"Confirm Password\"/>\n\t\t    \t<br><br>\n\t\t    \t<input class=\"profile-submit\" type=\"submit\" id=\"signup-submit\" value=\"Sign Up\"/>\n\t    \t</form>\n\t    \t<p class=\"submit-message\" id=\"signup-message\"></p>\n\t    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map