import {FakeService} from "../../fake-service";
import {HttpRequest, HttpResponse} from "@angular/common/http";
import {of, throwError} from "rxjs";
import {error} from "@angular/compiler/src/util";

export class FakeLoginService implements FakeService {

  process(request: HttpRequest<any>) {
    const {email, password} = request.body;
    console.log(request.body)

    return this.login(email, password);
  }


  login(email, password) {

    if (email == 'user@gmail.com' && password == '123456') {
      return of(
        new HttpResponse({
          status: 200,
          body: {
            email: email,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYmRhdGUuY29tIiwiaWF0IjoxNTU3NDkyNjE1LCJleHAiOjE2NTIxMDA2MTUsImF1ZCI6IiIsInN1YiI6InVzZXJAZ21haWwuY29tIiwiRW1haWwiOiJ1c2VyQGdtYWlsLmNvbSIsInJvbGVzIjoiWydST0xFX1VTRVInLCAnUk9MRV9GQUtFJ10ifQ.ECK1o1bHVtvt1ibZrY50dCB-jEpudEmVrhWqbjtrHEc'
          }
        }));
    }

    return throwError({
      status: 401,
      message: "Email or Password is incorrect"
    });
  }
}
