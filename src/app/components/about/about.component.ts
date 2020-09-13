import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {

  name:string = 'Capitan America'
  pi: number = 4.1456757456756;
  pii: number = -4.1456757456756;
  e: number = 2.718281828459045;
  a: number = 0.259;
  b: number = 1.3495;
  today: Date = new Date();

  greeting: Promise<string>|null = null;
  arrived: boolean = false;
  private resolve: Function|null = null;
  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }
}
