import {Injectable} from '@angular/core';
import {Offender} from '../_models/offender';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {OffenderService} from './offender.service';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class OffenderResolverService implements Resolve<Offender> {
  constructor(private offenderService: OffenderService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Offender> | Observable<never> {
    return this.offenderService.getSingleOffender(route.params['id'])
      .pipe(map(
        data => {
          console.log(data);
          if (data != null) {
            return data;
          } else {
            this.router.navigate(['/not-found']);
          }
        },
        error => {
          console.log(error);
        })
      );
  }
}
