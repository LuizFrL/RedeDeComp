import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from '../card/card.module';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { CardsUserComponent } from './cards-user/cards-user.component';



@NgModule({
  declarations: [ HeaderComponent, CardsUserComponent ],
  exports: [ HeaderComponent ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule,
  ]
})
export class HomeModule { }
