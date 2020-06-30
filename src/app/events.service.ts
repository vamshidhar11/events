import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as moment from 'moment';
moment().format();
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor() {}
  eventSource$ = of([
    {
      title: 'Mumbai',
      start: moment()
        .add(5, 'days')
        .format('YYYY-MM-DD'),
      end: moment()
        .add(5, 'days')
        .format('YYYY-MM-DD')
    },
    {
      title: 'Nagpur',
      start: moment()
        .add(12, 'days')
        .format('YYYY-MM-DD'),
      end: moment()
        .add(13, 'days')
        .format('YYYY-MM-DD'),
      backgroundColor: '#d00',
      borderColor: '#fff'
    },
    {
      title: 'Chennai',
      start: moment()
        .add(14, 'days')
        .format('YYYY-MM-DD'),
      end: moment()
        .add(17, 'days')
        .format('YYYY-MM-DD'),
      backgroundColor: '#212',
      borderColor: '#fff'
    },
    {
      title: 'Bengaluru',
      start: moment()
        .add(6, 'days')
        .format('YYYY-MM-DD'),
      end: moment()
        .add(9, 'days')
        .format('YYYY-MM-DD'),
      backgroundColor: 'orange',
      borderColor: '#fff'
    }
  ]);
}
