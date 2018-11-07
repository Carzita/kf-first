import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Offender} from '../_models/offender';
import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';
import {Event} from '../_models/event';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class OffenderService {
  constructor(private httpClient: HttpClient) {}

  getOffenders(): Observable<Offender[]> {
  /* return this.httpClient.get<Offender[]>('https://localhost:44330/api/values')
     .pipe(map((response: Response) => {
      const data = response.json();
      return data;
    }
   )); */
   return this.httpClient.get<Offender[]>('https://localhost:44330/api/values');
  }

}
