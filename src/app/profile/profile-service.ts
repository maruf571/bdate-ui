import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Profile} from "./profile";
import {HttpClient} from "@angular/common/http";
import {ApiURL} from "../ApiURL";


@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) {
  }


  findById(id: string): Observable<any> {
    return this.http.get(ApiURL.profile + id)
  }

  save(profile: Profile): Observable<any> {
    if (profile.id == null) {
      console.log(profile);
      return this.http.post(ApiURL.profile, profile)
    } else {
      return this.http.put(ApiURL.profile, profile)
    }
  }

}
