import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NtsAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { 
  NbLayoutModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbCardModule
} from '@nebular/theme';

import { NtsLoginComponent } from './login.component';
import { NstAuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbCardModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NtsAuthRoutingModule,
    NbLayoutModule,

    NbAuthModule,
  ],
  declarations: [
    NtsLoginComponent,
    NstAuthComponent
  ],
})
export class NtsAuthModule {
}