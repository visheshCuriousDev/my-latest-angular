import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public router: Router,
    public sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
  }

  get sidebarStatus(): boolean {
    return this.sidebarService.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarService.closeSidebar();
  }

}
