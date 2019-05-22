import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    username: '',
    password: '',
    confirmPassword:'',
   //rememberMe:false,
    profilePicture:'',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber:'',
    _id: '',
    birthday:'' };

  userProfiles: User[];
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  readonly baseURL = 'http://localhost:3335/api/modifyuser';

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




postUser(user: User) {
  return this.http.post(environment.apiBaseUrl + '/registeruser', user, this.noAuthHeader);
}

login(authCredentials) {
  return this.http.post(environment.apiBaseUrl + '/authenticateuser', authCredentials, this.noAuthHeader);
}
getUserProfile() {
  return this.http.get(environment.apiBaseUrl + '/main');
}
// Helper Methods

setToken(token: string) {
  localStorage.setItem('token', token);
}
getToken() {
  return localStorage.getItem('token');
}

deleteToken() {
  localStorage.removeItem('token');
}
getUserPayload() {
  var token = this.getToken();
  if (token) {
    var userPayload = atob(token.split('.')[1]);
    return JSON.parse(userPayload);
  }
  else
    return null;
}

isLoggedIn() {

  var userPayload = this.getUserPayload();
  if (userPayload)
    return userPayload.exp > Date.now() / 1000;
  else
    return false;
}


postUserProfile(usr: User) {
  return this.http.post(this.baseURL, usr);
}

getUserProfileList(){
  return this.http.get(this.baseURL+'/printall');
}

putUserProfile(usr: User){
  return this.http.put(this.baseURL + `/${usr._id}`, usr);
}

deleteUserProfile(_id: string) {
  return this.http.delete(this.baseURL + `/${_id}`);
}



}




