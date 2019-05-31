import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Program } from './program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  selectedProgram: Program = {
    buttons:null,
    seats:null,
    nr_tickets:0,
   isDuplicate:'',
    movieName: '',
    room:'',
    date : '',
    hour: '',

    _id: ''
  };
  programs: Program[];

  constructor(private http: HttpClient) { }

  postProgram(program: Program) {

    return this.http.post(environment.apiBaseUrl + '/program/addprogram', program);
  }

  getProgramList() {
    return this.http.get(environment.apiBaseUrl + '/program/addprogram');
  }
  showProgram() {
    return this.http.get(environment.apiBaseUrl + '/program/showprogram');
  }
  getProgram(_id:string){ console.log("service");
    return this.http.get(environment.apiBaseUrl + `/program/getprogram/${_id}`);
  }



  editProgram(program: Program) {console.log(program.seats);
    console.log(program._id);
    return this.http.put(environment.apiBaseUrl + `/program/${program._id}`, program);
  }
// tslint:disable-next-line: variable-name
 deleteProgram(_id: string) {
   console.log(_id);
  return this.http.delete(environment.apiBaseUrl +  `/program/${_id}`);
 }


}
