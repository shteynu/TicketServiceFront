import { Component, OnInit } from '@angular/core';
import {DataChangeObjectService} from '../../Services/data-change-object.service';
import {HttpService} from '../../Services/http.service';


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
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, ],

    ];
  /*  row;
    seat;*/
    eventName = this.dataExchange.getEventName();
    eventObj: EventObject = new EventObject('', 0, 0, '', 0);

    constructor(private dataExchange: DataChangeObjectService,
                private http: HttpService) {

  }

    ngOnInit() {
      this.getHallInfo(this.eventName);

    }

    getHallInfo(eventName) {
      this.http.getHallInfo(eventName).subscribe((res: any) => this.eventObj = res);
    }


}
