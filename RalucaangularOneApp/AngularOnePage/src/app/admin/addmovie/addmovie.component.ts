import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AdminService } from '../../sharedadmin/admin.service';
import { Admin } from '../../sharedadmin/admin.model';


declare var M: any;

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
  providers: [AdminService]
})
export class AddmovieComponent implements OnInit {

  constructor(protected adminService: AdminService) { }
  serverErrorMessages: string;
  Genres: any = [
    'Animation',
    'Drama',
    'Romance',
    'Comedy',
    'Horror',
    'Action',
    'Adventure',
    'Other'
  ];

  ngOnInit() {
    this.resetForm();

  }

  resetForm(form?: NgForm) {
    if (form)
    form.reset();
    this.adminService.selectedAdmin = {
      _id: "",
      movieName: "",
      movieDescription: "",
      moviePrice: null,
      movieImage: "",
      movieGenre: "",
      movieDuration: ""
    }
  }
  /*radioChangedHandler(event)
  {
    this.adminService.selectedAdmin.movieGenre = event.target.value;
  }*/

  onSubmit(form: NgForm) {
      this.adminService.postMovie(form.value).subscribe((res) => {
        this.resetForm(form);
  });
}


  refreshMovieList() {
    this.adminService.getMovieList().subscribe(
      res => {
      this.adminService.movies = res as Admin[];
    },
    err => {
      this.serverErrorMessages = err.error.message;
    });
  }

  onEdit(movie: Admin) {
    this.adminService.selectedAdmin = movie;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.adminService.deleteMovie(_id).subscribe(
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

}
