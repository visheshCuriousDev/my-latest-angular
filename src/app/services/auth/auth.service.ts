import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  /** Check if the routing is valid  */
  isvaidRoute(){
    console.log(window.location.pathname);
    /** Add logic to filterr routes */
    if(window.location.pathname.includes("restricted")){
      this.router.navigate(["/restricted"]);
      return false;
    }

    return true;
    
  }

}
