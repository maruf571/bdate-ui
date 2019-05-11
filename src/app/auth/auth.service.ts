import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiURL} from "../ApiURL";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import * as jwt_decode from "jwt-decode";

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  registration(user): Observable<any> {
    return this.http.post(ApiURL.registration, user)
  }

  login(email: string, password: string) {
    return this.http.post<any>(ApiURL.login, {email, password})
      .pipe(
        map(resp => this.setSession(resp))
      );
  }

  logout() {
    localStorage.removeItem("userRoles");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  }


  private setSession(authResult) {
    let tokenInfo = this.getDecodedAccessToken(authResult.token);
    localStorage.setItem('userRoles', JSON.stringify(tokenInfo.roles));
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('refreshToken', authResult.refreshToken);
  }

  public isLoggedIn() {
      let token = localStorage.getItem('token');
      if(token == null)
          return false;

      return true;
      //return moment().isBefore(this.getExpiration(token));
  }

  /*
   isLoggedOut() {
       return !this.isLoggedIn();
   }

   getExpiration(token: any) {
       let tokenInfo = this.getDecodedAccessToken(token);
       let expireDate = tokenInfo.exp;
       return moment(expireDate);
   }

   */


  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
