import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import * as moment from 'moment';
moment().format();
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) {}

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params }).pipe();
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`).pipe();
  }

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
