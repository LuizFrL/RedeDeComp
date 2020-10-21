import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from '../card/card.module';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { CardsUserComponent } from './cards-user/cards-user.component';
import {ProjectDescriptionComponent} from './project-description/project-description.component';
import {LoginComponent} from './login/login.component';



@NgModule({
  declarations: [ HeaderComponent, CardsUserComponent, ProjectDescriptionComponent, LoginComponent ],
  exports: [ HeaderComponent ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule
  ]
})
export class HomeModule { }
