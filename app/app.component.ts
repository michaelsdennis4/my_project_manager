import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {LoginComponent} from "./login.component";
import {DashboardComponent} from "./dashboard.component";
import {SignUpComponent} from "./signup.component";
import {ProfileComponent} from "./profile.component";

@RouteConfig([
    {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true },
    {path: '/signup', name: 'SignUp', component: SignUpComponent },
    {path: '/profile', name: 'Profile', component: ProfileComponent },
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent },
    {path: '/*other', name: 'Other', redirectTo: ['Login']}
])
@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }