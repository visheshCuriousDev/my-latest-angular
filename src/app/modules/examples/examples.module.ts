import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/app.shared.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ExamplesRoutingModule } from './examples-routing.module';

@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    SharedModule,
  ]
})
export class ExamplesModule { }
