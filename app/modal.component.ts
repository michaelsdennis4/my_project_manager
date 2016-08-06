/**
 * Created by Michael on 7/23/16.
 */

import {Component, Input} from 'angular2/core';
import {ModalDirective} from "./modal.directive";

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
    styleUrls: ['app/stylesheets/modal.css']
})
export class ModalComponent {

    @Input('isModalShown') isModalShown: boolean;

    onClose($event) {
        $event.preventDefault();
        this.isModalShown = false;
    }
}