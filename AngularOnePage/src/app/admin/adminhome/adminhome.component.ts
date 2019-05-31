import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { AdminService } from '../../sharedadmin/admin.service';
import { Admin } from '../../sharedadmin/admin.model';
import {ProgramService} from '../../shared/program.service';
import {Program} from '../../shared/program.model';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(protected adminService: AdminService, protected programService: ProgramService) { }
  lastmoviename: string;
  lastmovieimage: string;
  nrtickets: number;
  ngOnInit() {
    this.countMovies();
    this.lastMovie();
    this.countProgram();
  }
  countMovies()
  {
    this.adminService.getmoviecount().subscribe((res)=>{
      this.adminService.moviescount = res as number;
    })
  }
  countProgram()
  { this.nrtickets=0;
    this.programService.getProgramList().subscribe(
      res => {
        this.programService.programs = res as Program[];
       // console.log(this.programService.programs);

      });
      for ( let prog of this.programService.programs)
      {
        this.nrtickets=this.nrtickets+prog.nr_tickets;
        //console.log(prog.nr_tickets);
      }
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
