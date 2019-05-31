import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RoomService } from '../../sharedadmin/room.service';
import { Room } from '../../sharedadmin/room.model';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css'],
  providers:[RoomService]
})
export class AddroomComponent implements OnInit {

  constructor(protected roomService: RoomService) { }
  serverErrorMessages: string;


  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form)
    form.reset();
    this.roomService.selectedRoom = {
      _id:"",
      roomName: "",
      roomImage1: "",
      roomImage2: "",
      roomImage3: "",
      roomImage4: ""
    }
  }

  onSubmit(form: NgForm) {
    this.roomService.postRoom(form.value).subscribe((res) => {
      this.resetForm(form);
});
}

refreshMovieList() {
  this.roomService.getRoomList().subscribe(
    res => {
    this.roomService.rooms = res as Room[];
  },
  err => {
    this.serverErrorMessages = err.error.message;
  });
}
/*
onEdit(movie: Room) {
  this.roomService.selectedRoom = movie;
}

onDelete(_id: string, form: NgForm) {
  let M:any
  if (confirm('Are you sure to delete this record ?') == true) {
    this.roomService.deleteRoom(_id).subscribe(
      res => {
      this.refreshMovieList();
      this.resetForm(form);
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    },
    err => {
      this.serverErrorMessages = err.error.message;
    });
  }
}
*/
}

