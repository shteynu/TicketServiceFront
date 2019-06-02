import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataChangeObjectService {

  static seatNumber;
  static rowNumber;
  static seatNumberSelectedInformation;
  static rowNumberSelectedInformation;
  static price;
  static eventName;

  constructor() { }

  getSeatNumber() {
    return DataChangeObjectService.seatNumber;
  }

  setSeatNumber(value) {
    DataChangeObjectService.seatNumber = value;
  }

  getRowNumber() {
    return DataChangeObjectService.rowNumber;
  }

  setRowNumber(value) {
    DataChangeObjectService.rowNumber = value;
  }

  getSeatNumberSelectedInformation() {
    return DataChangeObjectService.seatNumberSelectedInformation;
  }

  setSeatNumberSelectedInformation(value) {
    DataChangeObjectService.seatNumberSelectedInformation = value;
  }
  getRowNumberSelectedInformation() {
    return DataChangeObjectService.rowNumberSelectedInformation;
  }

  setRowNumberSelectedInformation(value) {
    DataChangeObjectService.rowNumberSelectedInformation = value;
  }
  getPriceInfo() {
    return DataChangeObjectService.price;
  }

  setPriceInfo(value) {
    DataChangeObjectService.price = value;
  }

  getEventName() {
    return DataChangeObjectService.eventName;
  }

  setEventName(value) {
    DataChangeObjectService.eventName = value;
  }
}
