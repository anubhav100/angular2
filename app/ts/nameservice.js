"use strict";
var NameService = (function () {
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
exports.NameService = NameService;
//# sourceMappingURL=nameservice.js.map