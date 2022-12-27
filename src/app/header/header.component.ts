import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar">
      <ul class="navbar-items">
        <li>Portfolio</li>
        <li>Contact</li>
        <li class="about">About me</li>
      </ul>
    </div>
  `,
  styles: [`

.navbar {

display: flex;
justify-content: flex-end;
font-family: 'Epilogue';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 148.5%;
color: #252525;

}

ul {
  list-style-type: none;
}
li {
  display: inline-block;
  padding: 2em;
}

  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
