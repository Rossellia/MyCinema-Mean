import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";

import { User } from '../shared/user.model';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'
],
  providers: [UserService]
})
export class SearchbarComponent implements OnInit {

  userDetails;
  Profile;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];

      },
      err => {
        console.log(err);

      }
    );
  }
  onLogout(){
    this.userService.deleteTokenAdmin();
    this.router.navigate(['/login']);
}

}
