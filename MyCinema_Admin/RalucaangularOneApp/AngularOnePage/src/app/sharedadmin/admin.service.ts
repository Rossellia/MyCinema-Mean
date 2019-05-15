import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Admin } from './admin.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  selectedAdmin: Admin = {
   movieDescription: '',
   movieName: '',
   movieImage: '',
   moviePrice: null,
   movieGenre: '',
   _id: ''
   };
   movies: Admin[];

  constructor(private http: HttpClient) { }

  postMovie(movie: Admin) {
    return this.http.post(environment.apiBaseUrl + '/addmovie', movie);
  }

  getMovieList() {
    return this.http.get(environment.apiBaseUrl + '/getmovielist');
  }

  editMovie(movie: Admin) {
    return this.http.put(environment.apiBaseUrl + `/${movie._id}`, movie);
  }
 deleteMovie(_id: string) {
  return this.http.delete(environment.apiBaseUrl +  `/${_id}`);
 }


}
