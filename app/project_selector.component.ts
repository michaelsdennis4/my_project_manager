/**
 * Created by Michael on 6/15/16.
 */

import {Component, OnInit} from 'angular2/core';
import {ProjectService} from "./project.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {ProjectModalComponent} from './project_modal.component';
import {IModalShown} from "./interfaces";

@Component({
    selector: 'project-selector',
    template: `
        <link rel="stylesheet" href="app/stylesheets/dashboard.css">
        <div class="container project-selection" id="project-selection">
            <button (click)="onNewProject($event)">New Project</button>
			<form method="">
				<label for="project-select">Select A Project:</label>
				<br>
				<select id="project-select">
				    <option></option>
					<option *ngFor="#project of projects">{{project.title}}</option>
				</select>
			</form>
			<button (click)="onNewVersion($event)">New Version</button>
			<form method="">
				<label for="version-select">Version/Branch:</label>
				<br>
				<select id="version-select">
					<option>Sample Version</option>
				</select>
			</form>
		</div>
        <project-modal [show-modal]="isModalShown"></project-modal>`,
    styleUrls: ['app/stylesheets/dashboard.css'],
    directives: [ProjectModalComponent],
    providers: [ProjectService, HTTP_PROVIDERS]
})
export class ProjectSelectorComponent implements OnInit {

    private isModalShown: IModalShown = {show: false};
    private projects: any[];

    constructor(private _projectsService: ProjectService) {}

    ngOnInit() {
        this.projects = [];
        this.getProjects();
        this.isModalShown.show = false;
    }

    onNewProject($event) {
        $event.preventDefault();
        this.isModalShown.show = true;
    }

    onNewVersion($event) {
        $event.preventDefault();
    }

    getProjects() {
        this._projectsService.getProjects().subscribe(results => {
            if (results.message === 'ok') {
                this.projects = results.projects;
                console.log(this.projects);
            } else {
                console.log(results.message);
            }
        });
    }

}
