/**
 * Created by Michael on 6/12/16.
 */
System.register(['angular2/core', "angular2/router", "./profile.service", "angular2/http"], function(exports_1, context_1) {
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
    var core_1, router_1, profile_service_1, http_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(_profileService, _router) {
                    this._profileService = _profileService;
                    this._router = _router;
                    this.user = {};
                    this.profileMessage = "";
                    this.passwordMessage = "";
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    this.getCurrentUser();
                };
                ProfileComponent.prototype.getCurrentUser = function () {
                    var _this = this;
                    var self = this;
                    this._profileService.getCurrentUser().subscribe(function (result) {
                        if (result.user) {
                            _this.user = result.user;
                        }
                        else {
                            console.log(result.message);
                            self._router.navigate(['Login']);
                        }
                    });
                };
                ProfileComponent.prototype.onUpdateProfile = function (form) {
                    var _this = this;
                    var self = this;
                    this._profileService.updateProfile(form).subscribe(function (result) {
                        if (result.message === 'ok') {
                            _this._router.navigate(['Dashboard']);
                        }
                        else {
                            console.log(result.message);
                            if (result.message === 'login') {
                                _this._router.navigate(['Login']);
                            }
                            else {
                                _this.profileMessage = result.message;
                            }
                        }
                    });
                };
                ProfileComponent.prototype.onChangePassword = function (form) {
                    var _this = this;
                    var self = this;
                    this._profileService.changePassword(form).subscribe(function (result) {
                        if (result.message === 'ok') {
                            _this._router.navigate(['Dashboard']);
                        }
                        else {
                            console.log(result.message);
                            if (result.message === 'login') {
                                _this._router.navigate(['Login']);
                            }
                            else {
                                _this.passwordMessage = result.message;
                            }
                        }
                    });
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        template: "\n        <div class=\"top-link\"><a [routerLink]=\"['Dashboard']\">Dashboard</a></div>\n\t    <div class=\"container profile-caption\" id=\"profile-caption\">\n\t       \tEdit My Profile\n\t    </div>\n\t    <div class=\"container profile-credentials\" id=\"profile-credentials\">\n\t    \t<form #f1=\"ngForm\" (ngSubmit)=\"onUpdateProfile(f1.form)\" class=\"profile-form\">\n\t    \t\t<label for=\"first_name\">First Name:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"text\" name=\"first_name\" ngControl=\"first_name\" value=\"{{user.first_name}}\"/>\n\t\t    \t<br><br>\n\t\t    \t<label for=\"last_name\">Last Name:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"text\" name=\"last_name\" ngControl=\"last_name\" value=\"{{user.last_name}}\"/>\n\t\t    \t<br><br>\n\t\t    \t<label for=\"email\">E-mail:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"text\" name=\"email\" ngControl=\"email\" value=\"{{user.email}}\"/>\n\t\t    \t<br><br>\n\t\t    \t<input type=\"hidden\" name=\"_method\" value=\"patch\"/>\n\t    \t\t<input class=\"profile-submit\" type=\"submit\" id=\"profile-submit\" value=\"Update Profile\"/>\n\t\t    </form>\n\t\t    <p class=\"submit-message\" id=\"profile-message\">{{profileMessage}}</p>\n\t    </div>\n\n\t    <div class=\"container profile-credentials\" id=\"profile-credentials\">\n\t    \t<form #f2=\"ngForm\" (ngSubmit)=\"onChangePassword(f2.form)\" class=\"profile-form\">\n\t    \t\t<label for=\"password\">Old Password:</label>\n\t    \t\t<br>\n\t    \t\t<input type=\"password\" name=\"old_password\" ngControl=\"old_password\" placeholder=\"Old Password\"/>\n\t\t    \t<br><br>\n\t\t    \t<label for=\"password\">New Password:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"password\" name=\"new_password\" ngControl=\"new_password\" placeholder=\"New Password\"/>\n\t\t    \t<br><br>\n\t\t    \t<label for=\"new_password\">Confirm New Password:</label>\n\t\t    \t<br>\n\t\t    \t<input type=\"hidden\" name=\"_method\" value=\"patch\"/>\n\t\t    \t<input type=\"password\" name=\"confirm_new_password\" ngControl=\"confirm_new_password\" placeholder=\"Confirm New Password\"/>\n\t\t    \t<br><br>\n\t\t    \t<input class=\"profile-submit\" type=\"submit\" id=\"password-submit\" value=\"Change Password\"/>\n\t\t    </form>\n\t    \t<p class=\"submit-message\" id=\"password-message\">{{passwordMessage}}</p>\n\t    </div>",
                        styleUrls: ['app/stylesheets/login.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [profile_service_1.ProfileService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService, router_1.Router])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.component.js.map