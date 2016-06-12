/**
 * Created by Michael on 6/12/16.
 */

import {Component} from 'angular2/core';

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
		    	<input class="profile-submit" type="submit" id="login-submit" value="Log In"/>
		    </form>
		    <p class="submit-message" id="login-message"></p>
	    </div>
	    <div class="container signup" id="signup">
	    	<a href="/signup">Sign Up</a>
	    </div>
`
})
export class LoginComponent {}
