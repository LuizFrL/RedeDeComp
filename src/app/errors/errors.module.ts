import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormErrorComponent } from './form-error/form-error.component';



@NgModule({
  declarations: [ NotFoundComponent, FormErrorComponent ],
  exports: [ NotFoundComponent, FormErrorComponent ],
  imports: [
    CommonModule
  ]
})
export class ErrorsModule { }
