import { Router, RouterModule, Routes } from '@angular/router';
import { NavbarAdminComponent } from './../navbar-admin/navbar-admin.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  position = 'open';
  buttonMenu = 'but0';
  menu = 'invisible';
  route;
  constructor(private router: Router) {}

  ngOnInit() {
  }
  pos() {
    if (this.position == 'open') {
      this.position = 'closed';
      this.buttonMenu = 'but1';
      this.menu = 'visible';
    } else {
      this.position = 'open';
      this.buttonMenu = 'but0';
      this.menu = 'invisible';
    }
  }
  click(route) {
    this.router.navigate([route]);
    this.pos();
  }
}
