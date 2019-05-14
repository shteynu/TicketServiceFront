import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export interface SeatType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  priceFC = new FormControl('',
    [Validators.required, ]);

  seatType: SeatType[] = [
    {value: 'option-0', viewValue: 'Option 1'},
    {value: 'option-1', viewValue: 'Option 2'},
    {value: 'option-2', viewValue: 'Option 3'}
  ];
  priceFG = new FormGroup({
    price: this.priceFC
  });

  constructor() { }

  ngOnInit() {
  }

  priceSubmit() {
    if (this.priceFG.invalid) {
      return;
    } else {
      this.sendEventInfo(this.priceFG.value);
    }
  }

  sendEventInfo(info) {
    console.log(info);
  }

}
