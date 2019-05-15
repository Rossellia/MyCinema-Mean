import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Addroom } from './addroom.model';

@Injectable()
export class AddroomService {
  selectedAddroom: Addroom;
  addrooms: Addroom[];
  readonly baseURL = 'http://localhost:3000/rooms';

  constructor(private http: HttpClient) { }

  postAddroom(emp: Addroom) {
    return this.http.post(this.baseURL, emp);
  }

  getAddroomList() {
    return this.http.get(this.baseURL);
  }

  putAddroom(emp: Addroom) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteAddroom(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
