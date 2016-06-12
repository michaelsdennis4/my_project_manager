/**
 * Created by Michael on 6/12/16.
 */
System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var LeftPanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LeftPanelComponent = (function () {
                function LeftPanelComponent() {
                }
                LeftPanelComponent = __decorate([
                    core_1.Component({
                        selector: 'left-panel',
                        template: "\n        <link rel=\"stylesheet\" href=\"app/stylesheets/left_panel.css\">\n        <div class=\"container left-panel\" id=\"left-panel\">\n        \n\t\t<div class=\"container upper-left-section\" id=\"upper-left-section\">\n\t\t\t<div class=\"container project-selection\" id=\"project-selection\">\n\t\t\t\t<form method=\"\">\n\t\t\t\t\t<label for=\"project-select\">Select A Project:</label>\n\t\t\t\t\t<br>\n\t\t\t\t\t<select name=\"project-select\">\n\t\t\t\t\t\t<option>Sample Project</option>\n\t\t\t\t\t</select>\n\t\t\t\t</form>\n\t\t\t\t<form method=\"\">\n\t\t\t\t\t<label for=\"version-select\">Version/Branch:</label>\n\t\t\t\t\t<br>\n\t\t\t\t\t<select name=\"version-select\">\n\t\t\t\t\t\t<option>Sample Version</option>\n\t\t\t\t\t</select>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"container wireframes\" id=\"wireframes\">\n\t\t\t\tWireframes\n\t\t\t\t<ul class=\"wireframes\" id=\"wireframes-list\">\n\t\t\t\t\t<li class=\"wireframe\" id=\"wireframe-item\">\n\t\t\t\t\t\t<a href=\"\">Sample Wireframe</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"container lower-left-section\" id=\"lower-left-section\">\n\t\t\t<div class=\"container user-stories\" id=\"user-stories\">\n\t\t\t\tUser Stories\n\t\t\t\t<div class=\"container user-story-item\">\n\t\t\t\t\tSample User Story\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], LeftPanelComponent);
                return LeftPanelComponent;
            }());
            exports_1("LeftPanelComponent", LeftPanelComponent);
        }
    }
});
//# sourceMappingURL=left_panel.component.js.map