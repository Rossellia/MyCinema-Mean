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
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { ModuleWithProviders } from "@angular/core";
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {ForgotComponent} from './user/forgot/forgot.component';
import { MainComponent } from './main/main.component';
import { DisplayPiechartsComponent } from './display-piecharts/display-piecharts.component';
import { PieChartComponent } from './piecharts/piecharts.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import {NgModel} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResetPassComponent } from './user/reset-pass/reset-pass.component';
import { LoginadminComponent } from './admin/loginadmin/loginadmin.component';
import { AdminhomebarComponent } from './admin/adminhomebar/adminhomebar.component';
import { AdminsearchbarComponent } from './admin/adminsearchbar/adminsearchbar.component';
import { AddmovieComponent } from './admin/addmovie/addmovie.component';
import { AddroomComponent } from './admin/addroom/addroom.component';
import { ModifyuserComponent } from './admin/modifyuser/modifyuser.component';
import { AddprogramComponent } from './admin/addprogram/addprogram.component';
import { AdminmainComponent } from './admin/adminmain/adminmain.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './shared/user.service';

import { AuthGuard } from './authAdmin/auth.guard';
import { AuthInterceptor } from './authAdmin/auth.interceptor';








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
    PieChartComponent,
    UserComponent,
    ResetPassComponent,
    LoginadminComponent,
    AdminhomebarComponent,
    AdminsearchbarComponent,
    AddmovieComponent,
    AddroomComponent,
    ModifyuserComponent,
    AddprogramComponent,
    AdminmainComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    FormsModule,
    HttpClientModule,
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
      },
      {
        path: 'resetpass', component: ResetPassComponent
      },
      {
        path: 'homebar', component: HomebarComponent
      },
      {
        path: 'loginadmin', component: LoginadminComponent
      },
      {
        path: 'mainadmin', component: AdminmainComponent, canActivate: [AuthGuard]
      },
      {
        path: 'addroom', component:AddroomComponent
      },
      {
        path: 'addmovie', component:AddmovieComponent
      },
      {
        path: 'addprogram', component:AddprogramComponent
      },
      {
        path: 'modifyuser', component:ModifyuserComponent
      },
      {
        path: 'adminhomebar', component:AdminhomebarComponent
      }

    ])

  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/' },{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
}, AuthGuard, UserService],
  exports: [RouterModule, FormsModule] ,
  bootstrap: [AppComponent]
})
export class AppModule { }


