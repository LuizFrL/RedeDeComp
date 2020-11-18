import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from '../card/card.module';
import {RouterModule} from '@angular/router';
import {ClipboardModule} from '@angular/cdk/clipboard';


import { HeaderComponent } from './header/header.component';
import { CardsUserComponent } from './cards-user/cards-user.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { CardsShareableComponent } from './cards-shareable/cards-shareable.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [ HeaderComponent, CardsUserComponent, ProjectDescriptionComponent, LoginComponent, CardsShareableComponent ],
  exports: [ HeaderComponent, ProjectDescriptionComponent ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule,
    ClipboardModule,
    MatButtonModule,
    MatTooltipModule,


  ]
})
export class HomeModule { }
