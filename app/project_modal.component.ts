/**
 * Created by Michael on 7/23/16.
 */

import {Component, OnInit} from 'angular2/core';
import {ModalDirective} from "./modal.directive";
import {IModalShown} from "./interfaces";
import {ProjectService} from "./project.service";
import {Router} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'project-modal',
    template: `
        <div class="modalDialog" [modal-show]="isModalShown">
		    <div class="modalDialogWindow">
			    <a href="" title="Close" class="close" (click)="onClose($event)">X</a>
			    <h1>Add a New Project</h1>
			    <form #f="ngForm" (ngSubmit)="onSubmit(f.form)">
			        <label for="title">Project Title:</label><br>
			        <input type="text" id="title" ngControl="title"/><br>
			        <label for="repo">Git Repo</label><br>
			        <input type="text" id="repo" ngControl="repo"/><br>
			        <label for="url">URL</label><br>
			        <input type="text" id="url" ngControl="url"/><br>
			        <label for="description">Description:</label><br>
			        <textarea id="description" ngControl="description"></textarea><br>
			        <br>
			        <input type="submit" value="Create New Project"/>
                </form>
		    </div>
		</div>`,
    directives: [ModalDirective],
    providers: [ProjectService, HTTP_PROVIDERS],
    styleUrls: ['app/stylesheets/modal.css'],
    inputs: ['isModalShown:show-modal']
})
export class ProjectModalComponent {

    public isModalShown: IModalShown;
    private message: string = "";

    constructor(private _projectService: ProjectService, private _router: Router) {};

    onSubmit(form) {
        this._projectService.addNewProject(form).subscribe(result => {
            if (result.message === 'ok') {
                this.isModalShown.show = false;

            } else {
                console.log(result.message);
                this.message = result.message;

            }

        });


    }

    onClose($event) {
        $event.preventDefault();
        this.isModalShown.show = false;
    }
}