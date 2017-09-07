import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {BlankPageComponent} from './contents/blank-page/blank-page.component';
import {DashbordPageComponent} from './contents/dashbord-page/dashbord-page.component';
import {AdminDashboard2Component} from './contents/dashboard-page2/admin-dashboard2.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'starter', pathMatch: 'full' },
      { path: 'starter', component: DashboardComponent , children : [
        { path: 'test', component: BlankPageComponent },
        { path: 'dash1', component: DashbordPageComponent },
        { path: 'dash2', component: AdminDashboard2Component },
      ]},
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
