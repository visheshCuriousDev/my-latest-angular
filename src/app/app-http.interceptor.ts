import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay, tap } from 'rxjs/operators';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    this.spinner.show();
    let self = this;

    return next.handle(request)
    .pipe(tap(
      evt => {
          /* If response is success */
          if(evt && evt["status"] == 200){
            self.spinner.hide();
          } else {
            delay(500);
          }
      },
      error => {
        self.spinner.hide();
      })
    );

  }
}