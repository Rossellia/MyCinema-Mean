import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomebarComponent } from './homebar/homebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { BodymoviesComponent } from './bodymovies/bodymovies.component';
import { ScriptsComponent } from './scripts/scripts.component';
import { MovieComponent } from './movie/movie.component';
import { UserbarComponent } from './userbar/userbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomebarComponent,
    SearchbarComponent,
    BodymoviesComponent,
    ScriptsComponent,
    MovieComponent,
    UserbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
