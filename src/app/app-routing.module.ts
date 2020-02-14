import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './pages/layout.component';

import {
    NbLoginComponent
  } from '@nebular/auth';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () => import('./pages/layout.module')
            .then(m => m.LayoutModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module')
            .then(m => m.NtsAuthModule),
    }
];

const config: ExtraOptions = {
    useHash: false,
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
  