import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FakeProfileService} from "./profile/fake-profile-service";
import {FakeService} from "./fake-service";
import {ApiURL} from "../ApiURL";
import {FakeRegistrationService} from "./auth/registration/fake-registration-service";
import {FakeLoginService} from "./auth/login/fake-login-service";
import {FakePeopleService} from "./people/fake-people-service";

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    console.log(url)
    let fs: FakeService;
    switch (true) {
      case url.endsWith(ApiURL.registration):
        fs = new FakeRegistrationService();
        break;

      case url.endsWith(ApiURL.login):
        fs = new FakeLoginService();
        break;

      case url.match(/\/profiles\/*/) != null:
        fs = new FakeProfileService();
        break;

      case url.match(/\/people\/*/) != null:
        fs = new FakePeopleService();
        break;

      default:
        return ;
    }

    console.log("-- processing mock service --");
    return fs.process(request);
  }
}

