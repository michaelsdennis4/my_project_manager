/**
 * Created by Michael on 6/6/16.
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
    var BannerComponent;
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
            BannerComponent = (function () {
                function BannerComponent(_loginService, _router) {
                    this._loginService = _loginService;
                    this._router = _router;
                }
                BannerComponent.prototype.onLogout = function () {
                    var self = this;
                    this._loginService.logout().subscribe(function (result) {
                        if (result.message === 'ok') {
                            self._router.navigate(['Login']);
                        }
                        else {
                            console.log(result.message);
                        }
                    });
                };
                BannerComponent = __decorate([
                    core_1.Component({
                        selector: 'banner',
                        template: "\n        <div class=\"container banner\" id=\"banner\">\n            <div class=\"container upper-banner\" id=\"upper-banner\">\n\t\t\t    <a href=\"/projects/new\">New Project</a>\n\t\t    \t<a href=\"/profile\">Edit Profile</a>\n\t\t    \t<a href=\"\" (click)=\"onLogout\">Logout</a>\n\t\t    </div>\n\t\t    <div class=\"container lower-banner\" id=\"lower-banner\">\n\t\t    \tProduct Development Manager Dashboard\n\t\t    </div>\n\t    </div>",
                        styleUrls: ['app/stylesheets/dashboard.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [login_service_1.LoginService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
                ], BannerComponent);
                return BannerComponent;
            }());
            exports_1("BannerComponent", BannerComponent);
        }
    }
});
//# sourceMappingURL=banner.component.js.map