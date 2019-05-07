import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataChangeObjectService {

  static firstVariable;

  constructor() { }

  getFirstVariable() {
    return DataChangeObjectService.firstVariable;
  }

  setFirstVariable(value) {
    DataChangeObjectService.firstVariable = value;
  }
}
