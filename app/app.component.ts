import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS} from 'angular2/router';
import {AuthenticateRouterOutlet} from './authenticate.directive';
import {HashLocationStrategy} from 'angular2/router';
import {LocationStrategy} from 'angular2/router';
import {provide} from 'angular2/core';

import {LoginComponent} from './login.component';
import {DashboardComponent} from './dashboard.component';
import {SignUpComponent} from './signup.component';
import {ProfileComponent} from './profile.component';

@RouteConfig([
    {path: '/', redirectTo: ['Dashboard'] },
    {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true },
    {path: '/signup', name: 'SignUp', component: SignUpComponent },
    {path: '/profile', name: 'Profile', component: ProfileComponent },
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent },
    {path: '/*other', name: 'Other', redirectTo: ['Login']}
])
@Component({
    selector: 'project-manager',
    template: '<router-outlet></router-outlet>',
    directives: [AuthenticateRouterOutlet],
    providers: [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]
})
export class AppComponent { }