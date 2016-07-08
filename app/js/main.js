System.register(['angular2/platform/browser', './app.component', "./nameservice"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, nameservice_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (nameservice_1_1) {
                nameservice_1 = nameservice_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [nameservice_1.NameService]);
        }
    }
});
//# sourceMappingURL=main.js.map