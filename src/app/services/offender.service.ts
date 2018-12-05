import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Offender} from '../_models/offender';
import {Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {Observable, pipe, Subscription} from 'rxjs';
import {Event} from '../_models/event';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
    // 'Authorization': 'my-auth-fireBaseToken'
  })
};

@Injectable()
export class OffenderService {
  responseConvertArray: any[];

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) {
  }

  getAllOffenders(): Observable<Offender[]> {
     // const fireBaseToken = this.authenticationService.getAuthToken();
    // return this.httpClient.get<Offender[]>('https://localhost:44330/api/offender')
    return this.httpClient.get<Offender[]>('https://iokrf-3d980.firebaseio.com/offenders.json')
     // return this.httpClient.get<Offender[]>('https://iokrf-3d980.firebaseio.com/offenders.json?auth=' + fireBaseToken)
      .pipe(
        tap( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }

  getSingleOffender(id: string): Observable<Offender> {
    // return this.httpClient.get<Offender[]>('https://localhost:44330/api/values')
    return this.httpClient.get<Offender>('https://iokrf-3d980.firebaseio.com/offenders/' + id + '.json')
      .pipe(
        tap( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }

  /*  addOffender(offender: Offender): Subscription {
      return this.httpClient.post<Offender>('https://iokrf-3d980.firebaseio.com/offenders/.json', offender, {observe: 'response'})
        .subscribe(resp => {
          console.log(resp.body.name);
        });
    }*/
  addOffender(offender: Offender): Observable<Offender> {
    return this.httpClient.post<Offender>('https://iokrf-3d980.firebaseio.com/offenders/.json', offender)
      .pipe(
        tap( // log the result or error
          data => {
            this.responseConvertArray = Object.keys(data).map((key) => data[key]);
            this.insertOffenderID(this.responseConvertArray[0]);
          },
          error => {
            console.log(error);
          }
        ));
  }

  getOffenderEvents(id: string): Observable<Event[]> {
    return this.httpClient.get<Event[]>('https://iokrf-3d980.firebaseio.com/offenders/' + id + '/zzevents/newEvents.json')
    // return this.httpClient.get<Offender[]>('https://iokrf-3d980.firebaseio.com/offenders.json?auth=' + fireBaseToken)
      .pipe(
        tap( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }

  insertOffenderID(offenderID: string) {
    return this.httpClient.patch('https://iokrf-3d980.firebaseio.com/offenders/' + offenderID + '.json',
      {
        'offenderID': offenderID
      })
      .subscribe( // log the result or error
        data => console.log(data),
        error => console.log(error));
  }
}
