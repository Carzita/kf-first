import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {ServerComponent} from './_components/server/server.component';
import { OffendersComponent } from './_components/offenders-page/offenders.component';
import { EventsComponent } from './_components/events/events.component';
import { HeaderComponent } from './_components/header/header.component';
import { EquipmentComponent } from './_components/equipment/equipment.component';
import { UsersPageComponent } from './_components/users-page/users-page.component';
import { EventsPageComponent } from './_components/events-page/events-page.component';
import { EquipmentPageComponent } from './_components/equipment-page/equipment-page.component';
import { OffendersPageComponent } from './_components/offenders-page/offenders-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    OffendersComponent,
    EventsComponent,
    HeaderComponent,
    EquipmentComponent,
    UsersPageComponent,
    EventsPageComponent,
    EquipmentPageComponent,
    OffendersPageComponent
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
