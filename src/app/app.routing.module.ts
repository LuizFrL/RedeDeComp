import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './home/login/login.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {CardInformationsComponent} from './card/card-informations/card-informations.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // canActivate: [ AuthGuard ]
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
