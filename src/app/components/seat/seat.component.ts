import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {DataChangeObjectService} from '../../Services/data-change-object.service';
import {Subscription} from 'rxjs';
import {HttpService} from '../../Services/http.service';


/*export interface SeatType {
  cheap;
  medium;
  expensive;
}*/

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit, OnDestroy {

  @Input() seat;
  @Input() row;
  price = this.dataExchange.getPriceInfo();
  selected;
  reserved;
  reservedSubscription: Subscription;
  SeatType;

  constructor(private dataExchange: DataChangeObjectService,
              private http: HttpService) { }

  ngOnInit() {
    /*console.log(this.seat);
    console.log(this.row);*/
    this.selected = false;
    this.reserved = false;
    this.sendReservedInfo(this.seat, this.row);

  }

  toggleColor() {
    this.selected = !this.selected;
    this.dataExchange.setSeatNumberSelectedInformation(this.seat);
    this.dataExchange.setRowNumberSelectedInformation(this.row);
   /* this.dataExchange.setPrice(this.price);*/
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
