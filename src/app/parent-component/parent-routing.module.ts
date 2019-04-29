import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ParentComponentComponent} from './parent-component.component';
import { AuthGaurdService } from '../gaurds/auth-gaurd.service';

const routes: Routes = [
    {path: '', component: ParentComponentComponent, canActivate: [AuthGaurdService], canDeactivate: [AuthGaurdService]},
    {path:'**', redirectTo: "/404"}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ParentRoutingModule {}