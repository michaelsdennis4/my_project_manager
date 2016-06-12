import {Component} from 'angular2/core';
import {BannerComponent} from "./banner.component";
import {LeftPanelComponent} from "./left_panel.component";
import {RightPanelComponent} from "./right_panel.component";
import {LoginComponent} from "./login.component";

@Component({
    selector: 'my-app',
    template: `
        <link rel="stylesheet" href="app/stylesheets/main.css">
        <login></login>`,
    directives: [LoginComponent]
})
export class AppComponent { }