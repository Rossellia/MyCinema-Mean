import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarchartsComponent } from './barcharts/barcharts.component';
import { PiechartsComponent } from './piecharts/piecharts.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartsComponent,
    PiechartsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
