import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'ni-tv-2 text-primary',
    class: '',
  },

  {
    path: 'user-profile',
    title: 'User profile',
    icon: 'ni-single-02 text-yellow',
    class: '',
  },
  {
    path: 'liste_foyer',
    title: 'Liste Foyer',
    icon: 'ni-bullet-list-67 text-red',
    class: '',
  },
  { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },
  {
    path: '/register',
    title: 'Register',
    icon: 'ni-circle-08 text-pink',
    class: '',
  },
  { path: 'foyer', title: 'Foyer', icon: 'ni-circle-08 text-pink', class: '' },

  { path: 'bloc', title: 'bloc', icon: 'ni-circle-08 text-pink', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[] = [];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}