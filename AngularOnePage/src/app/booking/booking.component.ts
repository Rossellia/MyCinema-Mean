import { Component, OnInit } from '@angular/core';
import {Program} from 'src/app/shared/program.model';
import { ProgramService } from 'src/app/shared/program.service';
import { Router, ActivatedRoute, Params} from '@angular/router';var col:Array<number>;
var chair:Array<Number>;
var prod:any;
var verify:boolean;
prod=91;
verify=true;
//var col:Array<number>;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers : [ProgramService]
})

export class BookingComponent implements OnInit {

  constructor(protected programService: ProgramService, protected activatedRoute: ActivatedRoute, protected router:Router){}
  queryParamsStatus ='';
  id: any;
  program:Program;




  ngOnInit() {



this.activatedRoute.params.subscribe(params => {
          this.id = params['id'];
        //  console.log(this.id);
  });
   this.refreshProgramList();
  //this.getProgramID(this.id);



  }
/*
  getProgramID(id:string)
  {
   this.programService.getProgram(id).subscribe(
    res => {
      this.program = res as Program;
      console.log(this.program);
    }
   );
  }*/

  refreshProgramList() {
    this.programService.getProgramList().subscribe(
      res => {
      this.programService.programs = res as Program[];
     // console.log(this.programService.programs);
      for( var i = 0; i <  this.programService.programs.length; i++){
       //console.log(this.programService.programs[i]._id);
       if(this.programService.programs[i]._id==this.id){ this.program=this.programService.programs[i];
      //  this.program.seats=new Array();//prod=this.program.nr_row*this.program.nr_col
        //for(var j=0;j<prod;j++){
        //this.program.seats.push(0);}
      }

     }
     // console.log(this.program);
    });
  }

bookseat(row,col){ var x=row+1;
  if(this.program.seats[(row-1)*13+col])alert("This seat is already booked");

else  if (confirm('Are You Sure you want to book this seat? row:' +x+ 'col:'+ col )){
   this.program.seats[(row-1)*13+col]=1;
   this.program.nr_tickets++;console.log("sd"+this.program._id);
   //console.log(this.program.movieName);
  // this.programService.editProgram();
   this.programService.editProgram(this.program).subscribe((res) => {
    //this.router.navigateByUrl('/adminmovie');

  });
   //console.log(this.program.seats);
}
 }
 book(row,col){}

openpopup(){
  return true;// console.log("dsc");
}
isfree(row,col){

  //this.program.seats[(row-1)*10+col]=1;
  return this.program.seats[(row-1)*13+col]!=1;
}

}
