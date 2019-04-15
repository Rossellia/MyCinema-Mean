import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarchartsComponent } from './barcharts/barcharts.component';
import { PieChartComponent } from './piecharts/piecharts.component';
import { AgmCoreModule } from '@agm/core';
import { DisplayPiechartsComponent } from './display-piecharts/display-piecharts.component';
import { GooglePieChartService } from './google-charts.service.spec';
import { HomebarComponent } from './homebar/homebar.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { UserbarComponent } from './userbar/userbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartsComponent,
    PieChartComponent,
    DisplayPiechartsComponent,
    HomebarComponent,
    HeaderbarComponent,
    UserbarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
      })
  ],
  providers: [GooglePieChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
