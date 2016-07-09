/**
 * Created by Michael on 6/25/16.
 */
System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            LoginService = (function () {
                function LoginService(_http) {
                    this._http = _http;
                }
                LoginService.prototype.authenticate = function (form) {
                    var credentials = {
                        email: form.value.email ? form.value.email : "",
                        password: form.value.password ? form.value.password : ""
                    };
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post('/authenticate', JSON.stringify(credentials), {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                LoginService.prototype.signUp = function (form) {
                    console.log(form.value.first_name);
                    var credentials = {
                        email: form.value.email ? form.value.email : "",
                        first_name: form.value.first_name ? form.value.first_name : "",
                        last_name: form.value.last_name ? form.value.last_name : "",
                        password: form.value.password ? form.value.password : "",
                        confirm_password: form.value.confirm_password ? form.value.confirm_password : ""
                    };
                    console.log(credentials);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post('/users', JSON.stringify(credentials), {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                LoginService.prototype.logout = function () {
                    return this._http.get('/logout').map(function (res) { return res.json(); });
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=login.service.js.map