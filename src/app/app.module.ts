import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './pages/layout.module';
import { LoginModule } from './pages/login/login.module';
// import { DashboardModule } from './pages/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    // DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
