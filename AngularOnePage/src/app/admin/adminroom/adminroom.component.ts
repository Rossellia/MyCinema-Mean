import { Component, OnInit } from '@angular/core';
import {Room} from '../../sharedadmin/room.model';
import {RoomService } from '../../sharedadmin/room.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-adminroom',
  templateUrl: './adminroom.component.html',
  styleUrls: ['./adminroom.component.css'],
  providers : [RoomService]

})
export class AdminroomComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  rooms: Room[];

  constructor(public roomService: RoomService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshProgram();
  }

  refreshProgram() {
    this.roomService.getRoomList().subscribe(
      res => {
      this.roomService.rooms = res as Room[];
      this.rooms=this.roomService.rooms;
      console.log(   this.roomService.rooms);
    },
    err => {
      this.serverErrorMessages = err.error.message;
    });
  }
  resetForm(form?: NgForm) {
    if (form) {
    form.reset();
    }
    this.roomService.selectedRoom = {
      roomName: '',
      roomImage1:'',
      roomImage2:'',
      roomImage3:'',
      roomImage4:'',
       _id: ''

    }
  }

  onSubmit(form: NgForm) {
    this.resetForm();
    this.refreshProgram();
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm("Are you sure to delete this record ?") == true) {
      this.roomService.deleteRoom(_id).subscribe(
        res => {
          M.toast({ html: "Deleted successfully", classes: "rounded" });
        },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      );
    }
  }
}
