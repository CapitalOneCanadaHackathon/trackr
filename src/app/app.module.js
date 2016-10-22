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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login.component");
var search_component_1 = require("./search.component");
var angularfire2_1 = require("angularfire2");
exports.firebaseConfig = {
    apiKey: "AIzaSyB1YoqFwLH8yHfbrBvDPp6EIS9G9IYJVJs",
    authDomain: "trackr-23a42.firebaseapp.com",
    databaseURL: "https://trackr-23a42.firebaseio.com",
    storageBucket: "trackr-23a42.appspot.com",
    messagingSenderId: "767208206365"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: '', component: login_component_1.LoginComponent },
                { path: 'search', component: search_component_1.SearchComponent }
            ]),
            angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig)
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            search_component_1.SearchComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map