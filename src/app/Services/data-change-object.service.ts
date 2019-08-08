import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataChangeObjectService {


  static seatNumberSelectedInformation;
  static rowNumberSelectedInformation;
  static hallInformation = [{}];
  static page = 'mainPage';
  static eventName;
  static hallName;

  constructor() { }


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


  getPage() {
    return DataChangeObjectService.page;
  }

  setPage(value) {
    DataChangeObjectService.page = value;
  }

  getEventName() {
    return DataChangeObjectService.eventName;
  }

  setEventName(value) {
    DataChangeObjectService.eventName = value;
  }

   getEventHall() {
    return DataChangeObjectService.hallInformation;
  }

  setEventHall(value) {
    DataChangeObjectService.hallInformation = value;
  }

  getHallName() {
    return DataChangeObjectService.hallName;
  }

  setHallName(value) {
    DataChangeObjectService.hallName = value;
  }
}
