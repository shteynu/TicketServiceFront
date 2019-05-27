import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HallsComponent } from './components/halls/halls.component';
import { EventsComponent } from './components/events/events.component';
import { AdminComponent } from './components/admin/admin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatTabsModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HallsComponent,
    EventsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
