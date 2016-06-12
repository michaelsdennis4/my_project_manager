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
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent() {
                }
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        template: "\n        <link rel=\"stylesheet\" href=\"app/stylesheets/login.css\">\n        <a href=\"/dashboard\">Dashboard</a>\n\t    <div class=\"container profile-caption\" id=\"profile-caption\">\n\t       \tEdit My Profile\n\t    </div>\n\t    <div class=\"container profile-credentials\" id=\"profile-credentials\">\n\t    \t<form class=\"profile-form\" method=\"post\" action=\"/users\">\n\t    \t\t<label for=\"first_name\">First Name:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"text\" name=\"first_name\" value=\"\"/>\n\t\t    \t<br><br>\n\t\t    \t<label for=\"last_name\">Last Name:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"text\" name=\"last_name\" value=\"\"/>\n\t\t    \t<br><br>\n\t\t    \t<label for=\"email\">E-mail:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"text\" name=\"email\" value=\"\"/>\n\t\t    \t<br><br>\n\t\t    \t<input type=\"hidden\" name=\"_method\" value=\"patch\"/>\n\t    \t\t<input class=\"profile-submit\" type=\"submit\" id=\"profile-submit\" value=\"Update Profile\"/>\n\t\t    </form>\n\t\t    <p class=\"submit-message\" id=\"profile-message\"></p>\n\t    </div>\n\n\t    <div class=\"container profile-credentials\" id=\"profile-credentials\">\n\t    \t<form class=\"profile-form\" method=\"post\" action=\"/password\">\n\t    \t\t<label for=\"password\">Old Password:</label>\n\t    \t\t<br>\n\t    \t\t<input type=\"password\" name=\"old_password\" placeholder=\"Old Password\"/>\n\t\t    \t<br><br>\n\t\t    \t<label for=\"password\">New Password:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"password\" name=\"new_password\" placeholder=\"New Password\"/>\n\t\t    \t<br><br>\n\t\t    \t<label for=\"new_password\">Confirm New Password:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"hidden\" name=\"_method\" value=\"patch\"/>\n\t\t    \t<input type=\"password\" name=\"confirm_new_password\" placeholder=\"Confirm New Password\"/>\n\t\t    \t<br><br>\n\t\t    \t<input class=\"profile-submit\" type=\"submit\" id=\"password-submit\" value=\"Change Password\"/>\n\t\t    </form>\n\t    \t<p class=\"submit-message\" id=\"password-message\"></p>\n\t    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.component.js.map