/**
 * Created by Michael on 6/6/16.
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
    var BannerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BannerComponent = (function () {
                function BannerComponent() {
                }
                BannerComponent = __decorate([
                    core_1.Component({
                        selector: 'banner',
                        template: "\n        <link rel=\"stylesheet\" href=\"app/stylesheets/banner.css\">\n        <div class=\"container banner\" id=\"banner\">\n            <div class=\"container upper-banner\" id=\"upper-banner\">\n\t\t\t    <a href=\"/projects/new\">New Project</a>\n\t\t    \t<a href=\"/profile\">Edit Profile</a>\n\t\t    \t<a href=\"/logout\">Logout</a>\n\t\t    </div>\n\t\t    <div class=\"container lower-banner\" id=\"lower-banner\">\n\t\t    \tProduct Development Manager Dashboard\n\t\t    </div>\n\t    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], BannerComponent);
                return BannerComponent;
            }());
            exports_1("BannerComponent", BannerComponent);
        }
    }
});
//# sourceMappingURL=banner.component.js.map