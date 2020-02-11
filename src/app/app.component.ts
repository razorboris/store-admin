import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nb-layout>
      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>`,
  styleUrls: [] //'./app.component.css'
})
export class AppComponent {
  title = 'store-admin';
}
