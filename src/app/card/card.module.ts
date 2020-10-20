import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInformationsComponent } from './card-informations/card-informations.component';
import { CardRegisterComponent } from './card-register/card-register.component';



@NgModule({
  declarations: [ CardInformationsComponent, CardRegisterComponent ],
  exports: [ CardInformationsComponent, CardRegisterComponent ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
