import { Component, OnInit } from '@angular/core';

interface NavBar {
  text: string;
  routerLink: string;
  id: number;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  navBar: NavBar[] = [
    {
      text: '推荐',
      routerLink: '/hot',
      id: 10001
    },
    {
      text: '排行',
      routerLink: '/topic',
      id: 10002
    },
    {
      text: '搜索',
      routerLink: '/search',
      id: 10003
    }
  ];

  constructor() {}

  ngOnInit() {}
}
