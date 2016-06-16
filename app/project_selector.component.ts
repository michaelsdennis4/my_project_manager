/**
 * Created by Michael on 6/15/16.
 */

import {Component} from 'angular2/core';


@Component({
    selector: 'project-selector',
    template: `
        <link rel="stylesheet" href="app/stylesheets/dashboard.css">
        <div class="container project-selection" id="project-selection">
			<form method="">
				<label for="project-select">Select A Project:</label>
				<br>
				<select name="project-select">
					<option>Sample Project</option>
				</select>
			</form>
			<form method="">
				<label for="version-select">Version/Branch:</label>
				<br>
				<select name="version-select">
					<option>Sample Version</option>
				</select>
			</form>
		</div>`
})
export class ProjectSelectorComponent {}
