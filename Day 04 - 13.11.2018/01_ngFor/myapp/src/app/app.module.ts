import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatrixComponent } from './matrix/matrix.component';
import { LoopExampleComponent } from './loop-example/loop-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    LoopExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
