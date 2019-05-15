import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-adminsearchbar',
  templateUrl: './adminsearchbar.component.html',
  styleUrls: ['./adminsearchbar.component.css']
})
export class AdminsearchbarComponent implements OnInit {

  userDetails;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getmainadmin().subscribe(
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
    this.router.navigate(['/loginadmin']);
}

}
