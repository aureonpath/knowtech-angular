import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
  </div>
  `
})
export class AppComponent { }
