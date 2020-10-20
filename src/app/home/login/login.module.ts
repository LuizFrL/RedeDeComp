import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CardModule } from '../../card/card.module';



@NgModule({
  declarations: [ LoginComponent ],
  exports: [ LoginComponent ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class LoginModule { }
