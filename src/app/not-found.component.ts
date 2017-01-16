import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component(
    {
        template: `
            <h1>Not Found</h1>
        `
    }
)

export class NotFoundComponent {
    constructor(private _service: SharedService) { }

    ngOnInit() {
        this._service.cancelAllRequests();
    }
}