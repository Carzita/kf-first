import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Offender} from '../_models/offender';
import {Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';
import {Event} from '../_models/event';
import {AuthGuard} from '../auth-guard';

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
  return this.httpClient.get<Offender[]>('https://localhost:44330/api/values')
   // return this.httpClient.get<Offender[]>('https://iokrf-3d980.firebaseio.com/offenders.json?auth=' + token)
   .pipe(
       tap ( // log the result or error
         data => console.log(data),
       error => console.log(error))
     );
  }
  getSingleOffender(UID): Observable<Offender[]> {
    // return this.httpClient.get<Offender[]>('https://localhost:44330/api/values')
     return this.httpClient.get<Offender[]>('https://iokrf-3d980.firebaseio.com/offenders/' + UID + '.json')
      .pipe(
        tap ( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }
  addOffender(offender: Offender): Observable<Offender> {
    return this.httpClient.post<Offender>('https://iokrf-3d980.firebaseio.com/offenders.json', offender)
      .pipe(
        tap ( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }
}
