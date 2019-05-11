import {HttpRequest} from "@angular/common/http";

export interface FakeService {
  process(request: HttpRequest<any>)
}
