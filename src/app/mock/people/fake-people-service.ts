import {HttpRequest, HttpResponse} from "@angular/common/http";
import {of, throwError} from "rxjs";
import {FakeService} from "../fake-service";
import {ApiURL} from "../../ApiURL";


export class FakePeopleService implements FakeService {

  profiles = [
    {
      id: "123456789",
      name: "Abdur Rahim",
      gender: "Male",
      dateOfBirth: "1980-01-02",
      description: "You can book your test drive by our official website",
      mainImage: "/assets/mock/42709532_298675120729615_8991445284634492928_n.jpg"
    },
    {
      id: "910112131415",
      name: "Sahina Begam",
      gender: "Female",
      dateOfBirth: "1980-01-02",
      mainImage: "assets/mock/12345.jpeg",
      description: "the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website"
    }];

  process(request: HttpRequest<any>){
    const { url, method, headers, body } = request;

    console.log(url);
    let id: string = url.split("/").pop();

    if(request.method == 'POST' || request.method == 'PUT') {
      return  this.save(body)
    }
    else if(request.method == 'GET' && id.trim() == '') {
      return this.findAll()
    }
    else if(request.method == 'GET' && id.trim() != '' ){
      return  this.findById(id)
    }
  }

  findAll(){
    return of(new HttpResponse({
        status: 200,
        body: this.profiles
      })
    );
  }

  findById(id: string){
    return of(new HttpResponse({
        status: 200,
        body: this.profiles.find(it => it.id == id)
      })
    );
  }

  save(body:any){
    console.log(body);

    if(body.name == null || body.name.trim() == ''){
      return throwError({
        status: 422,
        message: "Name is empty",
      })
    }

    return of(
      new HttpResponse({
        status: 200,
        body: body
      })
    );
  }


}
