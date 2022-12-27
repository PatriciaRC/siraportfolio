import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <app-header></app-header>
    <app-home></app-home>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'portfolio-sira';
}
