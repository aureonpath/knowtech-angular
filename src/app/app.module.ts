import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserService } from './app.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ AppComponent ],//all the components inside the module
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
