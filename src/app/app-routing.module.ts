import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './core/gaurds/auth-gaurd.service';
import { AccessRestrictedComponent } from './modules/access-restricted/access-restricted.component';
import { Access404Component } from './modules/access404/access404.component';
import { HomeComponent } from './modules/home/components/home-component.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGaurdService]},
  {path: 'jokes', loadChildren: () => import('./modules/jokes/jokes-component.module').then(m => m.JokesComponentModule)},
  {path: 'restricted', component: AccessRestrictedComponent, canActivate: [AuthGaurdService]},
  {path: '404', component: Access404Component, canActivate: [AuthGaurdService]},
  {path: '**', component: Access404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
