import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from '../layout/auth-layout/auth-layout.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ConfirmRegistrationComponent} from './confirm-registration/confirm.registration.component';
import {ForgotPasswordComponent} from './forgot-password/forgot.password.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {LogoutComponent} from "./logout/logout.component";
import {AppURL} from "../AppURL";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,
    children:[
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: AppURL.login, component: LoginComponent },
      { path: AppURL.logout, component: LogoutComponent },
      { path: AppURL.registration, component: RegistrationComponent },
      { path: AppURL.confirm_registration, component: ConfirmRegistrationComponent },
      { path: AppURL.forgot_password, component: ForgotPasswordComponent },
      { path: AppURL.forbidden, component: ForbiddenComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
