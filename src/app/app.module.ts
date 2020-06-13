import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ChartsModule} from "ng2-charts";
import { StatsComponent } from './stats/stats.component';
import { AdmComponent } from './adm/adm.component';
import { HealthComponent } from './health/health.component';
import { DetailsComponent } from './details/details.component';
import { MapsComponent } from './maps/maps.component';
import { InfoComponent } from './info/info.component';
import { AlertsComponent } from './alerts/alerts.component';
import { PostcardComponent } from './postcard/postcard.component';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localePl from '@angular/common/locales/pl';
import { MapComponent } from './map/map.component';
registerLocaleData(localePl, 'pl');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    StatsComponent,
    AdmComponent,
    HealthComponent,
    DetailsComponent,
    MapsComponent,
    InfoComponent,
    AlertsComponent,
    PostcardComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [MenuComponent, { provide: LOCALE_ID, useValue: 'pl' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
