import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventsPageComponent} from './_components/events-page/events-page.component';
import {UsersPageComponent} from './_components/users-page/users-page.component';
import {EquipmentPageComponent} from './_components/equipment-page/equipment-page.component';
import {OffendersPageComponent} from './_components/offenders-page/offenders-page.component';
import {SigninComponent} from './authentication/signin/signin.component';
import {NotFoundComponent} from './_components/not-found.component';
import {OffendersCreateComponent} from './_components/offenders-page/offenders-create/offenders-create.component';
import {OffenderProfileComponent} from './_components/offenders-page/offender-profile/offender-profile.component';
import {OffenderDetailsComponent} from './_components/offenders-page/offender-profile/offender-details/offender-details.component';
import {OffenderResolverService} from './services/offenderResolver.service';
import {OffenderEventsComponent} from './_components/offenders-page/offender-profile/offender-events/offender-events.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'users', component: UsersPageComponent},
  {path: 'events', component: EventsPageComponent},
  {path: 'equipment', component: EquipmentPageComponent},
  {path: 'offenders', component: OffendersPageComponent},
  {
  // path: 'offenders/:cpr', component: OffenderProfileComponent, resolve: {offender: OffenderResolverService}, children: [
    path: 'offenders', component: OffenderProfileComponent, children: [
      // {path: '', redirectTo: ':cpr/details', pathMatch: 'full'},
      // {path: 'details', component: OffenderDetailsComponent},
      {path: 'create', component: OffendersCreateComponent},
      {path: ':cpr/details', component: OffenderDetailsComponent, resolve: {offender: OffenderResolverService}},
      {path: 'equipment', component: OffenderDetailsComponent},
      {path: ':cpr/events', component: OffenderEventsComponent, resolve: {offender: OffenderResolverService}}
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
