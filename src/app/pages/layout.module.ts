import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule
} from '@nebular/theme';

import { LayoutComponent } from './layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CategoriesModule } from './catalog/categories/categories.module';
import { ProductsModule } from './catalog/products/products.module';
import { PagesRoutingModule } from './page-routing.module';

@NgModule({
    imports: [
        NbLayoutModule,
        NbSidebarModule,
        NbMenuModule,

        DashboardModule,
        CategoriesModule,
        ProductsModule,
        RouterModule,
        PagesRoutingModule
    ],
    declarations: [
        LayoutComponent
    ],
})
export class LayoutModule {}