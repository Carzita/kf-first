import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {EventsPageComponent} from './_components/events-page/events-page.component';
import {EquipmentPageComponent} from './_components/equipment-page/equipment-page.component';
import {OffendersPageComponent} from './_components/offenders-page/offenders-page.component';
import {MainHeaderComponent} from './_components/main-header/main-header.component';
import {OffendersListComponent} from './_components/offenders-page/offenders-list/offenders-list.component';
import {EventsListComponent} from './_components/events-page/events-list/events-list.component';
import {EventsDetailComponent} from './_components/events-page/events-detail/events-detail.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {NotFoundComponent} from './_components/not-found.component';
import {SigninComponent} from './_components/signin/signin.component';
import {OffenderService} from './services/offender.service';
import {AppRouting} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OffendersCreateComponent} from './_components/offenders-page/offenders-create/offenders-create.component';
import {OffenderProfileComponent} from './_components/offenders-page/offender-profile/offender-profile.component';
import {EventService} from './services/event.service';
import {LoadSpinnerComponent} from './_components/load-spinner/load-spinner.component';
import {AuthenticationService} from './services/authentication.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {OffenderDetailsComponent} from './_components/offenders-page/offender-profile/offender-details/offender-details.component';
import {OffenderResolverService} from './services/offenderResolver.service';
import {OffenderEventsComponent} from './_components/offenders-page/offender-profile/offender-events/offender-events.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {EventsHandledListComponent} from './_components/events-page/events-handled-list/events-handled-list.component';
import {EventDetailsResolverService} from './services/eventDetailsResolver.service';
import {AuthGuardService} from './services/authGuard.service';
import { OffenderEquipmentComponent } from './_components/offenders-page/offender-profile/offender-equipment/offender-equipment.component';
import { OffenderHandledEventsComponent } from './_components/offenders-page/offender-profile/offender-handled-events/offender-handled-events.component';
import { OffenderEventDetailsComponent } from './_components/offenders-page/offender-profile/offender-events/offender-event-details/offender-event-details.component';
import { HandledEventDetailsComponent } from './_components/offenders-page/offender-profile/offender-handled-events/handled-event-details/handled-event-details.component';
import {CouldNotLoadComponent} from './_components/could-not-load.component';

const config = {
  apiKey: 'AIzaSyBWNyT0Sn_3z_UdG_JGFeG0Llx1sdGvlhk',
  authDomain: 'iokrf-3d980.firebaseapp.com',
  databaseURL: 'https://iokrf-3d980.firebaseio.com',
  storageBucket: 'iokrf-3d980.appspot.com',
  messagingSenderId: '136951069661'
};

@NgModule({
  declarations: [
    AppComponent,
    EventsPageComponent,
    EquipmentPageComponent,
    OffendersPageComponent,
    MainHeaderComponent,
    OffendersListComponent,
    EventsListComponent,
    EventsDetailComponent,
    NotFoundComponent,
    SigninComponent,
    OffendersCreateComponent,
    OffenderProfileComponent,
    LoadSpinnerComponent,
    OffenderDetailsComponent,
    OffenderEventsComponent,
    EventsHandledListComponent,
    OffenderEquipmentComponent,
    OffenderHandledEventsComponent,
    OffenderEventDetailsComponent,
    HandledEventDetailsComponent,
    CouldNotLoadComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    HttpClientModule,
    AppRouting,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],

  providers: [
    OffenderService,
    EventService,
    AuthenticationService,
    OffenderResolverService,
    EventDetailsResolverService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
