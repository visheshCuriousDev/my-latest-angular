import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { JokesService } from 'src/app/services/jokes/jokes.service';

@Component({
  selector: 'app-jokes-component',
  templateUrl: './jokes-component.component.html',
  styleUrls: ['./jokes-component.component.css']
})
export class JokesComponent implements OnInit {

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
