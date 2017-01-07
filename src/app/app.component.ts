import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <md-sidenav-layout>
    <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
  </md-sidenav-layout>
  `
})
export class AppComponent { }
