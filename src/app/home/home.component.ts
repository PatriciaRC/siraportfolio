import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  
   <div class="hero-image">
</div>
  `,
  styles: [`
  .hero-image {
  height: 120%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: url('/assets/img/sirahome.png');

  }


  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
