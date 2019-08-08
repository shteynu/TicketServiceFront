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
export class SeatComponent implements OnInit, OnDestroy  {

  @Input() seat;
  @Input() row;
  @Input() price;
  @Input() seatType;

  selected;
  reserved;
  reservedSubscription: Subscription;
  best = false;
  theBest = false;


  constructor(private dataExchange: DataChangeObjectService,
              private http: HttpService) { }

  ngOnInit() {
    this.selected = false;
    this.reserved = false;
    this.seatTypeDefenitionColor();
    this.sendReservedInfo(this.seat, this.row);
  }

  toggleColor() {
    this.selected = !this.selected;
    this.dataExchange.setSeatNumberSelectedInformation(this.seat);
    this.dataExchange.setRowNumberSelectedInformation(this.row);
  }

  sendReservedInfo(seatNumber, rowNumber) {
      this.reservedSubscription = this.http.seatReserved(seatNumber, rowNumber).subscribe(
        (result) => {
          this.reserved = result;
        },
        (error) => console.log(error)
      );
  }

  seatTypeDefenitionColor() {
    if (this.seatType === 'the best') {
      this.theBest = !this.theBest;
    } else if (this.seatType === 'best') {
      this.best = !this.best;
    }
  }


  ngOnDestroy() {
    if (this.reservedSubscription) {
      this.reservedSubscription.unsubscribe();
    }
  }
}
