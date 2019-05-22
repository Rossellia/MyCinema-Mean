import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AdminService } from '../../sharedadmin/admin.service';
import { Admin } from '../../sharedadmin/admin.model';
import { Router } from "@angular/router";
declare var M:any;
@Component({
  selector: 'app-adminmovie',
  templateUrl: './adminmovie.component.html',
  styleUrls: ['./adminmovie.component.css'],
  providers: [AdminService]
})
export class AdminmovieComponent implements OnInit {


  constructor(protected adminService: AdminService, private data: AdminService, private router: Router) { }
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
    this.refreshMovieList();



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
    this.resetForm();
    this.refreshMovieList();
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
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      },
      err => {
        this.serverErrorMessages = err.error.message;
      });
    }
  }



}


