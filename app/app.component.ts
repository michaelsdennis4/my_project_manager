import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {LoginComponent} from "./login.component";
import {DashboardComponent} from "./dashboard.component";

@RouteConfig([
    {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true },
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent },
    {path: '/*other', name: 'Other', redirectTo: ['Login']}
])
@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }