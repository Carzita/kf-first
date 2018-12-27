import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Event} from '../_models/event';
import {EventService} from './event.service';

@Injectable()
export class EventDetailsResolverService implements Resolve<Event> {
  constructor(private eventService: EventService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event> | Promise<Event> | Event {
    console.log(state.url.substring(0, 11));
    if (state.url.substring(0, 11) === '/events/new') {
      return this.eventService.getSingleNewEvent(route.params['id']);
    } else {
      return this.eventService.getSingleHandledEvent(route.params['id']);
    }
  }
}
