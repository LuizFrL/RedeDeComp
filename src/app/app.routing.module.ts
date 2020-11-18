import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './home/login/login.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {LogindGuard} from './core/login-guard/login-guard.guard';




const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [ LogindGuard ]
  },
  {
    path: 'cards',
    pathMatch: 'full',
    redirectTo: 'card'
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then(module => module.CardModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule {
}
