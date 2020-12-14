function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/Lhg":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("fXoL"),o=n("qXBG"),i=n("tyNb"),a=n("ofXK");function c(e,t){1&e&&(r.Rb(0,"li",11),r.Rb(1,"a",18),r.Fc(2,"Log in"),r.Qb(),r.Qb())}function s(e,t){1&e&&(r.Rb(0,"li",19),r.Rb(1,"a",20),r.Rb(2,"span"),r.Fc(3,"Get Started"),r.Qb(),r.Qb(),r.Qb())}function u(e,t){if(1&e){var n=r.Sb();r.Rb(0,"li",21),r.Rb(1,"a",22),r.Nb(2,"i",23),r.Qb(),r.Rb(3,"div",24),r.Rb(4,"a",25),r.Fc(5,"Settings"),r.Qb(),r.Rb(6,"a",26),r.Fc(7,"Learning Preferences"),r.Qb(),r.Nb(8,"div",27),r.Rb(9,"a",28),r.Fc(10,"Help or Questions"),r.Qb(),r.Rb(11,"a",29),r.dc("click",(function(){return r.xc(n),r.hc().logout()})),r.Fc(12,"Log Out"),r.Qb(),r.Qb(),r.Qb()}}var l=function(){var e=function(){function e(t,n,r){_classCallCheck(this,e),this.authService=t,this.router=n,this.route=r,this.isAuthenticated=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.userSub=this.authService.userSubject.subscribe((function(t){e.isAuthenticated=!!t}))}},{key:"ngOnDestroy",value:function(){this.userSub.unsubscribe()}},{key:"logout",value:function(){this.authService.logout()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Mb(o.a),r.Mb(i.b),r.Mb(i.a))},e.\u0275cmp=r.Gb({type:e,selectors:[["app-header"]],decls:22,vars:3,consts:[[1,"main-header__top"],[1,"navbar","navbar-expand-lg","navbar-light","bg-transparent"],[1,"container"],["href","#",1,"navbar-brand"],["clip-rule","evenodd","fill-rule","evenodd","height","24","width","24","xmlns","http://www.w3.org/2000/svg"],["d","M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z",1,"fill-primary"],[1,"logo-text"],["aria-controls","navbarTogglerDemo02","aria-expanded","false","aria-label","Toggle navigation","data-target","#navbarTogglerDemo02","data-toggle","collapse","type","button",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarTogglerDemo02",1,"collapse","navbar-collapse","navItemContainer"],[1,"navbar-nav","mr-auto","mt-2","mt-lg-0"],[1,"nav-item","nav-border"],["href","#",1,"nav-link"],["routerLink","/home/tutors",1,"nav-link"],[1,"navbar-nav","mt-2","mt-lg-0"],["class","nav-item nav-border",4,"ngIf"],["class","nav-item register-header-btn",4,"ngIf"],["class","nav-item dropdown",4,"ngIf"],["routerLink","/auth/identify",1,"nav-link"],[1,"nav-item","register-header-btn"],["routerLink","/auth/register/student",1,"btn","btn-md","btn-primary"],[1,"nav-item","dropdown"],["href","#","id","userAvatarDropdown","role","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"fa","fa-user-circle","avatar"],["aria-labelledby","userAvatarDropdown",1,"dropdown-menu","dropdown-menu-arrow","dropdown-menu-right"],["routerLink","/me/settings",1,"dropdown-item"],["routerLink","/me/preferences/subjects",1,"dropdown-item"],[1,"dropdown-divider"],["href","#",1,"dropdown-item"],[1,"dropdown-item",3,"click"]],template:function(e,t){1&e&&(r.Rb(0,"div",0),r.Rb(1,"nav",1),r.Rb(2,"div",2),r.Rb(3,"a",3),r.gc(),r.Rb(4,"svg",4),r.Nb(5,"path",5),r.Qb(),r.fc(),r.Rb(6,"span",6),r.Fc(7,"tutor.find"),r.Qb(),r.Qb(),r.Rb(8,"button",7),r.Nb(9,"span",8),r.Qb(),r.Rb(10,"div",9),r.Rb(11,"ul",10),r.Rb(12,"li",11),r.Rb(13,"a",12),r.Fc(14,"How does it work?"),r.Qb(),r.Qb(),r.Rb(15,"li",11),r.Rb(16,"a",13),r.Fc(17,"For Tutors"),r.Qb(),r.Qb(),r.Qb(),r.Rb(18,"ul",14),r.Dc(19,c,3,0,"li",15),r.Dc(20,s,4,0,"li",16),r.Dc(21,u,13,0,"li",17),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&e&&(r.zb(19),r.nc("ngIf",!t.isAuthenticated),r.zb(1),r.nc("ngIf",!t.isAuthenticated),r.zb(1),r.nc("ngIf",t.isAuthenticated))},directives:[i.c,a.l],styles:['.main-header__top[_ngcontent-%COMP%]{font-size:.9375rem;background-color:#fff}.navbar[_ngcontent-%COMP%]{height:60px}.logo-text[_ngcontent-%COMP%]{color:var(--primary-color);font-family:Proxima Nova,sans-serif;font-weight:600;margin-left:10px}@media (min-width:992px){.navItemContainer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:40px}}.navItemContainer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-weight:600;-webkit-font-smoothing:antialiased}.nav-item[_ngcontent-%COMP%]{margin-left:20px}.nav-link[_ngcontent-%COMP%]{color:var(--body-color)!important}.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{border-top:4px solid transparent}.navbar[_ngcontent-%COMP%]   .nav-border[_ngcontent-%COMP%]:hover{border-top:4px solid #ff5c51}.register-header-btn[_ngcontent-%COMP%]{line-height:inherit}.register-header-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:11px 20px}.avatar[_ngcontent-%COMP%]{font-size:1.5em;padding-top:15px}.dropdown-menu-arrow[_ngcontent-%COMP%]:before{content:"";right:1rem;position:absolute;bottom:96%;z-index:-5;width:15px;height:15px;background:#fff;border-left:var(--dropdown-border-width) var(--dropdown-border-color);border-top:var(--dropdown-border-width) var(--dropdown-border-color);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg)}.dropdown-menu[_ngcontent-%COMP%]{top:88%;line-height:24px}a.dropdown-item[_ngcontent-%COMP%]{color:#83878a}a.dropdown-item[_ngcontent-%COMP%]:hover{background-color:#f5f5f5;color:var(--body-color);box-shadow:none}']}),e}()},"1y2q":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("fXoL"),o=n("tk/3"),i=n("qXBG"),a=n("qt/+"),c=function(){var e=function(){function e(t,n,r){_classCallCheck(this,e),this.http=t,this.authService=n,this.contentService=r,this.currentStep=1}return _createClass(e,[{key:"setCurrentStep",value:function(e){this.currentStep=e}},{key:"getCurrentStep",value:function(){return this.currentStep}},{key:"getProfile",value:function(){return this.profile}},{key:"updateProfile",value:function(e){this.profile||this.initializeProfile(),Object.assign(this.profile,e),console.log(this.profile)}},{key:"createProfile",value:function(){this.authService.createUser(this.profile)}},{key:"initializeProfile",value:function(){this.profile=this.authService.userSubject.getValue(),this.profile.audiences=[],this.profile.teachingLanguages=[],this.profile.teachingLocations=[]}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Zb(o.b),r.Zb(i.a),r.Zb(a.a))},e.\u0275prov=r.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},"4xY8":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("fXoL"),o=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Gb({type:e,selectors:[["app-tf-spinner"]],decls:3,vars:0,consts:[["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(e,t){1&e&&(r.Rb(0,"div",0),r.Rb(1,"span",1),r.Fc(2,"Loading..."),r.Qb(),r.Qb())},styles:[".spinner-border[_ngcontent-%COMP%]{height:3rem;width:3rem;color:var(--primary-color)}"]}),e}()},OTRh:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("fXoL"),o=function(){var e=function(){function e(t){_classCallCheck(this,e),this.el=t,this.navigationKeys=["Backspace","Delete","Tab","Escape","Enter","Home","End","ArrowLeft","ArrowRight","Clear","Copy","Paste"],this.inputEl=t.nativeElement}return _createClass(e,[{key:"onKeyDown",value:function(e){this.navigationKeys.indexOf(e.key)>-1||"a"===e.key&&!0===e.ctrlKey||"c"===e.key&&!0===e.ctrlKey||"v"===e.key&&!0===e.ctrlKey||"x"===e.key&&!0===e.ctrlKey||"a"===e.key&&!0===e.metaKey||"c"===e.key&&!0===e.metaKey||"v"===e.key&&!0===e.metaKey||"x"===e.key&&!0===e.metaKey||(" "===e.key||isNaN(Number(e.key)))&&e.preventDefault()}},{key:"onPaste",value:function(e){var t=e.clipboardData.getData("text/plain");this.pasteData(t),e.preventDefault()}},{key:"pasteData",value:function(e){var t=this.sanitizeInput(e);if(!document.execCommand("insertText",!1,t)){var n=this.inputEl,r=n.selectionStart,o=n.selectionEnd;this.inputEl.setRangeText(t,r,o,"end")}}},{key:"sanitizeInput",value:function(e){return e.replace(/[^0-9]/g,"")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Mb(r.l))},e.\u0275dir=r.Hb({type:e,selectors:[["","appNumberOnly",""]],hostBindings:function(e,t){1&e&&r.dc("keydown",(function(e){return t.onKeyDown(e)}))("paste",(function(e){return t.onPaste(e)}))}}),e}()},THq9:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("fXoL"),o=n("3Pt+"),i=n("ofXK"),a=n("OTRh"),c=["otpInput"];function s(e,t){if(1&e){var n=r.Sb();r.Pb(0),r.Rb(1,"input",5,6),r.dc("keyup",(function(e){r.xc(n);var o=t.index;return r.hc().onOtpInput(e,o)}))("focus",(function(e){return r.xc(n),r.hc().onFocus(e)})),r.Qb(),r.Ob()}if(2&e){var o=t.index;r.zb(1),r.nc("formControlName",o)}}var u=function(){var e=function(){function e(){_classCallCheck(this,e),this.login=new r.n,this.resendOtp=new r.n,this.resetOtp=!0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=[1,2,3,4].map((function(e){return new o.f("",[o.w.required,o.w.maxLength(1)])}));this.otpForm=new o.h({otp:new o.c(e)})}},{key:"onOtpInput",value:function(e,t){this.otpForm.invalid?"Backspace"!==e.key&&t!==this.otpInputs.length-1&&this.otpInputs.find((function(e,n){return n===t+1})).nativeElement.focus():this.login.emit(this.otp.value.join(""))}},{key:"onResendOtp",value:function(){this.resendOtp.emit(null)}},{key:"onFocus",value:function(e){this.resetOtp&&(this.otpForm.reset(),this.otpInputs.first.nativeElement.focus(),this.resetOtp=!1)}},{key:"otp",get:function(){return this.otpForm.get("otp")}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Gb({type:e,selectors:[["app-tf-otp-input"]],viewQuery:function(e,t){var n;1&e&&r.Jc(c,!0,r.l),2&e&&r.uc(n=r.ec())&&(t.otpInputs=n)},inputs:{source:"source",isPhoneValid:"isPhoneValid",canResend:"canResend"},outputs:{login:"login",resendOtp:"resendOtp"},decls:9,vars:3,consts:[[1,"otp-input-container",3,"formGroup"],["formArrayName","otp",1,"input-group","mb-4"],[4,"ngFor","ngForOf"],[1,"resend-otp-text"],[1,"underline","primary",3,"click"],["maxlength","1","appNumberOnly","","autocomplete","off","required","","type","text",1,"form-control",3,"formControlName","keyup","focus"],["otpInput",""]],template:function(e,t){1&e&&(r.Rb(0,"div",0),r.Rb(1,"p"),r.Fc(2),r.Qb(),r.Rb(3,"div",1),r.Dc(4,s,3,1,"ng-container",2),r.Qb(),r.Rb(5,"p",3),r.Fc(6," Didn't get a code? "),r.Rb(7,"a",4),r.dc("click",(function(){return t.onResendOtp()})),r.Fc(8,"Resend"),r.Qb(),r.Qb(),r.Qb()),2&e&&(r.nc("formGroup",t.otpForm),r.zb(2),r.Hc("Please enter the 4 digit code send to ",t.source,""),r.zb(2),r.nc("ngForOf",t.otp.controls))},directives:[o.p,o.i,o.d,i.k,o.b,o.l,a.a,o.u,o.o,o.g],styles:[".otp-input-container[_ngcontent-%COMP%]{text-align:center;padding-left:10px}.otp-input-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#83878a;font-size:14px}.otp-input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:3px;text-align:center;font-size:16px;margin-right:10px}.resend-otp-text[_ngcontent-%COMP%]{font-size:smaller}"]}),e}()},"Tx//":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("ofXK"),o=n("tyNb"),i=n("fXoL"),a=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},imports:[[r.c,o.d]]}),e}()},fvWj:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("vkgz"),o=n("fXoL"),i=n("tk/3"),a=n("qXBG"),c=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.http=t,this.authService=n}return _createClass(e,[{key:"updateUser",value:function(e){this.authService.createUser(e)}},{key:"phoneOtp",value:function(e){return this.http.post("/api/users/phoneotp",e)}},{key:"changePhone",value:function(e){var t=this;return this.http.put("/api/auth/phone",e).pipe(Object(r.a)((function(e){return t.authService.createUser(e)})))}},{key:"emailOtp",value:function(e){return this.http.post("/api/users/emailotp",e)}},{key:"changeEmail",value:function(e){var t=this;return this.http.put("/api/users/email",e).pipe(Object(r.a)((function(e){return t.authService.createUser(e)})))}},{key:"deleteUser",value:function(){var e=this;return this.http.delete("/api/users/").pipe(Object(r.a)((function(t){e.authService.deleteUser(t)})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Zb(i.b),o.Zb(a.a))},e.\u0275prov=o.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},"qt/+":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("LRne"),o=n("vkgz"),i=n("coIc"),a=n("fXoL"),c=n("tk/3"),s=function(){var e=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"getCategories",value:function(){var e=this;return Array.isArray(this.categories)&&this.categories.length?Object(r.a)(this.categories):this.http.get("assets/subjects.json").pipe(Object(o.a)((function(t){return e.setCategoriesInMemory(t)})))}},{key:"getTeachingLocations",value:function(){var e=[];return e.push({value:i.g.MY_HOME,selected:!1},{value:i.g.STUDENT_HOME,selected:!1},{value:i.g.ONLINE,selected:!1}),e}},{key:"getLanguages",value:function(){var e=[];return e.push({value:i.e.EN,selected:!1},{value:i.e.HI,selected:!1}),e}},{key:"getAudience",value:function(){var e=[];return e.push({value:i.b.ONE_TO_FIVE,selected:!1},{value:i.b.SIX_TO_EIGHT,selected:!1},{value:i.b.NINE_TO_TEN,selected:!1},{value:i.b.ELEVEN_TO_TWELVE,selected:!1},{value:i.b.OTHER,selected:!1}),e}},{key:"getEducationDegrees",value:function(){var e=[];return e.push({label:"Secondary(10th)",value:"secondary"},{label:"Higher Secondary(12th)",value:"higher-secondary"},{label:"Bachelors",value:"bachelors"},{label:"Masters",value:"masters"},{label:"Others",value:"other"}),e}},{key:"setCategoriesInMemory",value:function(e){this.categories=e}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Zb(c.b))},e.\u0275prov=a.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);