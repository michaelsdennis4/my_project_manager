/**
 * Created by Michael on 6/12/16.
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'left-panel',
    template: `
        <link rel="stylesheet" href="app/stylesheets/left_panel.css">
        <div class="container left-panel" id="left-panel">
        
		<div class="container upper-left-section" id="upper-left-section">
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
			</div>
			<div class="container wireframes" id="wireframes">
				Wireframes
				<ul class="wireframes" id="wireframes-list">
					<li class="wireframe" id="wireframe-item">
						<a href="">Sample Wireframe</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="container lower-left-section" id="lower-left-section">
			<div class="container user-stories" id="user-stories">
				User Stories
				<div class="container user-story-item">
					Sample User Story
				</div>
			</div>
		</div>

	</div>`
})
export class LeftPanelComponent {}