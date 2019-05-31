import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { UserService } from "../../shared/user.service";
import { User } from "../../shared/user.model";


@Component({
  selector: "app-ediprofile",
  templateUrl: "./ediprofile.component.html",
  styleUrls: ["./ediprofile.component.css"],
  providers: [UserService]
})
export class EdiprofileComponent implements OnInit {
  constructor(
    protected userProfileService: UserService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router
  ) {}
  queryParamsStatus = "";
  id: any;
  user: User;

  ngOnInit() {
    this.resetForm();
    this.refreshUserProfileList();
    this.activatedRoute.params.subscribe(params => {
      this.id = params["id"];
    });
    this.getMovieID(this.id);
  }

  getMovieID(_id: string) {
    this.userProfileService.getUser(_id).subscribe(res => {
      this.user = res as User;
    });
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

  refreshUserProfileList() {
    this.userProfileService.getUserProfileList().subscribe(res => {
      this.userProfileService.userProfiles = res as User[];
    });
  }

  onSubmit(form: NgForm) {
    form.value.username = this.user.username;
    this.userProfileService.putUserProfile(form.value).subscribe(res => {
      this.router.navigateByUrl("/modifyuser");
    });
  }
}
