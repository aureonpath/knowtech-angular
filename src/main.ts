import '../public/css/styles.css';

import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'my-app',
  template: `
        <div class="container">
        <h1>First Component</h1>
        </div>
  `
})
class AppComponent {
  title = 'First Component';
 }

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ AppComponent ],//all the components inside the module
  providers: [],
  bootstrap: [AppComponent]
})

class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));

