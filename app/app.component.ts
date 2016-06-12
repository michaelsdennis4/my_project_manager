import {Component} from 'angular2/core';
import {BannerComponent} from "./banner.component";
import {LeftPanelComponent} from "./left_panel.component";
import {RightPanelComponent} from "./right_panel.component";

@Component({
    selector: 'my-app',
    template: `
        <link rel="stylesheet" href="app/stylesheets/main.css">
        <banner></banner>
        <left-panel></left-panel>
        <right-panel></right-panel>`,
    directives: [BannerComponent, LeftPanelComponent, RightPanelComponent]
})
export class AppComponent { }