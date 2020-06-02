import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  }, {
    path: 'form',
    component:  ContactFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
