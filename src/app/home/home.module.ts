import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from '../card/card.module';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ HeaderComponent ],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule,
  ]
})
export class HomeModule { }
