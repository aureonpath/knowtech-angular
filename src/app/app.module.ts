import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],//all the components inside the module
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
