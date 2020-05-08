import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-component',
  templateUrl: './intro-component.component.html',
  styleUrls: ['./intro-component.component.css']
})
export class IntroComponent implements OnInit {

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
