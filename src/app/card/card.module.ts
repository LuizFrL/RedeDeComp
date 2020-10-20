import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardInformationsComponent} from './card-informations/card-informations.component';
import {CardRegisterComponent} from './card-register/card-register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorsModule} from '../errors/errors.module';


@NgModule({
  declarations: [ CardInformationsComponent, CardRegisterComponent ],
  exports: [ CardInformationsComponent, CardRegisterComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorsModule
  ]
})
export class CardModule {
}
