/**
 * Created by Michael on 7/23/16.
 */
System.register(['angular2/core', "./modal.directive"], function(exports_1, context_1) {
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
    var core_1, modal_directive_1;
    var ProjectModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (modal_directive_1_1) {
                modal_directive_1 = modal_directive_1_1;
            }],
        execute: function() {
            ProjectModalComponent = (function () {
                function ProjectModalComponent() {
                }
                ProjectModalComponent.prototype.onClose = function ($event) {
                    $event.preventDefault();
                    this.isModalShown.show = false;
                };
                ProjectModalComponent = __decorate([
                    core_1.Component({
                        selector: 'project-modal',
                        template: "\n        <div class=\"modalDialog\" [modal-show]=\"isModalShown\">\n\t\t    <div class=\"modalDialogWindow\">\n\t\t\t    <a href=\"\" title=\"Close\" class=\"close\" (click)=\"onClose($event)\">X</a>\n\t\t\t    <h1>Add a New Project</h1>\n\t\t\t    <form>\n\t\t\t        <label for=\"name\">Project Name:</label><br>\n\t\t\t        <input type=\"text\" id=\"name\" ngControl=\"name\"/><br>\n\t\t\t        <label for=\"repo\">Git Repo</label><br>\n\t\t\t        <input type=\"text\" id=\"repo\" ngControl=\"repo\"/><br>\n\t\t\t        <label for=\"url\">URL</label><br>\n\t\t\t        <input type=\"text\" id=\"url\" ngControl=\"url\"/><br>\n\t\t\t        <label for=\"description\">Description:</label><br>\n\t\t\t        <textarea id=\"description\" ngControl=\"description\"></textarea><br>\n\t\t\t        <br>\n\t\t\t        <input type=\"submit\" value=\"Create New Project\"/>\n                </form>\n\t\t    </div>\n\t\t</div>",
                        directives: [modal_directive_1.ModalDirective],
                        styleUrls: ['app/stylesheets/modal.css'],
                        inputs: ['isModalShown:show-modal']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProjectModalComponent);
                return ProjectModalComponent;
            }());
            exports_1("ProjectModalComponent", ProjectModalComponent);
        }
    }
});
//# sourceMappingURL=project_modal.component.js.map