import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css' , '../assets/stylesheets/myCinemaSettings.css'],
  providers: [UserService]
})

export class SettingsComponent implements OnInit {
  firstName = 'John';
  lastName = 'Doe';
  email = 'johndoe@yahoo.com';
  phoneNumber = '+40712345678';
  birthday = '01/01/2000';
  userName = 'User';

  enteredFirstName = '';
  enteredLastName = '';
  enteredEmail = '';
  enteredPhoneNumber = '';
  enteredBirthday = '';

  constructor(private userService: UserService, private router: Router, private data: UserService) { }
  userDetails;
  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(JSON.stringify(this.userDetails, undefined, 2));
        console.log('Ceva');
        this.userName = this.userDetails.username;
        this.firstName = this.userDetails.firstName;
        this.lastName = this.userDetails.lastName;
        this.email = this.userDetails.email;
        this.phoneNumber = this.userDetails.phoneNumber;
        this.birthday = this.userDetails.birthday;
      },
      err => { 
        console.log(err);
      }
    );
  }

  onDiscard(){
    this.enteredFirstName = this.firstName;
    this.enteredLastName = this.lastName;
    this.enteredEmail = this.email;
    this.enteredPhoneNumber = this.phoneNumber;
    this.enteredBirthday = this.birthday;
  }

  onSave(){
    this.firstName = this.enteredFirstName;
    this.lastName = this.enteredLastName;
    this.email = this.enteredEmail;
    this.phoneNumber = this.enteredPhoneNumber;
    this.birthday = this.enteredBirthday;
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}