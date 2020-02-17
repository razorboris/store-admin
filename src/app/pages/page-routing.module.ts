import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './catalog/categories/categories.component';
import { ProductsComponent } from './catalog/products/products.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}