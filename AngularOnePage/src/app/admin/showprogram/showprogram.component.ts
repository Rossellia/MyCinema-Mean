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
      this.programService.programs = res as Program[];
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
      _id: '',
      movieName: '',
      room:'',
       date: '',
      hour: '',

    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.programService.postProgram(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshProgram();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else
    {
      this.programService.editProgram(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshProgram();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  onEdit(program: Program) {
    this.programService.selectedProgram = program;
  }

// tslint:disable-next-line: variable-name
onDelete(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.programService.deleteProgram(_id).subscribe(
      res => {
      this.refreshProgram();
      this.resetForm(form);
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    },
    err => {
      this.serverErrorMessages = err.error.message;
    });
  }
}

}



