import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Program } from './program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  selectedProgram: Program = {
    movieName: '',
    room:'',
    date : '',
    hour: '',

    _id: ''
  };
  programs: Program[];

  constructor(private http: HttpClient) { }

  postProgram(program: Program) {
    return this.http.post(environment.apiBaseUrl + '/addprogram', program);
  }

  getProgramList() {
    return this.http.get(environment.apiBaseUrl + '/programlist');
  }
  showProgram() {
    return this.http.get(environment.apiBaseUrl + '/programlist');
  }


  editProgram(program: Program) {
    return this.http.put(environment.apiBaseUrl + `/${program._id}`, program);
  }
// tslint:disable-next-line: variable-name
 deleteProgram(_id: string) {
   console.log(_id);
  return this.http.delete(environment.apiBaseUrl +  `/${_id}`);
 }


}
