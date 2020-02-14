import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
    selector: 'nst-layout',
    templateUrl: './layout.component.html'
})

export class LayoutComponent {
    menu = MENU_ITEMS;
}