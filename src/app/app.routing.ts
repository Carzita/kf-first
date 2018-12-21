import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventsPageComponent} from './_components/events-page/events-page.component';
import {EquipmentPageComponent} from './_components/equipment-page/equipment-page.component';
import {OffendersPageComponent} from './_components/offenders-page/offenders-page.component';
import {SigninComponent} from './_components/signin/signin.component';
import {NotFoundComponent} from './_components/not-found.component';
import {OffendersCreateComponent} from './_components/offenders-page/offenders-create/offenders-create.component';
import {OffenderProfileComponent} from './_components/offenders-page/offender-profile/offender-profile.component';
import {OffenderDetailsComponent} from './_components/offenders-page/offender-profile/offender-details/offender-details.component';
import {OffenderResolverService} from './services/offenderResolver.service';
import {OffenderEventsComponent} from './_components/offenders-page/offender-profile/offender-events/offender-events.component';
import {EventsDetailComponent} from './_components/events-page/events-list/events-detail/events-detail.component';
import {EventNewResolverService} from './services/eventNewResolver.service';
import {EventsHandledListComponent} from './_components/events-page/events-handled-list/events-handled-list.component';
import {EventHandledResolverService} from './services/eventHandledResolver.service';
import {AuthGuardService} from './services/authGuard.service';
import {OffenderEquipmentComponent} from './_components/offenders-page/offender-profile/offender-equipment/offender-equipment.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/events/new', canActivate: [AuthGuardService], pathMatch: 'full'},
  {
    path: 'events/new', component: EventsPageComponent, canActivate: [AuthGuardService], children: [
      {path: ':id/details', component: EventsDetailComponent, resolve: {event: EventNewResolverService}}
    ]
  },
  {
    path: 'events/handled', component: EventsHandledListComponent, canActivate: [AuthGuardService], children: [
      {path: ':id/details', component: EventsDetailComponent, resolve: {event: EventHandledResolverService}}
    ]
  },
  {path: 'equipment', component: EquipmentPageComponent},
  {path: 'offenders', component: OffendersPageComponent, canActivate: [AuthGuardService]},
  {
    path: 'offenders', component: OffenderProfileComponent, canActivate: [AuthGuardService], children: [
      {path: 'create', component: OffendersCreateComponent},
      {path: ':id/details', component: OffenderDetailsComponent, resolve: {offender: OffenderResolverService}},
      {path: ':id/events', component: OffenderEventsComponent, resolve: {offender: OffenderResolverService}},
      {path: ':id/equipment', component: OffenderEquipmentComponent, resolve: {offender: OffenderResolverService}}
    ]
  },
  {path: 'signin', component: SigninComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRouting {

}
