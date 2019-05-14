import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataChangeObjectService} from './Services/data-change-object.service';
import { HallsComponent } from './components/halls/halls.component';
import { PriceComponent } from './Components/price/price.component';
import { SeatComponent } from './Components/seat/seat.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatDesighModule} from './Modules/mat-desigh/mat-desigh.module';
import {HttpService} from './Services/http.service';
import {UrlsService} from './Services/urls.service';


@NgModule({
  declarations: [
    AppComponent,
    HallsComponent,
    PriceComponent,
    SeatComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, HttpClientModule, MatDesighModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [DataChangeObjectService, HttpService,
    UrlsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
