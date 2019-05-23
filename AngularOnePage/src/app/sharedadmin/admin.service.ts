import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Admin } from './admin.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


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
   movieDuration: '',
   _id: ''
   };
   movies: Admin[];
   moviescount: number;
   lastAdded: Admin;


  public sharedData:string;
  constructor(private http: HttpClient) {
   }

  postMovie(movie: Admin) {
    return this.http.post(environment.apiBaseUrl + '/addmovie', movie);
  }

  getMovieList() {
    return this.http.get(environment.apiBaseUrl + '/getmovielist');
  }
  getMovie(_id:string){
    return this.http.get(environment.apiBaseUrl + `/${_id}`)
  }


  editMovie(movie: Admin) {
    return this.http.put(environment.apiBaseUrl + `/${movie._id}`, movie);
  }
 deleteMovie(_id: string) {
  return this.http.delete(environment.apiBaseUrl +  `/${_id}`);
 }

 getmoviecount(){
  return this.http.get(environment.apiBaseUrl + '/countmovies');
 }

 private messageSource=new BehaviorSubject<string>("ceva");
 currentMessage=this.messageSource.asObservable();
 changeMessage(message: string){
   this.messageSource.next(message)
 }



}
