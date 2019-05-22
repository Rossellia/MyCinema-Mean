import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { AdminService } from '../../sharedadmin/admin.service';
import { Admin } from '../../sharedadmin/admin.model';


@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css'],
  providers: [AdminService]
})
export class EditmovieComponent implements OnInit {
  constructor(protected adminService: AdminService, protected activatedRoute: ActivatedRoute, protected router:Router){}
  queryParamsStatus ='';
  id: any;
  movie:Admin;


  ngOnInit() {
    this.resetForm();
    this.refreshMovieList();
    this.activatedRoute.params.subscribe(params => {
          this.id = params['id'];
  });
  this.getMovieID(this.id);

}
  getMovieID(_id:string)
  {
   this.adminService.getMovie(_id).subscribe(
    res => {
      this.movie = res as Admin;
    }
   );
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
  refreshMovieList() {
    this.adminService.getMovieList().subscribe(
      res => {
      this.adminService.movies = res as Admin[];
    });
  }
  onSubmit(form: NgForm) {

      this.adminService.editMovie(form.value).subscribe((res) => {
        this.router.navigateByUrl('/adminmovie');

      });
    }


}

