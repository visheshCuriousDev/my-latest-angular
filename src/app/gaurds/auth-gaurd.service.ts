import { AuthService } from '../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ComfirmDialogComponent } from '../utilities/comfirm-dialog/comfirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {


  constructor(private _authService: AuthService,
    private _router: Router,
    private dialog: MatDialog) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authService.isvaidRoute()) {
        return true;
    }

    // navigate to error page
    this._router.navigate(['/restricted']);
    return false;
  }

  canDeactivate(
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot,
    State: RouterStateSnapshot
  ) {

    // Trying to implement adding a custom dialogbox inside canDeactivate

    // const dialogRef = this.dialog.open(ComfirmDialogComponent, {
    //   width: '500px'
    // });
    // dialogRef.componentInstance.confirmText = "Are you sure, you want to leave? Chuck has lot more tricks up his sleave.";


    // if( dialogRef.afterClosed().map(result => {
    //   return result;
    // })){
    //   return true;
    // };

    // return false;
    
    if (confirm("Are you sure, you want to leave? Chuck has lot more tricks up his sleave.")) {
        return true;
    } else {
      return false;
    }

  }

}