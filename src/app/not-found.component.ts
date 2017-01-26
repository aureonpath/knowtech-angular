import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { routerTransition } from './animation/router.animation';

@Component(
    {
        template: `
            <h1>Not Found</h1>
        `,
        animations: [routerTransition()],
        host: { '[@routerTransition]': '' }
    }
)

export class NotFoundComponent {
    constructor(private _service: SharedService) { }

    ngOnInit() {
        this._service.cancelAllRequests();
    }
}