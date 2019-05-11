import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '../layout/layout.module';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ConfirmRegistrationComponent} from './confirm-registration/confirm.registration.component';
import {ForgotPasswordComponent} from './forgot-password/forgot.password.component';
import {FormsModule} from '@angular/forms';
import {LogoutComponent} from './logout/logout.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthService} from "./auth.service";
import {MustMatchDirective} from "../directive/MustMatchDirective";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    LayoutModule,
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    ConfirmRegistrationComponent,
    ForgotPasswordComponent,
    ForbiddenComponent,
    MustMatchDirective
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
