import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../assets/stylesheets/styleHome.css']
})
export class HomeComponent implements OnInit {

  images = [
  "../assets/images/cinema-room-2-2.jpg",
  "../assets/images/cinema-room-2-1.jpg",
  "../assets/images/cinema-room-1-2.jpg",
  "../assets/images/cinema-room-1-1.jpg"
]


  constructor() { }

  ngOnInit() {
  }

}
