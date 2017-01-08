import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { routing, routedComponents } from './app.routing';
import { NavBarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users/user-list/users.component';
import { UserComponent } from './users/user/user.component';
import { UserService } from './users/user-list/users.service';
import { NotFoundComponent } from './not-found.component';
import { FavoritedUsersPipe } from './users/user-list/users.pipe.favorite';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
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
