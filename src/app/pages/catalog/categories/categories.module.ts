import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { 
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule
} from '@nebular/theme';

import { CategoriesComponent } from './categories.component';

@NgModule({
    imports: [
        NbLayoutModule,
        NbButtonModule,
        NbIconModule,
        NbActionsModule,
        CommonModule
    ],
    declarations: [
        CategoriesComponent
    ]
})
export class CategoriesModule {}