import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {ApiURL} from "../ApiURL";
import {AppURL} from "../AppURL";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    protected router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let token = localStorage.getItem('token');
    if (token == null) {
      this.router.navigate([AppURL.login], {queryParams: {returnUrl: state.url}});
      return false;
    }

    let userRoles = JSON.parse(localStorage.getItem('userRoles'));
    console.log(userRoles);
    if (userRoles == null || userRoles.length == 0) {
      this.router.navigate([AppURL.forbidden]);
      return false;
    }

    let requiredRoles = route.data.requiredRoles;
    let match = this.roleMatch(requiredRoles, userRoles);
    if (match) {
      return true;
    } else {
      this.router.navigate([AppURL.forbidden]);
      return false;
    }
  }

  roleMatch(requiredRoles, userRoles): boolean {
    let isMatch = false;
    requiredRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
