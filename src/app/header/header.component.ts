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
background-color: rgba(255,255,255,0.5);
padding: 0;
margin: 0;

}

ul {
  list-style-type: none;
}
li {
  display: inline-block;
  padding-top: 2em;
  padding-bottom: 0em;
  padding-right: 2em;
  padding-left: 2em;
  margin-bottom: 0em;
}

  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
