System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NameService;
    return {
        setters:[],
        execute: function() {
            NameService = (function () {
                function NameService() {
                    this.items = [
                        { name: 'Christoph Burgdorf', degree: 'mca' },
                        { name: 'Pascal Precht', degree: 'mca' },
                        { name: 'thoughtram', degree: 'mca' },
                        { name: 'anubhav', degree: 'mca' },
                        { name: 'deepak', degree: 'mca' },
                        { name: 'akshay', degree: 'mca' }
                    ];
                }
                NameService.prototype.getNames = function () {
                    return this.items;
                };
                return NameService;
            }());
            exports_1("NameService", NameService);
        }
    }
});
//# sourceMappingURL=nameservice.js.map