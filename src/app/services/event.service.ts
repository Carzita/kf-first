import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../_models/event';
import {tap, timeout} from 'rxjs/operators';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class EventService {
  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) {}

  getAllNewEvents(): Observable<Event[]> {
    const fireBaseToken = this.authenticationService.getAuthToken();
    return this.httpClient.get<Event[]>('https://iokrf-3d980.firebaseio.com/events/newEvents.json?auth=' + fireBaseToken)
      .pipe(
        tap ( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }

  getAllHandledEvents(): Observable<Event[]> {
    const fireBaseToken = this.authenticationService.getAuthToken();
    return this.httpClient.get<Event[]>('https://iokrf-3d980.firebaseio.com/events/handledEvents.json?auth=' + fireBaseToken )
      .pipe(
        tap ( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }

  getSingleNewEvent(id: string): Observable<Event> {
    const fireBaseToken = this.authenticationService.getAuthToken();
    return this.httpClient.get<Event>('https://iokrf-3d980.firebaseio.com/events/newEvents/' + id + '.json?auth=' + fireBaseToken)
      .pipe(
        tap( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }

  getSingleHandledEvent(id: string): Observable<Event> {
    const fireBaseToken = this.authenticationService.getAuthToken();
    return this.httpClient.get<Event>('https://iokrf-3d980.firebaseio.com/events/handledEvents/' + id + '.json?auth=' + fireBaseToken)
      .pipe(
        tap( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }
}
