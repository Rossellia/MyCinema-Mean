import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css']
})
export class CarouselBasicComponent implements OnInit {
  
  constructor() { 
}

  ngOnInit() {
    var images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`); 
  }

}

/*@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
export class CarouselBasicComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}*/