import { Component, OnInit } from '@angular/core';
import { AdminService } from '../sharedadmin/admin.service';
import { Admin } from '../sharedadmin/admin.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css', '../assets/stylesheets/movies.css', '../assets/stylesheets/style.css'],
  providers: [AdminService]
})
export class MoviesComponent implements OnInit {

  constructor(protected adminService: AdminService) { }
  serverErrorMessages: string;
  toedit:boolean;

  ngOnInit() {
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


}
