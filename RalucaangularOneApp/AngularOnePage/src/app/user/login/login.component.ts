import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }
  model = {
    username : '',
    password: '',
    rememberMe: null
  };
  serverErrorMessages: string;

  ngOnInit() {
    if(this.userService.isLoggedIn()) {
    this.router.navigateByUrl('/main');
    }
  }
  public open(event) {
    if(this.model.rememberMe==null){this.model.rememberMe=true;}

    if(this.model.rememberMe==false){this.model.rememberMe=true;}
    else { this.model.rememberMe=false; }
  }
  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/main');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
