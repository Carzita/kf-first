import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthGuard} from '../auth-guard';
import {Observable} from 'rxjs';
import {Event} from '../_models/event';
import {tap} from 'rxjs/operators';

@Injectable()
export class EventService {
  constructor(private httpClient: HttpClient,
              private authGuard: AuthGuard ) {}

  getAllNewEvents(): Observable<Event[]> {
    // const token = this.authGuard.getToken();
    // return this.httpClient.get<Event[]>('https://localhost:44330/api/event')
    return this.httpClient.get<Event[]>('https://iokrf-3d980.firebaseio.com/events/newEvents.json')
    // return this.httpClient.get<Offender[]>('https://iokrf-3d980.firebaseio.com/offenders.json?auth=' + token)
      .pipe(
        tap ( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }
}
