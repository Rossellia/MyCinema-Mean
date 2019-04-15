import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomebarComponent } from './homebar/homebar.component';
import { ScriptsComponent } from './scripts/scripts.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UserbarComponent } from './userbar/userbar.component';
import { BodyprogramComponent } from './bodyprogram/bodyprogram.component';
import { DaysComponent } from './days/days.component';
import { ProgramtableComponent } from './programtable/programtable.component';
import { Row1Component } from './row1/row1.component';
import { Row2Component } from './row2/row2.component';
import { Row3Component } from './row3/row3.component';
import { Row4Component } from './row4/row4.component';
import { Row5Component } from './row5/row5.component';
import { Row6Component } from './row6/row6.component';
import { Row7Component } from './row7/row7.component';

@NgModule({
  declarations: [
    AppComponent,
    HomebarComponent,
    ScriptsComponent,
    SearchbarComponent,
    UserbarComponent,
    BodyprogramComponent,
    DaysComponent,
    ProgramtableComponent,
    Row1Component,
    Row2Component,
    Row3Component,
    Row4Component,
    Row5Component,
    Row6Component,
    Row7Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
