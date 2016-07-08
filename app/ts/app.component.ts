import {Component} from "angular2/core";
import {NameService} from "./nameservice";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/namelist.component.html',
    Inputs: ['newnames']
})


export class AppComponent {

    newitems:Array<any>;

    constructor(nameservice:NameService) {
        this.newitems = nameservice.getNames();


    }
    
}
