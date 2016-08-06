/**
 * Created by Michael on 7/23/16.
 */

import {Component, OnInit} from 'angular2/core';
import {ModalDirective} from "./modal.directive";
import {IModalShown} from "./interfaces";

@Component({
    selector: 'project-modal',
    template: `
        <div class="modalDialog" [modal-show]="isModalShown">
		    <div class="modalDialogWindow">
			    <a href="" title="Close" class="close" (click)="onClose($event)">X</a>
			    <h1>Add a New Project</h1>
			    <form>
			        <label for="name">Project Name:</label><br>
			        <input type="text" id="name" ngControl="name"/><br>
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
    styleUrls: ['app/stylesheets/modal.css'],
    inputs: ['isModalShown:show-modal']
})
export class ProjectModalComponent {

    public isModalShown: IModalShown;

    onClose($event) {
        $event.preventDefault();
        this.isModalShown.show = false;
    }
}