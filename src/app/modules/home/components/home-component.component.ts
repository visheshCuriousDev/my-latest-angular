import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponent implements OnInit {

  features: string[] = [
    'Lazy Loading',
    'PWA enabled',
    'Router auth gaurd (canActivate & canDeactivate)',
    'Default error routing done for invalid paths',
    'HTTP client module',
    'HTTP client module interceptor',
    'Sample API Implemented',
    'Included latest angular meterial',
    'Included shared modules'
  ];

  constructor() { }

  ngOnInit() {
  }

}
