import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModel} from '@angular/forms';
import { Router } from "@angular/router";
import {UserService} from '../../shared/user.service';


@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css'],
})
export class LoginadminComponent implements OnInit {
  model ={
    username: '',
    password: ''
};

  serverErrorMessages: string;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if(this.userService.isAdminLoggedIn())
    this.router.navigateByUrl('/mainadmin');
  }

  onSubmit(form : NgForm){
    this.userService.loginadmin(form.value).subscribe(
      res => {
        this.userService.setTokenAdmin(res['token']);
        this.router.navigateByUrl('/mainadmin');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
}


}
