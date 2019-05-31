import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { UserService } from "../../shared/user.service";
import { User } from "../../shared/user.model";
import { Router } from "@angular/router";

declare var M: any;

@Component({
  selector: "app-modifyuser",
  templateUrl: "./modifyuser.component.html",
  styleUrls: ["./modifyuser.component.css"],
  providers: [UserService]
})

export class ModifyuserComponent implements OnInit {
  constructor(
    protected userProfileService: UserService,
    private data: UserService,
    private router: Router
  ) {}
  serverErrorMessages: string;
  ngOnInit() {
    this.resetForm();
    this.refreshUserProfileList();
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.userProfileService.selectedUser = {
      _id: "",
      username: "",
      profilePicture: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      birthday: "",
      password: "",
      confirmPassword: ""
    };
  }

  onSubmit(form: NgForm) {
    this.resetForm();
    this.refreshUserProfileList();
  }

  refreshUserProfileList() {
    this.userProfileService.getUserProfileList().subscribe(
      res => {
        this.userProfileService.userProfiles = res as User[];
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  onEdit(usr: User) {
    this.userProfileService.selectedUser = usr;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm("Are you sure to delete this record ?") == true) {
      this.userProfileService.deleteUserProfile(_id).subscribe(
        res => {
          M.toast({ html: "Deleted successfully", classes: "rounded" });
        },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      );
    }
  }
}
