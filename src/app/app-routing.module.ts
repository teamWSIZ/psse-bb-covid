import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StatsComponent} from "./stats/stats.component";
import {AdmComponent} from './adm/adm.component';
import {HealthComponent} from './health/health.component';
import {DetailsComponent} from "./details/details.component";
import {MapsComponent} from "./maps/maps.component";
import {InfoComponent} from "./info/info.component";

const routes: Routes = [
  { path: '', redirectTo: 'details/1', pathMatch: 'full'},
  // { path: 'home', component: HomeComponent },
  // { path: 'adm', component: AdmComponent },
  { path: 'stats/:nodeid', component: StatsComponent},
  { path: 'health', component: HealthComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'details/:nodeid', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
