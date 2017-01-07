import '../public/css/normalize.css';
import '../public/css/main.css';
import '../node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));

