import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './page-routing.module';

@NgModule({
    imports: [
        DashboardModule,
        RouterModule,
        PagesRoutingModule
    ],
    declarations: [
        LayoutComponent
    ],
})
export class LayoutModule {}