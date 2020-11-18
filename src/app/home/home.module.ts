import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClipboardModule} from '@angular/cdk/clipboard';


import { HeaderComponent } from './header/header.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [ HeaderComponent,  ProjectDescriptionComponent, LoginComponent, ],
  exports: [ HeaderComponent, ProjectDescriptionComponent ],
  imports: [
    CommonModule,
    RouterModule,
    ClipboardModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class HomeModule { }
