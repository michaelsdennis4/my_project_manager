/**
 * Created by Michael on 7/31/16.
 */

import {Directive, ElementRef, Renderer, Input, HostBinding} from 'angular2/core';

@Directive({
    selector: '[modal-show]'
})
export class ModalDirective {

    @Input('modal-show') modalShow: boolean;

    @HostBinding('class.open') get setState() {
        return this.modalShow;
    }

    constructor(private _el: ElementRef,
                private _renderer: Renderer) {}

}