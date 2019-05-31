import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from "@angular/router";
import { AdminService } from '../../sharedadmin/admin.service';
import { Admin } from '../../sharedadmin/admin.model';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent implements OnInit {

  userDetails;
  constructor(private userService: UserService, private router: Router, private data: AdminService) { }
  message:string;
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);

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
