/**
 * Created by Michael on 6/6/16.
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'banner',
    template: `
        <link rel="stylesheet" href="app/stylesheets/banner.css">
        <div class="container banner" id="banner">
            <div class="container upper-banner" id="upper-banner">
			    <a href="/projects/new">New Project</a>
		    	<a href="/profile">Edit Profile</a>
		    	<a href="/logout">Logout</a>
		    </div>
		    <div class="container lower-banner" id="lower-banner">
		    	Product Development Manager Dashboard
		    </div>
	    </div>`
})
export class BannerComponent {}
