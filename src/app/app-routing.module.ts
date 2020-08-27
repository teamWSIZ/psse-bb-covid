import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StatsComponent} from "./stats/stats.component";
import {AdmComponent} from './adm/adm.component';
import {HealthComponent} from './health/health.component';
import {DetailsComponent} from "./details/details.component";
import {MapsComponent} from "./maps/maps.component";
import {InfoComponent} from "./info/info.component";
import {AlertsComponent} from "./alerts/alerts.component";
import {MapComponent} from "./map/map.component";
import {HistoryComponent} from "./history/history.component";
import {SourcesComponent} from "./sources/sources.component";
import {RecommendComponent} from "./recommend/recommend.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'health', component: HealthComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'sources', component: SourcesComponent },
  { path: 'recommendations', component: RecommendComponent },
  { path: 'map/:postid', component: MapComponent},
  { path: 'stats/:nodeid', component: StatsComponent},
  { path: 'details/:nodeid', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
