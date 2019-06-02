import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../Services/http.service';

export interface SeatType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnDestroy {

  eventName = new FormControl(); /*Here should be name of an event that created;*/

  priceFC = new FormControl('',
    [Validators.required, ]);
  val = new FormControl();
  rowBeginFC = new FormControl('',
    [Validators.required, ]);
  rowEndFC = new FormControl('',
    [Validators.required, ]);
  columnBeginFC = new FormControl('',
    [Validators.required, ]);
  columnEndFC = new FormControl('',
    [Validators.required, ]);
  priceSubscription;


  seatType: SeatType[] = [
    {value: 'option-0', viewValue: 'Option 1'},
    {value: 'option-1', viewValue: 'Option 2'},
    {value: 'option-2', viewValue: 'Option 3'}
  ];

  priceFG = new FormGroup({
    event: this.eventName,
    price: this.priceFC,
    seatT: this.val,
    rowB: this.rowBeginFC,
    rowE: this.rowEndFC
  });

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  priceSubmit() {
    if (this.priceFG.invalid) {
      return;
    } else {
      this.sendPriceInfo(this.priceFG.value);
    }
  }

  sendPriceInfo(info) {
    this.priceSubscription = this.http.sentPriceInfo(info).subscribe(
      (result) => {
        localStorage.setItem('token', (result as any).token);
        /*         console.log(localStorage.getItem('contact'));*/
       /* this.util.refresh();
        DataExchangeService.setPage('phonebook');*/
      },
      (error) => {
      /*  console.log(error);
        this.util.snack(error.error.message);*/
      }
    );
    console.log(info);
  }

  ngOnDestroy(): void {
    if (this.priceSubscription) {
      this.priceSubscription.unsubscribe();
    }
  }

}
