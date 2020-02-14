import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { NbAuthComponent } from '@nebular/auth';
import { NstAuthComponent } from './auth.component';
import { NtsLoginComponent } from './login.component';

export const routes: Routes = [
    {
        path: '',
        component: NstAuthComponent,
        children: [
            {
              path: 'login',
              component: NtsLoginComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NtsAuthRoutingModule {
}