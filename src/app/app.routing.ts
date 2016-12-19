import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
  , { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [HomeComponent, NotFoundComponent];
