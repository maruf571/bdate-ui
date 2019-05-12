import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiURL} from "../ApiURL";
import {Profile} from "../profile/profile";


@Injectable()
export class InterestedService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<any>{
    return this.http.get(ApiURL.interested);
  }

  findAllRequest(): Observable<any>{
    return this.http.get(ApiURL.interested_request);
  }

  addToInterestedList(profileId: string): Observable<any> {
    return this.http.post(ApiURL.interested + profileId, {profileId: profileId});
  }

  removeFromList(profileId: string): Observable<any>{
    return this.http.delete(ApiURL.interested + profileId);
  }


}
