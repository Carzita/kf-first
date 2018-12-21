import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Offender} from '../_models/offender';
import {EventEmitter, Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {Observable, pipe, Subscription} from 'rxjs';
import {Event} from '../_models/event';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';
import {OffenderComment} from '../_models/offenderComment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
    // 'Authorization': 'my-auth-fireBaseToken'
  })
};

@Injectable()
export class OffenderService {
  responseConvertArray: any[];

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService, private router: Router) {
  }

  // retrieve all Offenders in FireBase
  getAllOffenders(): Observable<Offender[]> {
    // const fireBaseToken = this.authenticationService.getAuthToken();
    return this.httpClient.get<Offender[]>('https://iokrf-3d980.firebaseio.com/offenders.json')
    // return this.httpClient.get<Offender[]>('https://iokrf-3d980.firebaseio.com/offenders.json?auth=' + fireBaseToken)
      .pipe(
        tap( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }

  // retrieve a single offender from FireBase
  getSingleOffender(id: string): Observable<Offender> {
    // return this.httpClient.get<Offender[]>('https://localhost:44330/api/values')
    return this.httpClient.get<Offender>('https://iokrf-3d980.firebaseio.com/offenders/' + id + '.json')
      .pipe(
        tap( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }

  // add an offender to Firebase
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

  // after adding offender in the above method, the offenderID is added as a property of the offender so it is easily accessed
  insertOffenderID(offenderID: string) {
    return this.httpClient.patch('https://iokrf-3d980.firebaseio.com/offenders/' + offenderID + '.json',
      {
        'offenderID': offenderID
      })
      .subscribe( // log the result or error
        data => {
          console.log(data);
          this.router.navigate(['/offenders']);
        },
        error => console.log(error));
  }

  addOffenderComment(offenderComment: string, timeStamp: string, offenderID: string): Observable<any> {
    return this.httpClient.post('https://iokrf-3d980.firebaseio.com/offenders/' + offenderID + '/comments.json',
      {
        'comment': offenderComment,
        'timeStamp': timeStamp
      })
      .pipe(map( // log the result or error
        data => {
          console.log('comment inserted');
          console.log(data);
        },
        error => console.log(error)));
  }

  // retrieve all offenders comments in FireBase
  getAllOffenderComments(offenderID: string): Observable<OffenderComment[]> {
    return this.httpClient.get<OffenderComment[]>('https://iokrf-3d980.firebaseio.com/offenders/' + offenderID + '/comments.json')
      .pipe(
        tap( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }

  // retrieve an offender's unresolved events
  getOffenderNewEvents(id: string): Observable<Event[]> {
    return this.httpClient.get<Event[]>('https://iokrf-3d980.firebaseio.com/offenders/' + id + '/events/newEvents.json')
    // return this.httpClient.get<Offender[]>('https://iokrf-3d980.firebaseio.com/offenders.json?auth=' + fireBaseToken)
      .pipe(
        tap( // log the result or error
          data => console.log(data),
          error => console.log(error))
      );
  }

  // delete an offender
  deleteOffender(offenderID: string) {
    return this.httpClient.delete('https://iokrf-3d980.firebaseio.com/offenders/' + offenderID + '.json')
      .subscribe( // log the result or error
        data => {
          console.log(data);
          this.router.navigate(['/offenders']);
        },
        error => console.log(error));
  }

}
