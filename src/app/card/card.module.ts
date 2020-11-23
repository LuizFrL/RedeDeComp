import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardInformationsComponent} from './card-informations/card-informations.component';
import {CardRegisterComponent} from './card-register/card-register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorsModule} from '../errors/errors.module';
import {CardRoutingModule} from './card.routing.module';
import {CardsShareableComponent} from './cards-shareable/cards-shareable.component';
import {CardsUserComponent} from './cards-user/cards-user.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ CardInformationsComponent, CardRegisterComponent, CardsShareableComponent, CardsUserComponent ],
  exports: [ CardInformationsComponent, CardRegisterComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorsModule,
    CardRoutingModule,
    MatButtonModule
  ]
})
export class CardModule {
}
