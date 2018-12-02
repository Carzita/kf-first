import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Offender} from '../_models/offender';
import {Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';
import {AuthGuard} from '../auth-guard';
import {Event} from '../_models/event';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class OffenderService {
  constructor(private httpClient: HttpClient,
              private authGuard: AuthGuard ) {}

  getAllOffenders(): Observable<Offender[]> {
  // const token = this.authGuard.getToken();
  // return this.httpClient.get<Offender[]>('https://localhost:44330/api/offender')
    return this.httpClient.get<Offender[]>('https://iokrf-3d980.firebaseio.com/offenders.json')
   // return this.httpClient.get<Offender[]>('https://iokrf-3d980.firebaseio.com/offenders.json?auth=' + token)
   .pipe(
       tap ( // log the result or error
         data => console.log(data),
       error => console.log(error))
     );
  }
  getSingleOffender(cpr: string): Observable<Offender> {
    // return this.httpClient.get<Offender[]>('https://localhost:44330/api/values')
     return this.httpClient.get<Offender>('https://iokrf-3d980.firebaseio.com/offenders/' + cpr + '.json')
      .pipe(
        tap ( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }
  addOffender(offender: Offender): Observable<Offender> {
    return this.httpClient.put<Offender>('https://iokrf-3d980.firebaseio.com/offenders/' + offender.cpr + '.json', offender)
      .pipe(
        tap ( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }
  getOffenderEvents(cpr: string): Observable<Event[]> {
    return this.httpClient.get<Event[]>('https://iokrf-3d980.firebaseio.com/offenders/' + cpr + '/zzevents/newEvents.json')
    // return this.httpClient.get<Offender[]>('https://iokrf-3d980.firebaseio.com/offenders.json?auth=' + token)
      .pipe(
        tap ( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }
}
