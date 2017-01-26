import { Component, OnInit } from '@angular/core';
import { routerTransition } from './animation/router.animation';

@Component({
    selector: 'home',
    template: `
        <h1>home</h1>
    `,
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class HomeComponent { }