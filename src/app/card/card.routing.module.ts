import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CardsUserComponent} from './cards-user/cards-user.component';
import {UserGuard} from '../core/user-guard/user.guard';
import {CardsShareableComponent} from './cards-shareable/cards-shareable.component';


const routes: Routes = [
  {
    path: '',
    component: CardsUserComponent,
    canActivate: [UserGuard]
  },
  {
    path: ':userUID',
    component: CardsShareableComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CardRoutingModule {
}
