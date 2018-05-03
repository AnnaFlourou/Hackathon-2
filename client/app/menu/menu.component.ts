import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  position = 'closed';
  buttonMenu = 'but0';
  menu = 'invisible';
  constructor() { }

  ngOnInit() {
  }
  pos() {
    if (this.position == 'closed') {
      this.position = 'open';
      this.buttonMenu = 'but1';
      this.menu = 'visible';
    } else {
      this.position = 'closed';
      this.buttonMenu = 'but0';
      this.menu = 'invisible';
    }
    console.log(this.position);
  }
}
