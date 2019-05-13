import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
   email: '',
   password: '',
   confirmpassword: '',
   firstName: '',
   lastName: '',
   username: ''
  };
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }

  loginadmin(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/loginadmin', authCredentials, this.noAuthHeader);
}
  getmainadmin() {
  return this.http.get(environment.apiBaseUrl + '/mainadmin');
  }

 //Helper Methods

 setTokenAdmin(token: string) {
  localStorage.setItem('token', token);
}

getTokenAdmin() {
  return localStorage.getItem('token');
}

deleteTokenAdmin() {
  localStorage.removeItem('token');
}
getAdminPayload() {
  var token = this.getTokenAdmin();
  if (token) {
    var userPayload = atob(token.split('.')[1]);
    return JSON.parse(userPayload);
  }
  else
    return null;
}
isAdminLoggedIn() {
  var userPayload = this.getAdminPayload();
  if (userPayload)
    return userPayload.exp > Date.now() / 1000;
  else
    return false;
}
}


