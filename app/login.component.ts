/**
 * Created by Michael on 6/12/16.
 */

import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'login',
    template: `
        <link rel="stylesheet" href="app/stylesheets/login.css">
        <div class="container title" id="title">
		    Product Development Manager
	    </div>
	    <div class="container profile-credentials" id="credentials">
	    	Login
		    <form class="profile-form" method="get" action="/dashboard">
		    	<label for="email">E-mail:</label>
		    	<br>
		    	<input type="text" name="email" placeholder="E-mail"/>
		    	<br><br>
		    	<label for="password">Password:</label>
		    	<br>
			    <input type="password" name="password" placeholder="Password"/>
			    <br><br>
		    	<input class="profile-submit" type="submit" id="login-submit" value="Log In" (click)="login()"/>
		    </form>
		    <p class="submit-message" id="login-message"></p>
	    </div>
	    <div class="container signup" id="signup">
	    	<a [routerLink]="['SignUp']">Sign Up</a>
	    </div>`,
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {
    constructor(private _router: Router) { }

    login() {
        this._router.navigate(['Dashboard']);
    }
}
