import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './pages/layout.module';

import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NbAuthModule.forRoot(),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
