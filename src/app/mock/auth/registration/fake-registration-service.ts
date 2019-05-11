import {FakeService} from "../../fake-service";
import {HttpRequest, HttpResponse} from "@angular/common/http";
import {of, throwError} from "rxjs";

export class FakeRegistrationService implements FakeService {

  process(request: HttpRequest<any>) {
    const { url, method, headers, body } = request;
    console.log(body);

    return this.registration(body);
  }


  registration(body){

    if(body.email == 'user@gmail.com'){
      return throwError({
        status: 409,
        message: "Email already exist"
      })
    }

    return of(
      new HttpResponse({
        status: 200,
        body: body
      }));
  }

}
