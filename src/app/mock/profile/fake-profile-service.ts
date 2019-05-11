import {HttpRequest, HttpResponse} from "@angular/common/http";
import {of, throwError} from "rxjs";
import {FakeService} from "../fake-service";


export class FakeProfileService implements FakeService {

  me = {
    id: "910112131415",
    name: "Sahina Begam",
    gender: "Female",
    mainImage: "/assets/mock/42709532_298675120729615_8991445284634492928_n.jpg",
    dateOfBirth: "1980-01-02"
  };

  process(request: HttpRequest<any>){
    const { url, method, headers, body } = request;
    console.log(url);
    console.log(body);

    if(request.method == 'POST' || request.method == 'PUT') {
      return this.save(body)
    }

    else if(request.method == 'GET') {
      return this.myInfo();
    }
  }

  save(body){
    if(body.name == null || body.name.trim() == ''){
      return throwError({
        status: 422,
        message: "Name is empty",
      })
    }

    console.log(body);
    return of(
      new HttpResponse({
        status: 200,
        body: body
      })
    );
  }

  myInfo(){
    return of(new HttpResponse({
        status: 200,
        body: this.me
      })
    );
  }
}
