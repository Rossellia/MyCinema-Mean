import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {NgForm} from '@angular/forms';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['../../assets/stylesheets/ForgotPassword.css', './forgot.component.css'],
  providers: [UserService]
})
export class ForgotComponent implements OnInit {

  emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(protected userService: UserService ) { }


  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    // do something with the form result
    
 }

}
