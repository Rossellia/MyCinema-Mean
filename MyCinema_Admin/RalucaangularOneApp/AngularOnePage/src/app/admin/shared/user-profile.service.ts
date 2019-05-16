import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise';

import { UserProfile } from './user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  selectUserProfile: UserProfile;
  /*= {
    _id: "",
    username: "",
    profilePicture: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthday: ""
  };*/
  userProfiles: UserProfile[];
  readonly baseURL = 'http://localhost:3335/api/modifyuser';
 
  constructor(private http: HttpClient) { }
 
  postUserProfile(usr: UserProfile) {
    return this.http.post(this.baseURL, usr);
  }

  getUserProfileList(){
    return this.http.get(this.baseURL);
  }

  putUserProfile(usr: UserProfile){
    return this.http.put(this.baseURL + `/${usr._id}`, usr);
  }

  deleteUserProfile(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
