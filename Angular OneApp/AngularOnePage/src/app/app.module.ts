import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { ModuleWithProviders } from "@angular/core";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotComponent} from './forgot/forgot.component';
import { MainComponent } from './main/main.component';
import { DisplayPiechartsComponent } from './display-piecharts/display-piecharts.component';
import { PieChartComponent } from './piecharts/piecharts.component';
import {SlideshowModule} from 'ng-simple-slideshow';

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
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    MainComponent,
    DisplayPiechartsComponent,
    PieChartComponent

  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'main', component: MainComponent
      },
      {
        path: 'movies', component: MoviesComponent
      },
      {
        path: 'home', component: HomeComponent
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
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'forgot', component: ForgotComponent
      }

    ])

  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
