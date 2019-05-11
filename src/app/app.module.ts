import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FakeBackendInterceptor} from "./mock/fake-backend-interceptor";
import {environment} from "../environments/environment";
import {HttpRequestInterceptor} from "./http-request-interceptor";
import {AuthInterceptor} from "./auth/auth-interceptor";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      //Fake interceptor
      provide: HTTP_INTERCEPTORS,
      useClass: environment.fake ? FakeBackendInterceptor : HttpRequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
