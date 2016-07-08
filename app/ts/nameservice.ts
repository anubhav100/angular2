import {Json} from "angular2/src/facade/lang";
export class NameService {
    items:Array<any>;

    constructor() {
        this.items = [
            {name: 'Christoph Burgdorf', degree: 'mca'},
            {name: 'Pascal Precht', degree: 'mca'},
            {name: 'thoughtram', degree: 'mca'},
            {name: 'anubhav', degree: 'mca'},
            {name: 'deepak', degree: 'mca'},
            {name: 'akshay', degree: 'mca'}
        ];
    }

    getNames() {
        return this.items
    }


}