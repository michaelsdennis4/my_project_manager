/**
 * Created by Michael on 6/12/16.
 */

import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from "angular2/router";
import {LoginService} from "./login.service";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'login',
    template: `
        <div class="container title" id="title">
		    Product Development Manager
	    </div>
	    <div class="container profile-credentials" id="credentials">
	    	Login
		    <form #f="ngForm" (ngSubmit)="onSubmit(f.form)" class="profile-form">
		    	<label for="email">E-mail:</label>
		    	<br>
		    	<input type="text" name="email" ngControl="email" placeholder="E-mail"/>
		    	<br><br>
		    	<label for="password">Password:</label>
		    	<br>
			    <input type="password" name="password" ngControl="password" placeholder="Password"/>
			    <br><br>
		    	<input class="profile-submit" type="submit" id="login-submit" value="Log In"/>
		    </form>
		    <p class="submit-message" id="login-message">{{message}}</p>
	    </div>
	    <div class="container signup" id="signup">
	    	<a [routerLink]="['SignUp']">Sign Up</a>
	    </div>`,
    styleUrls: ['app/stylesheets/login.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [LoginService, HTTP_PROVIDERS]
})
export class LoginComponent {
    constructor(private _loginService: LoginService, private _router: Router) { }

    message = "";

    onSubmit(form) {
        let self = this;
        this._loginService.authenticate(form).subscribe(result => {
            if (result.message === 'ok') {
                console.log('authentication success');
                self._router.navigate(['Dashboard']);
            } else {
                console.log(result.message);
                self.message = result.message;
            }
        });
    }
}
