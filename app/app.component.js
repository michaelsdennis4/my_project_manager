System.register(['angular2/core', 'angular2/router', './authenticate.directive', './login.component', './dashboard.component', './signup.component', './profile.component'], function(exports_1, context_1) {
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
    var core_1, router_1, authenticate_directive_1, router_2, router_3, core_2, login_component_1, dashboard_component_1, signup_component_1, profile_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
            },
            function (authenticate_directive_1_1) {
                authenticate_directive_1 = authenticate_directive_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', redirectTo: ['Dashboard'] },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent, useAsDefault: true },
                        { path: '/signup', name: 'SignUp', component: signup_component_1.SignUpComponent },
                        { path: '/profile', name: 'Profile', component: profile_component_1.ProfileComponent },
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Login'] }
                    ]),
                    core_1.Component({
                        selector: 'project-manager',
                        template: '<router-outlet></router-outlet>',
                        directives: [authenticate_directive_1.AuthenticateRouterOutlet],
                        providers: [router_1.ROUTER_PROVIDERS, core_2.provide(router_3.LocationStrategy, { useClass: router_2.HashLocationStrategy })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map