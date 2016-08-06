/**
 * Created by Michael on 7/23/16.
 */

import {Component, OnInit} from 'angular2/core';
import {ModalDirective} from "./modal.directive";
import {IModalShown} from "./interfaces";

@Component({
    selector: 'modal',
    template: `
        <div class="modalDialog" [modal-show]="isModalShown">
		    <div class="modalDialogWindow">
			    <a href="" title="Close" class="close" (click)="onClose($event)">X</a>
			    <h1>This is a modal</h1>
		    </div>
		</div>`,
    directives: [ModalDirective],
    styleUrls: ['app/stylesheets/modal.css'],
    inputs: ['isModalShown:show-modal']
})
export class ModalComponent {

    public isModalShown: IModalShown;

    onClose($event) {
        $event.preventDefault();
        this.isModalShown.show = false;
    }
}