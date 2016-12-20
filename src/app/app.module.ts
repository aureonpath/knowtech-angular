import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';
import { NavBarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './users/users.service';
import { NotFoundComponent } from './not-found.component';
import { FavoritedUsersPipe } from './users/users.pipe.favorite';

@NgModule({
  imports: [
    BrowserModule,
    routing,
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UsersComponent,
    NotFoundComponent,
    routedComponents,
    FavoritedUsersPipe
  ],//all the components inside the module
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
