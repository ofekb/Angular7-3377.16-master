import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeCupComponent } from './coffee-cup/coffee-cup.component';

@NgModule({
  //declarations - contains all the components in the app
  declarations: [
    AppComponent,
    CoffeeCupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //bootstrap - is for the root component
  bootstrap: [AppComponent]
})
export class AppModule { }
