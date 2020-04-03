import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StatsComponent} from "./stats/stats.component";
import {AdmComponent} from './adm/adm.component';
import {HealthComponent} from './health/health.component';

const routes: Routes = [
  { path: '', redirectTo: 'stats', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'adm', component: AdmComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'health', component: HealthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
