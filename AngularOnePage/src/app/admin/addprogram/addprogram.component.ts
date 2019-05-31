
import { Component, OnInit } from '@angular/core';
import {Program} from '../../shared/program.model';
import { ProgramService } from 'src/app/shared/program.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addprogram',
  templateUrl: './addprogram.component.html',
  styleUrls: ['./addprogram.component.css'],
  providers : [ProgramService]
})
export class AddprogramComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
 Days: any = [
    'Monday',
    'Tuesday',
     'Wednesday',
     'Thursday',
     'Friday',
    'Sunday',
      'Saturday'
  ];


  constructor(public programService: ProgramService) { }

  ngOnInit() {
    this.resetForm();
   // this.refreshProgram();
  }
  resetForm(form?: NgForm) {
    if (form) {
    form.reset();
    }
    this.programService.selectedProgram = {
      buttons:null,
      seats:null,
      nr_tickets:0,
      isDuplicate:'',
      movieName: '',
      room:'',
       date: '',
      hour: '',
      _id: ''

    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.programService.postProgram(form.value).subscribe((res) => {
        this.resetForm(form);
       // this.refreshProgram();
      });
    }
    else
    {
      this.programService.editProgram(form.value).subscribe((res) => {
        this.resetForm(form);
        //this.refreshProgram();
      });
    }
  }/*
  refreshProgram() {
    this.programService.getProgramList().subscribe(
      res => {
      this.programService.programs = res as Program[];
    },
    err => {
      this.serverErrorMessages = err.error.message;
    });
  }
  onEdit(program: Program) {
    this.programService.selectedProgram = program;
  }
*/
// tslint:disable-next-line: variable-name
onDelete(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.programService.deleteProgram(_id).subscribe(
      res => {
      // this.refreshProgram();
      this.resetForm(form);
    },
    err => {
      this.serverErrorMessages = err.error.message;
    });
  }
}

}
