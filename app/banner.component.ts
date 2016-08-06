/**
 * Created by Michael on 6/6/16.
 */

import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginService} from "./login.service";
import {HTTP_PROVIDERS} from 'angular2/http';
import {ModalComponent} from './modal.component'

@Component({
    selector: 'banner',
    template: `
        <div class="container banner" id="banner">
            <div class="container upper-banner" id="upper-banner">
                <a href="" (click)="onNewProject($event)">New Project</a>
		    	<a [routerLink]="['Profile']">Edit Profile</a>
		    	<a href="" (click)="onLogout($event)">Logout</a>
		    </div>
		    <div class="container lower-banner" id="lower-banner">
		    	Product Development Manager Dashboard
		    </div>
	    </div>
	    <modal [isModalShown]="isModalShown"></modal>
        `,
    styleUrls: ['app/stylesheets/dashboard.css'],
    directives: [ROUTER_DIRECTIVES, ModalComponent],
    providers: [LoginService, HTTP_PROVIDERS]
})
export class BannerComponent implements OnInit {

    public isModalShown: boolean;

    constructor(private _loginService: LoginService,
                private _router: Router
    ) { }

    ngOnInit() {
        this.isModalShown = false;
    }

    onNewProject($event) {
        $event.preventDefault();
        this.isModalShown = true;
    }

    onLogout($event) {
        $event.preventDefault();
        let self = this;
        this._loginService.logout().subscribe(result => {
            if (result.message === 'ok') {
                console.log('logout successful');
                this._router.navigate(['Login']);
            } else {
                console.log(result.message);
            }
        });
    }
}
