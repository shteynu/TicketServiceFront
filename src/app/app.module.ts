import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {DataChangeObjectService} from './Services/data-change-object.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [DataChangeObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
