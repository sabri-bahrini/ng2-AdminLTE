import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { DashboardLeftSideComponent } from './dashboard/dashboard-left-side/dashboard-left-side.component';
import { DashboardFooterComponent } from './dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardControlSidebarComponent } from './dashboard/dashboard-control-sidebar/dashboard-control-sidebar.component';
import { ContentsComponent } from './contents/contents.component';
import { BlankPageComponent } from './contents/blank-page/blank-page.component';
import { DashbordPageComponent } from './contents/dashbord-page/dashbord-page.component';
import {AdminDashboard2Component} from './contents/dashboard-page2/admin-dashboard2.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardLeftSideComponent,
    DashboardFooterComponent,
    DashboardControlSidebarComponent,
    ContentsComponent,
    BlankPageComponent,
    DashbordPageComponent,
    AdminDashboard2Component,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
