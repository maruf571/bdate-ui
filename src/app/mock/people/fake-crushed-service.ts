import {HttpRequest, HttpResponse} from "@angular/common/http";
import {of, throwError} from "rxjs";
import {FakeService} from "../fake-service";
import {ApiURL} from "../../ApiURL";


export class FakeCrushedService implements FakeService {

  profiles = [
    {
      id: "910112131415",
      name: "Sahina Begam",
      gender: "Female",
      dateOfBirth: "1980-01-02",
      mainImage: "assets/mock/12345.jpeg",
      description: "the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website"
    }
    ];

  process(request: HttpRequest<any>){
    const { url, method, headers, body } = request;
    console.log(method +" "+ url);

    let id: string = url.split("/").pop();

    if(method == 'POST' || request.method == 'PUT') {
      return  this.save(body)
    }
    else if(method == 'GET' && id.trim() == '') {
      return this.findAll()
    }
    else if(method == 'GET' && id.trim() != '' ){
      return  this.findById(id)
    }
    else if(method == 'DELETE'){
      return this.remove(id)
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

    return of(
      new HttpResponse({
        status: 200,
        body: body
      })
    );
  }

  remove(id: string){
    return of(
      new HttpResponse({
        status: 200,
      })
    );
  }


}
