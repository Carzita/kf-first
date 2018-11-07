import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
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
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './_components/not-found.component';
import { SigninComponent } from './authentication/signin/signin.component';
import {AuthGuard} from './auth-guard';
import { OffenderService} from './services/offender.service';

const appRoutes: Routes = [
  { path: '', component: EventsPageComponent},
  { path: 'users', component: UsersPageComponent },
  { path: 'events', component: EventsPageComponent},
  { path: 'equipment', component: EquipmentPageComponent},
  { path: 'offenders', component: OffendersPageComponent},
  { path: 'signin', component: SigninComponent},
  {path: '**', component: NotFoundComponent}
];

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
    SigninComponent
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard, OffenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
