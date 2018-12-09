import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Event} from '../_models/event';
import {EventService} from './event.service';
import {Injectable} from '@angular/core';

@Injectable()
export class EventNewResolverService implements Resolve<Event> {
  constructor(private eventService: EventService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event> | Promise<Event> | Event {
    return this.eventService.getSingleNewEvent(route.params['id']);
  }
}
