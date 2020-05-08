import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from 'src/app/core/gaurds/auth-gaurd.service';
import { ParentComponentComponent } from './parent-component.component';

const routes: Routes = [
    {path: '', component: ParentComponentComponent, canActivate: [AuthGaurdService], canDeactivate: [AuthGaurdService]},
    {path: '**', redirectTo: '/404'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ParentRoutingModule {}
