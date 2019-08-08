import { Component, OnInit } from '@angular/core';
import {DataChangeObjectService} from '../../Services/data-change-object.service';
import {HttpService} from '../../Services/http.service';
import {pipe} from 'rxjs';


class EventObject {

  constructor(
    public hallName: string,
    public numbersOfRow: number,
    public numbersOfSeatsInRow: number,
    public seatType: string,
    public priceOfSeat: number
) { }

}

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.css']
})
export class HallsComponent implements OnInit {

   hallSeats: any [] = [
    [{row: 1, seat: 1, price: 21, seatType: 'the best'},
      {row: 1, seat: 2, price: 21, seatType: 'the best'},
      {row: 1, seat: 4, price: 21, seatType: 'the best'},
      {row: 1, seat: 4, price: 21, seatType: 'the best'},
      {row: 1, seat: 5, price: 21, seatType: 'the best'},
      {row: 1, seat: 6, price: 21, seatType: 'the best'},
      {row: 1, seat: 7, price: 21, seatType: 'the best'},
      {row: 1, seat: 8, price: 21, seatType: 'the best'},
      {row: 1, seat: 9, price: 21, seatType: 'the best'},
      {row: 1, seat: 10, price: 21, seatType: 'the best'}],
    [{row: 2, seat: 1, price: 34, seatType: 'best'},
      {row: 2, seat: 2, price: 34, seatType: 'best'},
      {row: 2, seat: 3, price: 34, seatType: 'best'},
      {row: 2, seat: 4, price: 34, seatType: 'best'},
      {row: 2, seat: 5, price: 34, seatType: 'best'},
      {row: 2, seat: 6, price: 34, seatType: 'best'},
      {row: 2, seat: 7, price: 34, seatType: 'best'},
      {row: 2, seat: 8, price: 34, seatType: 'best'},
      {row: 2, seat: 9, price: 34, seatType: 'best'}]
    ];

    eventHall = this.dataExchange.getEventHall();
    eventName = this.dataExchange.getEventName();


    constructor(private dataExchange: DataChangeObjectService,
                private http: HttpService) {}

    ngOnInit() {
      this.getHallInfo(this.eventName);
    }

    getHallInfo(eventName) {
    this.http.getHallInfo(eventName);
  }

  getUserData() {


  }


}
