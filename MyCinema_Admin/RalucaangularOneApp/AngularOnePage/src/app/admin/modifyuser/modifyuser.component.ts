import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserProfileService } from '../shared/user-profile.service';
import { UserProfile } from '../shared/user-profile.model';

declare var M: any;

@Component({
  selector: 'app-modifyuser',
  templateUrl: './modifyuser.component.html',
  styleUrls: ['./modifyuser.component.css'],
  providers: [UserProfileService]
})
export class ModifyuserComponent implements OnInit {

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshUserProfileList();
  }
  //
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.userProfileService.selectUserProfile = {
      _id: "",
      username: "",
      profilePicture: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      birthday: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.userProfileService.postUserProfile(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshUserProfileList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.userProfileService.putUserProfile(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshUserProfileList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshUserProfileList() {
    this.userProfileService.getUserProfileList().subscribe((res) => {
      this.userProfileService.userProfiles = res as UserProfile[];
    });
  }

  onEdit(usr: UserProfile) {
    this.userProfileService.selectUserProfile = usr;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.userProfileService.deleteUserProfile(_id).subscribe((res) => {
        this.refreshUserProfileList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
