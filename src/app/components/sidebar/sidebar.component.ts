import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES_RESTAURANTS: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/consultoria', title: 'Consultoria',  icon:'pan_tool', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

export const ROUTES_CLIENTS: RouteInfo[] = [
  { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
  { path: '/preferencias', title: 'Preferencias',  icon: 'dashboard', class: '' }
];

@Component({ 
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  shared: SharedService;
  menuItems: any[];

  constructor(
  ) { 
    this.shared = SharedService.getInstance()
  }

  ngOnInit() {

    if (this.shared.showTemplateUser){
      this.menuItems = ROUTES_RESTAURANTS.filter(menuItem => menuItem);
      
    } else {
      this.menuItems = ROUTES_CLIENTS.filter(menuItem => menuItem);
    }
    
    
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
