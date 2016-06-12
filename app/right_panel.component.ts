/**
 * Created by Michael on 6/12/16.
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'right-panel',
    template: `
        <link rel="stylesheet" href="app/stylesheets/right_panel.css">
        <div class="container right-panel" id="right-panel">
		<div class="container task-list" id="task-list">
			Tasks
			<div class="container task-list-item">
				Sample Task
			</div>
		</div>
	</div>`
})
export class RightPanelComponent {}
