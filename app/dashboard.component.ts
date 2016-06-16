/**
 * Created by Michael on 6/12/16.
 */

import {Component} from 'angular2/core';
import {ProjectSelectorComponent} from "./project_selector.component";
import {WireframesComponent} from "./wireframes.component";
import {UserStoriesComponent} from "./user_stories.component";
import {BannerComponent} from "./banner.component";
import {TaskListComponent} from "./task_list.component";

@Component({
    selector: 'dashboard',
    template: `
        <link rel="stylesheet" href="app/stylesheets/dashboard.css">   
        <banner></banner>
        <div class="container left-panel" id="left-panel"> 
		    <div class="container upper-left-section" id="upper-left-section">
		        <project-selector></project-selector>	
	            <wireframes></wireframes>
		    </div>
		    <div class="container lower-left-section" id="lower-left-section">
			    <user-stories></user-stories>
		    </div>
	    </div>    
        <div class="container right-panel" id="right-panel">
		    <task-list></task-list>
	    </div>`,
    directives: [BannerComponent, ProjectSelectorComponent, WireframesComponent, UserStoriesComponent, TaskListComponent]
})
export class DashboardComponent {}