import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../assets/stylesheets/SignUp.css', '/register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  isChecked: boolean;


  constructor(public userService: UserService, private router: Router) { }


  ngOnInit() {
    this.isChecked = null;
  }
  onSubmit(form: NgForm) {
    if(this.isChecked == null) { this.isChecked = false;}

    if(this.isChecked==false) { alert('You have to check terms and conditions'); }
    else{
    this.userService.postUser(form.value).subscribe(
      res => {
        console.log(form.value);
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        this.resetForm(form);
        this.isChecked = null;
        this.router.navigateByUrl('/login');
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        }
       }
    );

  }
  }
  public open(event) {
    this.isChecked = true;

  }
  public verify(event){
    if(this.isChecked==false)alert('You have to check terms and conditions')
  }


  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      username: '',
      password: '',
      confirmPassword:'',
      //rememberMe:false,
      profilePicture:'',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber:'',
      birthday:'',
      _id: ''

    };
    form.resetForm();
    this.serverErrorMessages = '';
    this.isChecked = null;
  }

}
