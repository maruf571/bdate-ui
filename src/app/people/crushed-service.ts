import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiURL} from "../ApiURL";


@Injectable()
export class CrushedService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<any>{
    return this.http.get(ApiURL.crushed);
  }

  findAllRequest(): Observable<any>{
    return this.http.get(ApiURL.crushed_request);
  }

  addToList(profileId: string): Observable<any> {
      return this.http.post(ApiURL.crushed + profileId, {profileId: profileId})
  }

  removeFromList(profileId: string): Observable<any>{
    return this.http.delete(ApiURL.crushed + profileId);
  }

}
