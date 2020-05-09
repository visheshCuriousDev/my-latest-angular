import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Injectable({ providedIn: 'root' })
export class MyHttpInterceptor implements HttpInterceptor {

  constructor(
    private snackbarService: SnackbarService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const self = this;

    /* CAN DO
      Modify request to add headers here
    */

    /* Return the request to process */
    return next.handle(request)
    .pipe(tap(
      (evt: any) => {
          /* If response is success */
          if (evt && evt.status == 200) {
            /* If scussess do anything */
          } else {
            delay(500);
          }
      },
      (error: any) => {
        /* Failed http */
        if (error.message) {
          this.snackbarService.showError(error.message);
        } else {
          this.snackbarService.showError();
        }
      })
    );

  }
}
