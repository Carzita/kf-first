import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Event} from '../_models/event';
import {EventService} from './event.service';

@Injectable()
export class EventHandledResolverService implements Resolve<Event> {
  constructor(private eventService: EventService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event> | Promise<Event> | Event {
    return this.eventService.getSingleHandledEvent(route.params['id']);
  }
}
