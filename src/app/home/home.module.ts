import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from '../card/card.module';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [ HeaderComponent, CardComponent ],
  exports: [ HeaderComponent ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule,
  ]
})
export class HomeModule { }
