import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {CardModule} from './card/card.module';
import {HomeModule} from './home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    CardModule,
    HomeModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
