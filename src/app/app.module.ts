import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IntroComponent } from './intro-component/intro-component.component';
import { LoadingComponent } from './loading/loading.component';
import { MyHttpInterceptor } from './app-http.interceptor';
import { AccessRestrictedComponent } from './access-restricted/access-restricted.component';
import { Access404Component } from './access404/access404.component';
import {
  MatCheckboxModule,
  MatListModule
} from '@angular/material';
import { SharedModule } from './app.shared.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    LoadingComponent,
    AccessRestrictedComponent,
    Access404Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatCheckboxModule,
    MatListModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
