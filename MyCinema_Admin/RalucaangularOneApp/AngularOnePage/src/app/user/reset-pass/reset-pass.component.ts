import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {NgForm} from '@angular/forms';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css', '../../assets/stylesheets/ForgotPassword.css'],
  providers: [UserService]
})
export class ResetPassComponent implements OnInit {

  constructor(protected userService: UserService) { }
  emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  password:string;
  confirmpassword:string;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    // do something with the form result

 }

}
