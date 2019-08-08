import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlsService} from './urls.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  seatReserved(seatNumber, rowNumber) {
    return this.http.post(UrlsService.url + UrlsService.urlReserved, seatNumber, rowNumber);
  }

  getHallInfo(eventName) {
    return this.http.get(UrlsService.url + UrlsService.urlGetHallInfo,
      {headers: {Authorization: localStorage.getItem('eventHall')}});
  }
}
