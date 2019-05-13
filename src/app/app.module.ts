import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {DataChangeObjectService} from './Services/data-change-object.service';
import { HallsComponent } from './components/halls/halls.component';
import { PriceComponent } from './Components/price/price.component';
import { SeatComponent } from './Components/seat/seat.component';


@NgModule({
  declarations: [
    AppComponent,
    HallsComponent,
    PriceComponent,
    SeatComponent
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [DataChangeObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
