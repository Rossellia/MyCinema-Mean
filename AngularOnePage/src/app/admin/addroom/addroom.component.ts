import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AddroomService } from '../shared/addroom.service';
import { Addroom } from '../shared/addroom.model';

declare var M: any;

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css'],
  providers: [AddroomService]
})
export class AddroomComponent implements OnInit {

  constructor(private addroomService: AddroomService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshAddroomList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.addroomService.selectedAddroom = {
      _id: "",
      name: "",
      seats: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.addroomService.postAddroom(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshAddroomList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.addroomService.putAddroom(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshAddroomList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshAddroomList() {
    this.addroomService.getAddroomList().subscribe((res) => {
      this.addroomService.addrooms = res as Addroom[];
    });
  }

  onEdit(emp: Addroom) {
    this.addroomService.selectedAddroom = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.addroomService.deleteAddroom(_id).subscribe((res) => {
        this.refreshAddroomList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
