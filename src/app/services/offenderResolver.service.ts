import {Injectable} from '@angular/core';
import {Offender} from '../_models/offender';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {OffenderService} from './offender.service';
import {Observable} from 'rxjs';

@Injectable()
export class OffenderResolverService implements Resolve<Offender> {
  constructor(private offenderService: OffenderService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Offender> | Promise<Offender> | Offender {
    return this.offenderService.getSingleOffender(route.params['cpr']);
  }
}
