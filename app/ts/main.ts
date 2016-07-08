import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {NameService} from "./nameservice";

bootstrap(AppComponent, [NameService]);
