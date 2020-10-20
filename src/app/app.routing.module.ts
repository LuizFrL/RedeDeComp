import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './home/login/login.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {CardInformationsComponent} from './card/card-informations/card-informations.component';
import {UserGuard} from './core/user-guard/user.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'cards',
    component: CardInformationsComponent,
    canActivate: [ UserGuard ]
  },
  {
    path: 'user/:userName',
    component: CardInformationsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
