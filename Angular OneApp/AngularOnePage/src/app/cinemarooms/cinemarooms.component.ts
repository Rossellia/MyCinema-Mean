import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinemarooms',
  templateUrl: './cinemarooms.component.html',
  styleUrls: ['./cinemarooms.component.css' ]
})
export class CinemaroomsComponent implements OnInit {

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
