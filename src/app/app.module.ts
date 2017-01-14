import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import '../rxjs-extensions';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { routing, routedComponents } from './app.routing';
import { NavBarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users/users-list/users.component';
import { UserComponent } from './users/user/user.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserService } from './users/users.service';
import { NotFoundComponent } from './not-found.component';
import { FavoritedUsersPipe } from './users/users-list/users.pipe.favorite';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    HttpModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    UserFormComponent,
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
