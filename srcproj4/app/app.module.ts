import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BindDemoComponent } from './app.component';

@NgModule({
  declarations: [
    BindDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BindDemoComponent]
})
export class AppModule { }
