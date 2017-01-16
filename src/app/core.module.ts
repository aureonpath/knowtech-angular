import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [ // components that we want to make available
    ],
    declarations: [ // components for use in THIS module
    ],
    providers: [ // singleton services
        SharedService,
    ]
})
export class CoreModule { }