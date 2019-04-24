import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomebarComponent } from './homebar/homebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CinemaroomsComponent } from './cinemarooms/cinemarooms.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ProgramComponent } from './program/program.component';
import { RoomComponent } from './room/room.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AppRoutingModule } from './app-routing.module';
import { ScriptsComponent } from './scripts/scripts.component';
import { RouterModule, Routes } from '@angular/router';
import {SlideshowModule} from 'ng-simple-slideshow';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { PieChartComponent } from './piecharts/piecharts.component';
import { DisplayPiechartsComponent } from './display-piecharts/display-piecharts.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomebarComponent,
    SearchbarComponent,
    CinemaroomsComponent,
    HomeComponent,
    MoviesComponent,
    ProgramComponent,
    RoomComponent,
    SettingsComponent,
    StatisticsComponent,
    ScriptsComponent,
    PieChartComponent,
    DisplayPiechartsComponent,
    CarouselBasicComponent
  ],
  imports: [ NgbModule.forRoot(),
    BrowserModule,
    SlideshowModule,
    RouterModule.forRoot([
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'movies', component: MoviesComponent
      },
      {
        path: 'program', component: ProgramComponent
      },
      {
        path: 'cinemarooms/:room', component: RoomComponent
      },
      {
        path: 'cinemarooms', component: CinemaroomsComponent
      },

      {
        path: 'settings', component: SettingsComponent
      },
      {
        path: 'statistics', component: StatisticsComponent
      }
    ])

  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
