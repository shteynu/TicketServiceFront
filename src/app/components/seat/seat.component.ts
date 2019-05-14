import { Component, OnInit, OnDestroy } from '@angular/core';
import {DataChangeObjectService} from '../../Services/data-change-object.service';
import {Subscription} from 'rxjs';
import {HttpService} from '../../Services/http.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit, OnDestroy {

  number = this.dataExchange.getSeatNumber();
  row = this.dataExchange.getRowNumber();
  price = this.dataExchange.getPrice();
  selected;
  reserved;
  reservedSubscription: Subscription;

  constructor(private dataExchange: DataChangeObjectService,
              private http: HttpService) { }

  ngOnInit() {
    this.number = 0;
    this.selected = false;
    this.reserved = false;
    this.sendReservedInfo(this.number, this.row);
  }

  toggleColor() {
    this.selected = !this.selected;
    this.dataExchange.setSeatNumberSelectedInformation(this.number);
    this.dataExchange.setRowNumberSelectedInformation(this.row);
    this.dataExchange.setPrice(this.price);
  }

  sendReservedInfo(seatNumber, rowNumber) {
      this.reservedSubscription = this.http.seatReserved(seatNumber, rowNumber).subscribe(
        (result) => {
          this.reserved = result;
        },
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    if (this.reservedSubscription) {
      this.reservedSubscription.unsubscribe();
    }
  }
}
