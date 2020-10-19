import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginModule} from './login/login.module';



@NgModule({
  declarations: [  ],
  exports: [ LoginModule ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
