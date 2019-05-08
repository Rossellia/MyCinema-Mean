import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css' , '../assets/stylesheets/myCinemaSettings.css']
})

export class SettingsComponent implements OnInit {
  firstName = 'John';
  lastName = 'Doe';
  email = 'johndoe@yahoo.com';
  phoneNumber = '+40712345678';
  birthday = '01/01/2000';

  enteredFirstName = '';
  enteredLastName = '';
  enteredEmail = '';
  enteredPhoneNumber = '';
  enteredBirthday = '';

  constructor() { }

  ngOnInit() {
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

}
