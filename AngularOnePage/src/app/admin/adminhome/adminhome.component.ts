import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { AdminService } from '../../sharedadmin/admin.service';
import { Admin } from '../../sharedadmin/admin.model';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(protected adminService: AdminService) { }
  lastmoviename: string;
  lastmovieimage: string;
  ngOnInit() {
    this.countMovies();
    this.lastMovie();
  }
  countMovies()
  {
    this.adminService.getmoviecount().subscribe((res)=>{
      this.adminService.moviescount = res as number;
    })
  }
  lastMovie()
  {
    this.adminService.getMovieList().subscribe(
      res => {
      this.adminService.movies = res as Admin[];
      for(let movie of this.adminService.movies)
    {
     this.lastmoviename = movie.movieName;
     this.lastmovieimage = movie.movieImage;
    }
    });

  }


}
