/**
 * Created by Michael on 6/12/16.
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'sign-up',
    template: `
        <link rel="stylesheet" href="app/stylesheets/login.css">
        <a href="/">Home</a>
	    <div class="container profile-caption" id="signup-caption">
	    	Sign Up for a New Account
	    </div>
	    <div class="container profile-credentials" id="signup-credentials">
	    	<form class="profile-form" method="post" action="/users">
	    		<label for="first_name">First Name:</label>
	    		<br>
	    		<input type="text" name="first_name" placeholder="First Name"/>
	    		<br><br>
	    		<label for="last_name">Last Name:</label>
	    		<br>
	    		<input type="text" name="last_name" placeholder="Last Name"/>
	    		<br><br>
	    		<label for="email">E-mail:</label>
	    		<br>
	    		<input type="text" name="email" placeholder="E-mail"/>
		    	<br><br>
		    	<label for="password">Password:</label>
		    	<br>
		    	<input type="password" name="password" placeholder="Password"/>
		    	<br><br>
		    	<label for="password">Confirm Password:</label>
		    	<br>
		    	<input type="password" name="confirm_password" placeholder="Confirm Password"/>
		    	<br><br>
		    	<input class="profile-submit" type="submit" id="signup-submit" value="Sign Up"/>
	    	</form>
	    	<p class="submit-message" id="signup-message"></p>
	    </div>`
})
export class SignUpComponent {}
