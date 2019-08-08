import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {DataChangeObjectService} from './data-change-object.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpService) { }

  refresh(target: string) {
   /* this.http.getHallInfo(DataChangeObjectService.getEventId()).subscribe(
      (success) => { DataChangeObjectService.setEventHall((success as any).eventHall);
                     DataChangeObjectService.setPage(target);
                     console.log(success); }
    );*/
  }
}
