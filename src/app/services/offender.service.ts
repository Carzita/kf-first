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

  getOffenders(): Observable<Offender[]> {
  /* return this.httpClient.get<Offender[]>('https://localhost:44330/api/values')
     .pipe(map((response: Response) => {
      const data = response.json();
      return data;
    }
   )); */
  // const token = this.authGuard.getToken();
  return this.httpClient.get<Offender[]>('https://localhost:44330/api/values')
   // return this.httpClient.get<Offender[]>('https://iokrf-3d980.firebaseio.com/offenders.json?auth=' + token)
   .pipe(
       tap ( // log the result or error
         data => console.log(data),
       error => console.log(error))
     );
  }
}
