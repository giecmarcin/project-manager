import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import {AppComponent} from './app.component';
import {PersonAddComponent} from './person-add/person-add.component';
import {PersonService} from "./person.service";
import {CONFIG, Config} from "./model/config";
import { PersonBrowserComponent } from './person-browser/person-browser.component';
// import {ToastrModule} from 'ngx-toastr'

const config: Config = {
  apiUrl: 'http://localhost:8080/api'
};

@NgModule({
  declarations: [
    AppComponent,
    PersonAddComponent,
    PersonBrowserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // ToastrModule.forRoot(),
  ],
  providers: [
    {provide: PersonService, useClass:PersonService},
    {provide: CONFIG, useValue:config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
