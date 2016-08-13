/**
 * Created by Michael on 6/15/16.
 */
System.register(['angular2/core', "./project.service", "angular2/http", './project_modal.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, project_service_1, http_1, project_modal_component_1;
    var ProjectSelectorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (project_modal_component_1_1) {
                project_modal_component_1 = project_modal_component_1_1;
            }],
        execute: function() {
            ProjectSelectorComponent = (function () {
                function ProjectSelectorComponent(_projectsService) {
                    this._projectsService = _projectsService;
                    this.isModalShown = { show: false };
                }
                ProjectSelectorComponent.prototype.ngOnInit = function () {
                    this.projects = [];
                    this.getProjects();
                    this.isModalShown.show = false;
                };
                ProjectSelectorComponent.prototype.onNewProject = function ($event) {
                    $event.preventDefault();
                    this.isModalShown.show = true;
                };
                ProjectSelectorComponent.prototype.onNewVersion = function ($event) {
                    $event.preventDefault();
                };
                ProjectSelectorComponent.prototype.getProjects = function () {
                    var _this = this;
                    this._projectsService.getProjects().subscribe(function (results) {
                        if (results.message === 'ok') {
                            _this.projects = results.projects;
                            console.log(_this.projects);
                        }
                        else {
                            console.log(results.message);
                        }
                    });
                };
                ProjectSelectorComponent = __decorate([
                    core_1.Component({
                        selector: 'project-selector',
                        template: "\n        <link rel=\"stylesheet\" href=\"app/stylesheets/dashboard.css\">\n        <div class=\"container project-selection\" id=\"project-selection\">\n            <button (click)=\"onNewProject($event)\">New Project</button>\n\t\t\t<form method=\"\">\n\t\t\t\t<label for=\"project-select\">Select A Project:</label>\n\t\t\t\t<br>\n\t\t\t\t<select id=\"project-select\">\n\t\t\t\t    <option></option>\n\t\t\t\t\t<option *ngFor=\"#project of projects\">{{project.title}}</option>\n\t\t\t\t</select>\n\t\t\t</form>\n\t\t\t<button (click)=\"onNewVersion($event)\">New Version</button>\n\t\t\t<form method=\"\">\n\t\t\t\t<label for=\"version-select\">Version/Branch:</label>\n\t\t\t\t<br>\n\t\t\t\t<select id=\"version-select\">\n\t\t\t\t\t<option>Sample Version</option>\n\t\t\t\t</select>\n\t\t\t</form>\n\t\t</div>\n        <project-modal [show-modal]=\"isModalShown\"></project-modal>",
                        styleUrls: ['app/stylesheets/dashboard.css'],
                        directives: [project_modal_component_1.ProjectModalComponent],
                        providers: [project_service_1.ProjectService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [project_service_1.ProjectService])
                ], ProjectSelectorComponent);
                return ProjectSelectorComponent;
            }());
            exports_1("ProjectSelectorComponent", ProjectSelectorComponent);
        }
    }
});
//# sourceMappingURL=project_selector.component.js.map