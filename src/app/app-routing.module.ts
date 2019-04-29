import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from './gaurds/auth-gaurd.service';
import { IntroComponent } from './intro-component/intro-component.component';
import { AccessRestrictedComponent } from './access-restricted/access-restricted.component';
import { Access404Component } from './access404/access404.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: IntroComponent, canActivate: [AuthGaurdService]},
  {path:'jokes', loadChildren:'./parent-component/parent-component.module#ParentComponentModule'},
  {path:'restricted', component: AccessRestrictedComponent, canActivate: [AuthGaurdService]},
  {path:'404', component: Access404Component, canActivate: [AuthGaurdService]},
  {path:'**', component: Access404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
