/**
 * Created by Michael on 6/12/16.
 */
System.register(['angular2/core', 'angular2/router', './project_selector.component', './wireframes.component', './user_stories.component', './banner.component', './task_list.component'], function(exports_1, context_1) {
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
    var core_1, router_1, project_selector_component_1, wireframes_component_1, user_stories_component_1, banner_component_1, task_list_component_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (project_selector_component_1_1) {
                project_selector_component_1 = project_selector_component_1_1;
            },
            function (wireframes_component_1_1) {
                wireframes_component_1 = wireframes_component_1_1;
            },
            function (user_stories_component_1_1) {
                user_stories_component_1 = user_stories_component_1_1;
            },
            function (banner_component_1_1) {
                banner_component_1 = banner_component_1_1;
            },
            function (task_list_component_1_1) {
                task_list_component_1 = task_list_component_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent() {
                }
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        template: "\n        <div class=\"dashboard\"> \n            <banner></banner>\n            <div class=\"container left-panel\" id=\"left-panel\"> \n                <div class=\"container upper-left-section\" id=\"upper-left-section\">\n                    <project-selector [projects]=\"projects\"></project-selector>\t\n                    <wireframes></wireframes>\n                </div>\n                <div class=\"container lower-left-section\" id=\"lower-left-section\">\n                    <user-stories></user-stories>\n                </div>\n            </div>    \n            <div class=\"container right-panel\" id=\"right-panel\">\n                <task-list></task-list>\n            </div> \n\t    </div>\n        ",
                        host: { 'class': 'ng-animate dashboardContainer' },
                        styleUrls: ['app/stylesheets/dashboard.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            project_selector_component_1.ProjectSelectorComponent,
                            wireframes_component_1.WireframesComponent,
                            user_stories_component_1.UserStoriesComponent,
                            task_list_component_1.TaskListComponent,
                            banner_component_1.BannerComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map