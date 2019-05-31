import { Component, OnInit } from '@angular/core';
import {Program} from '../../shared/program.model';
import { ProgramService } from 'src/app/shared/program.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-showprogram',
  templateUrl: './showprogram.component.html',
  styleUrls: ['./showprogram.component.css'],
  providers : [ProgramService]

})
export class ShowprogramComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(public programService: ProgramService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshProgram();
  }
refreshProgram() {
    this.programService.getProgramList().subscribe(
      res => {
      this.programService.programs = res as Program[];console.log(res);
    },
    err => {
      this.serverErrorMessages = err.error.message;
    });
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
    this.resetForm();
    this.refreshProgram();
  }

  onEdit(program: Program) {
    this.programService.selectedProgram = program;
  }

// tslint:disable-next-line: variable-name
onDelete(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.programService.deleteProgram(_id).subscribe(
      res => {
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    },
    err => {
      this.serverErrorMessages = err.error.message;
    });
  }
}

}



