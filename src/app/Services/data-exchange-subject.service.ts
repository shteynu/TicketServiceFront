import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataExchangeSubjectService {

  static subject: Subject <any> = new Subject();

  constructor() { }

  getSubject() {
    return DataExchangeSubjectService.subject;

  }
}
