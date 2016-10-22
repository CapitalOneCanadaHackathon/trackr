"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var therapist_service_1 = require("./therapist.service");
var TherapistListComponent = (function () {
    function TherapistListComponent(therapistService) {
        this.therapistService = therapistService;
        this.therapists = therapistService.getTherapists();
    }
    return TherapistListComponent;
}());
TherapistListComponent = __decorate([
    core_1.Component({
        selector: 'therapist-list',
        template: "\n    <h1>Therapist list</h1>\n    <ol>\n      <li *ngFor='let therapist of therapists | async'>\n        <h2>{{therapist.name}}</h2>\n      </li>\n    </ol>\n  ",
        providers: [therapist_service_1.TherapistService]
    }),
    __metadata("design:paramtypes", [therapist_service_1.TherapistService])
], TherapistListComponent);
exports.TherapistListComponent = TherapistListComponent;
//# sourceMappingURL=therapist-list.component.js.map