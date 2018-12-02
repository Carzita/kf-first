import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {ServerComponent} from './_components/server/server.component';
import { UsersPageComponent } from './_components/users-page/users-page.component';
import { EventsPageComponent } from './_components/events-page/events-page.component';
import { EquipmentPageComponent } from './_components/equipment-page/equipment-page.component';
import { OffendersPageComponent } from './_components/offenders-page/offenders-page.component';
import { MainHeaderComponent } from './_components/main-header/main-header.component';
import { SubHeaderComponent } from './_components/sub-header/sub-header.component';
import { OffendersListComponent } from './_components/offenders-page/offenders-list/offenders-list.component';
import { EventsListComponent } from './_components/events-page/events-list/events-list.component';
import { EventsDetailComponent } from './_components/events-page/events-detail/events-detail.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from '../environments/environment';
import { EventsItemComponent } from './_components/events-page/events-list/events-item/events-item.component';
import { NotFoundComponent } from './_components/not-found.component';
import { SigninComponent } from './authentication/signin/signin.component';
import {AuthGuard} from './auth-guard';
import { OffenderService} from './services/offender.service';
import {ValuePipe} from './value.pipe';
import {AppRouting} from './app.routing';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OffendersCreateComponent } from './_components/offenders-page/offenders-create/offenders-create.component';
import { OffenderProfileComponent } from './_components/offenders-page/offender-profile/offender-profile.component';
import {EventService} from './services/event.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoadSpinnerComponent } from './_components/load-spinner/load-spinner.component';
import {AuthService} from './services/auth.service';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { OffenderDetailsComponent } from './_components/offenders-page/offender-profile/offender-details/offender-details.component';
import {OffenderResolverService} from './services/offenderResolver.service';
import { OffenderEventsComponent } from './_components/offenders-page/offender-profile/offender-events/offender-events.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    UsersPageComponent,
    EventsPageComponent,
    EquipmentPageComponent,
    OffendersPageComponent,
    MainHeaderComponent,
    SubHeaderComponent,
    OffendersListComponent,
    EventsListComponent,
    EventsDetailComponent,
    EventsItemComponent,
    NotFoundComponent,
    SigninComponent,
    ValuePipe,
    OffendersCreateComponent,
    OffenderProfileComponent,
    LoadSpinnerComponent,
    OffenderDetailsComponent,
    OffenderEventsComponent
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    HttpClientModule,
    AppRouting,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    AngularFontAwesomeModule
  ],

  providers: [AuthGuard, OffenderService, EventService, AuthService, OffenderResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
