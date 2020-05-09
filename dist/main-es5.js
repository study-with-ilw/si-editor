(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<textarea rows=\"4\" cols=\"50\" [(ngModel)]=\"msg\">\n\n</textarea>\n<button (click)=\"commit()\">Save</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/university/university.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/university/university.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <!-- Sidebar  -->\n  <nav id=\"sidebar\">\n    <div class=\"sidebar-header\">\n      <h4 class=\"text-center\"><a href=\"/\">Study Ireland</a></h4>\n    </div>\n\n    <ul class=\"list-unstyled CTAs\">\n      <li>\n        <a href=\"/contact-us\" class=\"download\">Contact Us</a>\n      </li>\n    </ul>\n\n    <ul class=\"list-unstyled components\">\n      <li class=\"list-unstyled components\">\n        <a href=\"/about-us\">About Us</a>\n      </li>\n      <li class=\"list-unstyled components\">\n        <a\n          href=\"#UniversityList\"\n          data-toggle=\"collapse\"\n          aria-expanded=\"false\"\n          class=\"dropdown-toggle\"\n          >University Profiles</a\n        >\n        <ul class=\"collapse list-unstyled\" id=\"UniversityList\">\n          <li *ngFor=\"let list of this.model.blogList\" style=\"text-align: center;\">\n            <span style=\"padding: 5px 0px; cursor: pointer;\" (click)=\"showUniversity(list, 'university')\">{{ list }}</span>\n            <i class=\"lni-trash\" [swal]=\"deleteSwal\" aria-hidden=\"false\"></i>\n            <swal #deleteSwal\n              title=\"Delete {{ list }}?\"\n              text=\"This cannot be undone\"\n              icon=\"question\"\n              [showCancelButton]=\"true\"\n              [focusCancel]=\"true\"\n              (confirm)=\"delete(list, 'university')\">\n            </swal>\n          </li>\n          <li class=\"add-blog\">\n            <button data-toggle=\"modal\" data-target=\"#add-blog\" (click)=\"contentType='university'\">\n              Add University\n            </button>\n          </li>\n        </ul>\n      </li>\n      <li class=\"list-unstyled components\">\n        <a href=\"../../courses/\">University Courses</a>\n      </li>\n      <li class=\"list-unstyled components\">\n        <a href=\"#blogsList\"\n        data-toggle=\"collapse\"\n        aria-expanded=\"false\"\n        class=\"dropdown-toggle\">Blogs</a>\n        <ul class=\"collapse list-unstyled\" id=\"blogsList\">\n          <li *ngFor=\"let list of this.blogModel.blogList\" style=\"text-align: center;\">\n            <span style=\"padding: 5px 0px; cursor: pointer;\" (click)=\"showBlog(list, 'blog')\">{{ list }}</span>\n            <i class=\"lni-trash\" [swal]=\"deleteSwal\" aria-hidden=\"false\"></i>\n            <swal #deleteSwal\n              title=\"Delete {{ list }}?\"\n              text=\"This cannot be undone\"\n              icon=\"question\"\n              [showCancelButton]=\"true\"\n              [focusCancel]=\"true\"\n              (confirm)=\"delete(list, 'blog')\">\n            </swal>\n          </li>\n          <li class=\"add-blog\">\n            <button data-toggle=\"modal\" data-target=\"#add-blog\" (click)=\"contentType='blog'\">\n              Add Blog\n            </button>\n          </li>\n        </ul>\n      </li>\n      <li>\n        <a\n          href=\"#newsEventsMenu\"\n          data-toggle=\"collapse\"\n          aria-expanded=\"false\"\n          class=\"dropdown-toggle\"\n          >News and Events</a\n        >\n        <ul class=\"collapse list-unstyled\" id=\"newsEventsMenu\">\n          <li><a href=\"../../news/\">News</a></li>\n          <li><a href=\"../../events/\">Events</a></li>\n        </ul>\n      </li>\n    </ul>\n  </nav>\n\n  <!-- Page Content  -->\n  <div id=\"content\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n      <div class=\"container-fluid\">\n        <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-toggler\">\n          <i class=\"fas fa-align-left\"></i>\n          <!-- <span>Toggle Sidebar</span> -->\n        </button>\n\n        <div class=\"ml-auto text-center\">\n          <img\n            src=\"./assets/images/si-logo.png\"\n            style=\"height: 50px; width: 130px;\"\n          />\n        </div>\n\n        <button\n          class=\"btn btn-dark d-inline-block d-lg-none ml-auto\"\n          type=\"button\"\n          data-toggle=\"collapse\"\n          data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\"\n          aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\"\n        >\n          <i class=\"fas fa-align-justify\"></i>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"nav navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link\"\n                href=\"https://api.whatsapp.com/send?phone=917050512345\"\n                text=\"Hello,%20I%20am%20looking%20to%20study%20in%20Ireland%20and%20want%20to%20know%20more%20about%20your%20services.%20Can%20we%20talk?\"\n              >\n                <i class=\"lni-whatsapp\"></i>\n                Send Message\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"tel:+917050512345\">\n                <i class=\"lni-phone-handset\"></i>\n                Call us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"../../contact-us/\">\n                <i class=\"lni-book\"></i>\n                Book a Free Consultation\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n\n    <div class=\"container\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"../../\">Home</a></li>\n          <li class=\"breadcrumb-item\">\n            <a href=\"../../universities/\">Universities</a>\n          </li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">\n            <a href=\"../../universities/athlone-institute-technology\"\n              >{{model.blogData.title}}</a\n            >\n          </li>\n        </ol>\n      </nav>\n      <label for=\"upload-image\" class=\"btn btn-info\">Add University Image</label>\n      <input\n        #file\n        id=\"upload-image\"\n        type=\"file\"\n        accept=\"image/*\"\n        (change)=\"preview(file.files)\"\n      />\n      <div class=\"university-landing-image\" style=\"width: 100%; height:340px\">\n        <img\n          class=\"img-fluid thumbnail-img\"\n          [src]=\"model.imgURL\"\n          *ngIf=\"model.imgURL\"\n        />\n      </div>\n\n      <div class=\"row col-12\">\n        <h3>\n          <input\n            type=\"input\"\n            [disabled]=\"active\"\n            [(ngModel)]=\"model.blogData.title\"\n            value=\"title\"\n            class=\"university-header\"\n          />\n        </h3>\n        <button class=\"edit-title\" (click)=\"editTitle()\">\n          <i class=\"fas fa-pencil-alt\"></i>\n        </button>\n      </div>\n      <div class=\"inner-section-spacing\">\n        <tag-input\n          [(ngModel)]=\"model.blogData.tags\"\n          (onAdd)=\"change($event)\"\n          (onRemove)=\"change($event)\"\n        >\n        </tag-input>\n      </div>\n\n      <ckeditor [editor]=\"Editor\" [(ngModel)]=\"model.data\"></ckeditor>\n      <button (click)=\"uploadPost()\" class=\"btn btn-primary\">Submit</button>\n      <button routerLink=\"/\" class=\"btn btn-primary\">Home</button>\n\n      <!-- Snackbar starts here -->\n      <div id=\"snackbar\">Saved!</div>\n      <!-- Snackbar ends here -->\n\n      <!-- Modal starts here -->\n\n      <div\n        class=\"modal fade\"\n        id=\"add-blog\"\n        tabindex=\"-1\"\n        role=\"dialog\"\n        aria-labelledby=\"exampleModalCenterTitle\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\"> Title</h5>\n              <button\n                type=\"button\"\n                class=\"close\"\n                data-dismiss=\"modal\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <input\n                class=\"modal-input\"\n                type=\"text\"\n                [(ngModel)]=\"blogTitle\"\n                placeholder=\"Enter Blog name here\"\n              />\n            </div>\n            <div class=\"modal-footer\">\n              <button\n                type=\"button\"\n                class=\"btn btn-outline-secondary\"\n                data-dismiss=\"modal\"\n              >\n                Cancel\n              </button>\n              <button\n                type=\"button\"\n                class=\"btn btn-primary\"\n                (click)=\"createBlog(blogTitle, contentType)\"\n                data-dismiss=\"modal\"\n              >\n                Create\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Modal ends here -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_university_university_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/university/university.component */ "./src/app/university/university.component.ts");





var routes = [
    {
        path: 'publish',
        component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: '',
        component: _app_university_university_component__WEBPACK_IMPORTED_MODULE_4__["UniversityComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'si-website-generator';
        // this._electronService.ipcRenderer.on('messageFromService', (event) => {
        //   console.log(event);
        // });
    }
    AppComponent.prototype.fileAccess = function () {
        // if(this._electronService.isElectronApp){
        //   this._electronService.ipcRenderer.send('openModal', 'abc');   
        // }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm5/ngx-chips.js");
/* harmony import */ var _university_university_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./university/university.component */ "./src/app/university/university.component.ts");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm5/sweetalert2-ngx-sweetalert2.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _university_university_component__WEBPACK_IMPORTED_MODULE_12__["UniversityComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"],
                ngx_electron__WEBPACK_IMPORTED_MODULE_10__["NgxElectronModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_11__["TagInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__["SweetAlert2Module"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.commit = function () {
        console.log(this.msg);
        // if(this._electronService.isElectronApp){
        //   this._electronService.ipcRenderer.sendSync('commit', this.msg)
        // }
        this.http.post('http://localhost:5000/commit', { message: this.msg })
            .toPromise().then(function (res) {
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/university/university.component.scss":
/*!******************************************************!*\
  !*** ./src/app/university/university.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  display: inline;\n}\n\n.edit-title {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding-left: 20px;\n}\n\n.add-blog {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #6D7FCF;\n}\n\n.add-blog button {\n  width: 80%;\n  background: white;\n  border: none;\n  border-radius: 15px;\n  padding: 5px;\n}\n\n.modal-input {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid gray;\n}\n\n.thumbnail-img {\n  display: block;\n  margin: 0 auto;\n  height: 100%;\n}\n\n.university-header {\n  margin: 20 0 0;\n  border-radius: 5px;\n  border: 1px solid;\n  padding: 5px;\n}\n\n:focus {\n  outline: none !important;\n}\n\nlabel {\n  cursor: pointer;\n  /* Style as you please, it will become the visible UI component. */\n}\n\n#upload-image {\n  display: none;\n}\n\n/* The snackbar - position it at the bottom and in the middle of the screen */\n\n#snackbar {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */\n}\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n\n#snackbar.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n/* Animations to fade the snackbar in and out */\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhZ2FyL0Rlc2t0b3AvUGVyc29uYWwvcmViYXNlLXByb2plY3RzL3N0dWR5LWluLWlyZWxhbmQtd2Vic2l0ZS1nZW5lcmF0b3IvYW5ndWxhci13ZWJzaXRlL3NpLXdlYnNpdGUtZ2VuZXJhdG9yL3NyYy9hcHAvdW5pdmVyc2l0eS91bml2ZXJzaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91bml2ZXJzaXR5L3VuaXZlcnNpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREZJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0lSOztBRERBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNLSjs7QURIQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ01GOztBREpBO0VBQ0Usd0JBQUE7QUNPRjs7QURIQTtFQUNHLGVBQUE7RUFDQSxrRUFBQTtBQ01IOztBREhBO0VBSUksYUFBQTtBQ0dKOztBREdBLDZFQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFBb0Isd0NBQUE7RUFDcEIsZ0JBQUE7RUFBa0IsZ0NBQUE7RUFDbEIsbUJBQUE7RUFBcUIsbUNBQUE7RUFDckIsc0JBQUE7RUFBd0IsMkJBQUE7RUFDeEIsV0FBQTtFQUFhLHFCQUFBO0VBQ2Isa0JBQUE7RUFBb0Isa0JBQUE7RUFDcEIsa0JBQUE7RUFBb0Isb0JBQUE7RUFDcEIsYUFBQTtFQUFlLFlBQUE7RUFDZixlQUFBO0VBQWlCLDZCQUFBO0VBQ2pCLFVBQUE7RUFBWSw0QkFBQTtFQUNaLFNBQUE7RUFBVyx3QkFBQTtFQUNYLFlBQUE7RUFBYyx5QkFBQTtBQ1lsQjs7QURURSw4RUFBQTs7QUFDQTtFQUNFLG1CQUFBO0VBQXFCLHNCQUFBO0VBQ3JCO3VEQUFBO0VBRUEsaURBQUE7RUFDQSx5Q0FBQTtBQ2FKOztBRFZFLCtDQUFBOztBQUNBO0VBQ0U7SUFBTSxTQUFBO0lBQVcsVUFBQTtFQ2VuQjtFRGRFO0lBQUksWUFBQTtJQUFjLFVBQUE7RUNrQnBCO0FBQ0Y7O0FEaEJFO0VBQ0U7SUFBTSxTQUFBO0lBQVcsVUFBQTtFQ29CbkI7RURuQkU7SUFBSSxZQUFBO0lBQWMsVUFBQTtFQ3VCcEI7QUFDRjs7QURyQkU7RUFDRTtJQUFNLFlBQUE7SUFBYyxVQUFBO0VDeUJ0QjtFRHhCRTtJQUFJLFNBQUE7SUFBVyxVQUFBO0VDNEJqQjtBQUNGOztBRDFCRTtFQUNFO0lBQU0sWUFBQTtJQUFjLFVBQUE7RUM4QnRCO0VEN0JFO0lBQUksU0FBQTtJQUFXLFVBQUE7RUNpQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91bml2ZXJzaXR5L3VuaXZlcnNpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmVkaXQtdGl0bGV7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uYWRkLWJsb2d7XG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICM2RDdGQ0Y7XG4gICAgYnV0dG9ue1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxufVxuLm1vZGFsLWlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cbi50aHVtYm5haWwtaW1ne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi51bml2ZXJzaXR5LWhlYWRlcntcbiAgbWFyZ2luOiAyMCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cbjpmb2N1c3tcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgaW1hZ2UgYnV0dG9uIHN0eWxlLS0tLS0tLS0tLS0tLS0tLS1cbmxhYmVsIHtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIC8qIFN0eWxlIGFzIHlvdSBwbGVhc2UsIGl0IHdpbGwgYmVjb21lIHRoZSB2aXNpYmxlIFVJIGNvbXBvbmVudC4gKi9cbn1cblxuI3VwbG9hZC1pbWFnZSB7XG4vLyAgICBvcGFjaXR5OiAwO1xuLy8gICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgei1pbmRleDogLTE7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS1hZGQgaW1hZ2UgYnV0dG9uIHN0eWxlIGVuZHNcblxuLy8gU25hY2tiYXIgc3R5bGUtLS0tLS0tLS0tLS0tLS0tLS0tXG4vKiBUaGUgc25hY2tiYXIgLSBwb3NpdGlvbiBpdCBhdCB0aGUgYm90dG9tIGFuZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4gKi9cbiNzbmFja2JhciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBIaWRkZW4gYnkgZGVmYXVsdC4gVmlzaWJsZSBvbiBjbGljayAqL1xuICAgIG1pbi13aWR0aDogMjUwcHg7IC8qIFNldCBhIGRlZmF1bHQgbWluaW11bSB3aWR0aCAqL1xuICAgIG1hcmdpbi1sZWZ0OiAtMTI1cHg7IC8qIERpdmlkZSB2YWx1ZSBvZiBtaW4td2lkdGggYnkgMiAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIEJsYWNrIGJhY2tncm91bmQgY29sb3IgKi9cbiAgICBjb2xvcjogI2ZmZjsgLyogV2hpdGUgdGV4dCBjb2xvciAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyZWQgdGV4dCAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgLyogUm91bmRlZCBib3JkZXJzICovXG4gICAgcGFkZGluZzogMTZweDsgLyogUGFkZGluZyAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgc2NyZWVuICovXG4gICAgei1pbmRleDogMTsgLyogQWRkIGEgei1pbmRleCBpZiBuZWVkZWQgKi9cbiAgICBsZWZ0OiA1MCU7IC8qIENlbnRlciB0aGUgc25hY2tiYXIgKi9cbiAgICBib3R0b206IDMwcHg7IC8qIDMwcHggZnJvbSB0aGUgYm90dG9tICovXG4gIH1cbiAgXG4gIC8qIFNob3cgdGhlIHNuYWNrYmFyIHdoZW4gY2xpY2tpbmcgb24gYSBidXR0b24gKGNsYXNzIGFkZGVkIHdpdGggSmF2YVNjcmlwdCkgKi9cbiAgI3NuYWNrYmFyLnNob3cge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7IC8qIFNob3cgdGhlIHNuYWNrYmFyICovXG4gICAgLyogQWRkIGFuaW1hdGlvbjogVGFrZSAwLjUgc2Vjb25kcyB0byBmYWRlIGluIGFuZCBvdXQgdGhlIHNuYWNrYmFyLlxuICAgIEhvd2V2ZXIsIGRlbGF5IHRoZSBmYWRlIG91dCBwcm9jZXNzIGZvciAyLjUgc2Vjb25kcyAqL1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG4gIH1cbiAgXG4gIC8qIEFuaW1hdGlvbnMgdG8gZmFkZSB0aGUgc25hY2tiYXIgaW4gYW5kIG91dCAqL1xuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxuICAgIHRvIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cbiAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgIGZyb20ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XG4gICAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cbiAgICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cbiAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNuYWNrYmFyIHN0eWxlIGVuZHMiLCJzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uZWRpdC10aXRsZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uYWRkLWJsb2cge1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjNkQ3RkNGO1xufVxuLmFkZC1ibG9nIGJ1dHRvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm1vZGFsLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG4udGh1bWJuYWlsLWltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udW5pdmVyc2l0eS1oZWFkZXIge1xuICBtYXJnaW46IDIwIDAgMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiBTdHlsZSBhcyB5b3UgcGxlYXNlLCBpdCB3aWxsIGJlY29tZSB0aGUgdmlzaWJsZSBVSSBjb21wb25lbnQuICovXG59XG5cbiN1cGxvYWQtaW1hZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBUaGUgc25hY2tiYXIgLSBwb3NpdGlvbiBpdCBhdCB0aGUgYm90dG9tIGFuZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4gKi9cbiNzbmFja2JhciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQuIFZpc2libGUgb24gY2xpY2sgKi9cbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgLyogU2V0IGEgZGVmYXVsdCBtaW5pbXVtIHdpZHRoICovXG4gIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XG4gIC8qIERpdmlkZSB2YWx1ZSBvZiBtaW4td2lkdGggYnkgMiAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIGNvbG9yICovXG4gIGNvbG9yOiAjZmZmO1xuICAvKiBXaGl0ZSB0ZXh0IGNvbG9yICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogQ2VudGVyZWQgdGV4dCAqL1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIC8qIFJvdW5kZWQgYm9yZGVycyAqL1xuICBwYWRkaW5nOiAxNnB4O1xuICAvKiBQYWRkaW5nICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU2l0IG9uIHRvcCBvZiB0aGUgc2NyZWVuICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIEFkZCBhIHotaW5kZXggaWYgbmVlZGVkICovXG4gIGxlZnQ6IDUwJTtcbiAgLyogQ2VudGVyIHRoZSBzbmFja2JhciAqL1xuICBib3R0b206IDMwcHg7XG4gIC8qIDMwcHggZnJvbSB0aGUgYm90dG9tICovXG59XG5cbi8qIFNob3cgdGhlIHNuYWNrYmFyIHdoZW4gY2xpY2tpbmcgb24gYSBidXR0b24gKGNsYXNzIGFkZGVkIHdpdGggSmF2YVNjcmlwdCkgKi9cbiNzbmFja2Jhci5zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLyogU2hvdyB0aGUgc25hY2tiYXIgKi9cbiAgLyogQWRkIGFuaW1hdGlvbjogVGFrZSAwLjUgc2Vjb25kcyB0byBmYWRlIGluIGFuZCBvdXQgdGhlIHNuYWNrYmFyLlxuICBIb3dldmVyLCBkZWxheSB0aGUgZmFkZSBvdXQgcHJvY2VzcyBmb3IgMi41IHNlY29uZHMgKi9cbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG59XG5cbi8qIEFuaW1hdGlvbnMgdG8gZmFkZSB0aGUgc25hY2tiYXIgaW4gYW5kIG91dCAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIGJvdHRvbTogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBib3R0b206IDMwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBib3R0b206IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICBmcm9tIHtcbiAgICBib3R0b206IDMwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/university/university.component.ts":
/*!****************************************************!*\
  !*** ./src/app/university/university.component.ts ***!
  \****************************************************/
/*! exports provided: UniversityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityComponent", function() { return UniversityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ckeditor_ckeditor5_build_inline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-inline */ "./node_modules/@ckeditor/ckeditor5-build-inline/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_inline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_inline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
// import {ElectronService} from 'ngx-electron';

var UniversityComponent = /** @class */ (function () {
    function UniversityComponent(http) {
        var _this = this;
        this.http = http;
        this.Editor = _ckeditor_ckeditor5_build_inline__WEBPACK_IMPORTED_MODULE_1__;
        this.active = true;
        this.model = {
            data: null,
            blogList: [],
            currentBlog: null,
            imgURL: null,
            blogData: {
                title: null,
                tags: []
            }
        };
        this.blogModel = {
            data: null,
            blogList: [],
            currentBlog: null,
            imgURL: null,
            blogData: {
                title: null,
                tags: []
            }
        };
        this.http
            .get("http://localhost:5000/fetch-list")
            .toPromise()
            .then(function (res) {
            _this.model.blogList = res.universityList;
            _this.blogModel.blogList = res.blogList;
        });
    }
    UniversityComponent.prototype.editTitle = function () {
        this.active = !this.active;
    };
    // overwriting particular blog file after button click
    UniversityComponent.prototype.uploadPost = function () {
        var _this = this;
        if (this.contentType === "university") {
            this.http
                .post("http://localhost:5000/upload", this.model)
                .toPromise()
                .then(function (res) {
                _this.http
                    .get("http://localhost:5000/fetch-list")
                    .toPromise()
                    .then(function (res) {
                    _this.model.blogList = res.universityList;
                    _this.blogModel.blogList = res.blogList;
                });
            });
        }
        else {
            this.http
                .post("http://localhost:5000/upload-blog", this.model)
                .toPromise()
                .then(function (res) {
                _this.http
                    .get("http://localhost:5000/fetch-list")
                    .toPromise()
                    .then(function (res) {
                    _this.model.blogList = res.universityList;
                    _this.blogModel.blogList = res.blogList;
                });
            });
        }
    };
    // display particular blog data
    UniversityComponent.prototype.showUniversity = function (list, type) {
        var _this = this;
        this.contentType = type;
        this.model.currentBlog = list;
        this.http
            .post("http://localhost:5000/fetch-university", this.model)
            .toPromise()
            .then(function (res) {
            _this.model.data = res.data;
            _this.model.blogData = res.blogData;
            _this.model.blogList = res.blogList;
            _this.model.imgURL = res.imgURL;
        });
    };
    UniversityComponent.prototype.showBlog = function (list, type) {
        var _this = this;
        this.contentType = type;
        this.model.currentBlog = list;
        this.http
            .post("http://localhost:5000/fetch-blogs", this.model)
            .toPromise()
            .then(function (res) {
            _this.model.data = res.data;
            _this.model.blogData = res.blogData;
            _this.blogModel.blogList = res.blogList;
            _this.model.imgURL = res.imgURL;
        });
    };
    UniversityComponent.prototype.delete = function (list, type) {
        var _this = this;
        console.log(list, type);
        this.http
            .post("http://localhost:5000/delete", { title: list, type: type })
            .toPromise()
            .then(function (res) {
            console.log(res);
            _this.http
                .get("http://localhost:5000/fetch-list")
                .toPromise()
                .then(function (res) {
                _this.model.blogList = res.universityList;
                _this.blogModel.blogList = res.blogList;
            });
        });
    };
    UniversityComponent.prototype.createBlog = function (blogName, type) {
        var _this = this;
        this.http
            .post("http://localhost:5000/create", { title: blogName, type: type })
            .toPromise()
            .then(function (res) {
            console.log(res);
            _this.http
                .get("http://localhost:5000/fetch-list")
                .toPromise()
                .then(function (res) {
                _this.model.blogList = res.universityList;
                _this.blogModel.blogList = res.blogList;
            });
        });
    };
    UniversityComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.model.imgURL = reader.result;
        };
    };
    UniversityComponent.prototype.launchSnackBar = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    UniversityComponent.prototype.ngOnInit = function () { };
    UniversityComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    UniversityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-university",
            template: __webpack_require__(/*! raw-loader!./university.component.html */ "./node_modules/raw-loader/index.js!./src/app/university/university.component.html"),
            styles: [__webpack_require__(/*! ./university.component.scss */ "./src/app/university/university.component.scss")]
        })
    ], UniversityComponent);
    return UniversityComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sagar/Desktop/Personal/rebase-projects/study-in-ireland-website-generator/angular-website/si-website-generator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map