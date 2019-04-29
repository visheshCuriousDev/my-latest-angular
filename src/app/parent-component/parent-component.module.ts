import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParentRoutingModule} from './parent-routing.module';
import { ParentComponentComponent } from './parent-component.component';
import { JokesService } from '../services/jokes/jokes.service';
import { SharedModule } from '../app.shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ParentComponentComponent],
  imports: [
    CommonModule,
    ParentRoutingModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [JokesService]
})
export class ParentComponentModule { }
