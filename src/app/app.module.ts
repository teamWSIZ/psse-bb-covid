import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NiceFooterComponent } from './nice-footer/nice-footer.component';
import { FormsComponent } from './forms/forms.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ChartsModule} from "ng2-charts";
import { AlgoComponent } from './algo/algo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NiceFooterComponent,
    FormsComponent,
    AlgoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
