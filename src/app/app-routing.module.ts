import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './core/gaurds/auth-gaurd.service';
import { AccessRestrictedComponent } from './modules/access-restricted/access-restricted.component';
import { Access404Component } from './modules/access404/access404.component';
import { IntroComponent } from './modules/intro-component/intro-component.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: IntroComponent, canActivate: [AuthGaurdService]},
  {path: 'jokes', loadChildren: () => import('./modules/parent-component/parent-component.module').then(m => m.ParentComponentModule)},
  {path: 'restricted', component: AccessRestrictedComponent, canActivate: [AuthGaurdService]},
  {path: '404', component: Access404Component, canActivate: [AuthGaurdService]},
  {path: '**', component: Access404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
