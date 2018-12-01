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

const appRoutes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'users', component: UsersPageComponent },
  { path: 'events', component: EventsPageComponent},
  { path: 'equipment', component: EquipmentPageComponent},
  { path: 'offenders', component: OffendersPageComponent, children: [
    { path: ':cpr', component: OffenderProfileComponent, resolve: {offender: OffenderResolverService}, children: [
  // { path: 'offenders/:cpr', component: OffenderProfileComponent, children: [
      {path: 'details', component: OffenderDetailsComponent},
      {path: 'equipment', component: OffenderDetailsComponent},
      {path: 'events', component: OffenderDetailsComponent}
    ]}]},
  { path: 'signin', component: SigninComponent},
  { path: 'create', component: OffendersCreateComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRouting {

}
