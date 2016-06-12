/**
 * Created by Michael on 6/12/16.
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'profile',
    template: `
        <link rel="stylesheet" href="app/stylesheets/login.css">
        <a href="/dashboard">Dashboard</a>
	    <div class="container profile-caption" id="profile-caption">
	       	Edit My Profile
	    </div>
	    <div class="container profile-credentials" id="profile-credentials">
	    	<form class="profile-form" method="post" action="/users">
	    		<label for="first_name">First Name:</label>
		    	<br>
		    	<input type="text" name="first_name" value=""/>
		    	<br><br>
		    	<label for="last_name">Last Name:</label>
		    	<br>
		    	<input type="text" name="last_name" value=""/>
		    	<br><br>
		    	<label for="email">E-mail:</label>
		    	<br>
		    	<input type="text" name="email" value=""/>
		    	<br><br>
		    	<input type="hidden" name="_method" value="patch"/>
	    		<input class="profile-submit" type="submit" id="profile-submit" value="Update Profile"/>
		    </form>
		    <p class="submit-message" id="profile-message"></p>
	    </div>

	    <div class="container profile-credentials" id="profile-credentials">
	    	<form class="profile-form" method="post" action="/password">
	    		<label for="password">Old Password:</label>
	    		<br>
	    		<input type="password" name="old_password" placeholder="Old Password"/>
		    	<br><br>
		    	<label for="password">New Password:</label>
		    	<br>
		    	<input type="password" name="new_password" placeholder="New Password"/>
		    	<br><br>
		    	<label for="new_password">Confirm New Password:</label>
		    	<br>
		    	<input type="hidden" name="_method" value="patch"/>
		    	<input type="password" name="confirm_new_password" placeholder="Confirm New Password"/>
		    	<br><br>
		    	<input class="profile-submit" type="submit" id="password-submit" value="Change Password"/>
		    </form>
	    	<p class="submit-message" id="password-message"></p>
	    </div>`
})
export class ProfileComponent {}
