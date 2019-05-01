import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CyclistsComponent } from './cyclists/cyclists.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { CyclistDetailComponent } from './cyclist-detail/cyclist-detail.component'
import { TeamDetailComponent } from './team-detail/team-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'cyclists', component: CyclistsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cyclist/:id', component: CyclistDetailComponent },
  { path: 'team/:id', component: TeamDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
