import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise';

import { UserProfile } from './user-profile.model';

@Injectable()
export class UserProfileService {
  selectUserProfile: UserProfile;
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
    return this.http.put(this.baseURL + `/?id=${usr._id}`, usr);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/?id=${_id}`);
  }
}
