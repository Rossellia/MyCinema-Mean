import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Room } from './room.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  selectedRoom: Room = {
  roomName:'',
  roomImage1:'',
  roomImage2:'',
  roomImage3:'',
  roomImage4:'',
  _id: '',
  };
  rooms: Room[];
  roomCount: number;
  lastAdded: Room;

  public sharedData:string;
  constructor(private http: HttpClient) {
  }

  postRoom(room: Room) {
    return this.http.post(environment.apiBaseUrl + '/room/addroom', room);
  }

  getRoomList() { console.log("SDFfs");
    return this.http.get(environment.apiBaseUrl + '/room/getroom');
  }
  getRoom(_id:string){
    return this.http.get(environment.apiBaseUrl + `/room/${_id}`)
  }


  editRoom(room: Room) {
    return this.http.put(environment.apiBaseUrl + `/room/${room._id}`, room);
  }

 deleteRoom(_id: string) {
  return this.http.delete(environment.apiBaseUrl +  `/room/${_id}`);
 }

 getroomcount(){
  return this.http.get(environment.apiBaseUrl + '/room/countrooms');
 }

 private messageSource=new BehaviorSubject<string>("what...");
 currentMessage=this.messageSource.asObservable();
 changeMessage(message: string){
   this.messageSource.next(message)
 }

}

