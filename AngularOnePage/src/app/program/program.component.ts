import { Component, OnInit } from '@angular/core';
import {Program} from 'src/app/shared/program.model';
import { ProgramService } from 'src/app/shared/program.service';



var todayday=new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var buttons=[];
var verify=[];
var exist=false;
var day;
var first;
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var d = new Date();
@Component({
    selector: 'app-program',
    templateUrl: './program.component.html',
    styleUrls: ['./program.component.css', '../assets/stylesheets/program.css'],
    providers : [ProgramService]
  })
  export class ProgramComponent implements OnInit {
    showSucessMessage: boolean;
    serverErrorMessages: string;



    constructor(public programService: ProgramService,public dates: ProgramService) { }

    ngOnInit() {
      // this.refreshProgram();
      //window.location.reload();
      var tomorrow2 = new Date(); //console.log( tomorrow2.getDate());
      tomorrow2.setDate(todayday.getDate() -1);
      for(var i=0;i<7;i++){
        tomorrow2.setDate(tomorrow2.getDate() +1);
       //console.log( tomorrow2.getDate()+);
         day=String(tomorrow2.getDate());console.log(day);

        var monthday=month[tomorrow2.getMonth()];
var data=day.concat(' ',monthday);//console.log(data);
        var week=days[tomorrow2.getDay()];

var together=data.concat(' ',week);if(tomorrow2.getDate()<10){var x='0';together =x.concat(together);}
   verify.push(together);
      }


      console.log(verify);

      this.open(days[todayday.getDay()]);
    }

    public open(weekday) { this.programService.getProgramList().subscribe(
      res => {
console.log(weekday);
        for(var j=0;j<7;j++){
          var tomorrow = new Date();
          tomorrow.setDate(todayday.getDate() +j);//console.log("fdf" + days[tomorrow.getDay()]);
          if(days[tomorrow.getDay()]==weekday) {console.log("i found");break; }
        }

        this.programService.programs = res as Program[];
        for( var i = 0; i <  this.programService.programs.length; i++){
          this.programService.programs[i].buttons=verify;

        if(parseInt(this.programService.programs[i].date.slice(8,10))!=tomorrow.getDate() && i!=0)
                  {this.programService.programs.splice(i, 1);  i--; if(this.programService.programs.length==1 &&parseInt(this.programService.programs[0].date.slice(8,10))!=tomorrow.getDate()){exist=false;this.programService.programs[0].isDuplicate='nu afisa';console.log("dd"); } }
          else exist=true;        }

          //if(parseInt(this.programService.programs[0].date.slice(8,10))!=tomorrow.getDate() ){}
          console.log(this.programService.programs);


                  for( var i = 0; i <  this.programService.programs.length; i++){
                      for( var j = i+1; j <  this.programService.programs.length; j++){
                        if(this.programService.programs[i].movieName!=null){
                        if(this.programService.programs[i].movieName==this.programService.programs[j].movieName)this.programService.programs[j].isDuplicate='nu afisa';
                    }
                  }

                }
            //    if(parseInt(this.programService.programs[0].date.slice(8,10))!=tomorrow.getDate()){this.programService.programs[0].isDuplicate='nu afisa';}
              // console.log(this.programService.programs[0].isDuplicate);

    },
  err => {
    this.serverErrorMessages = err.error.message;
  });

    }
/* pt obtinerea unui cadru grafic care sa arate */
hasbeenprinted(isDuplicate,i){
//if(i==0)return false;
  //console.log(movie);
  //console.log(movie!=null);
return isDuplicate==null;
}

existt(){
  return exist;
}
lower(i){
  return i==0;
}
  }
