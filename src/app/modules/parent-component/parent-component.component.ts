import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { JokesService } from 'src/app/services/jokes/jokes.service';

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

  getJokes() {
    this.jokes.getJokes().subscribe(res => {
      this.joke =  res;
    });
  }

}
