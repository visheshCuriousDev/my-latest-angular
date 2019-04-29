import { Component, OnInit } from '@angular/core';
import { JokesService } from '../services/jokes/jokes.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  joke: any;

  constructor(
    private jokes: JokesService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getJokes();
  }

  getJokes(){
    this.jokes.getJokes().subscribe(res=>{
      this.joke =  res;
    });
  }

}
