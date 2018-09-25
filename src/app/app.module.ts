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
    EventsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
