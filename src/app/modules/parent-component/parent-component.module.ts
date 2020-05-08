import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { JokesService } from 'src/app/services/jokes/jokes.service';
import { SharedModule } from 'src/app/shared/app.shared.module';
import { ParentComponentComponent } from './parent-component.component';
import { ParentRoutingModule } from './parent-routing.module';

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
