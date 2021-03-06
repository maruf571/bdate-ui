import {environment} from "../environments/environment";

export class ApiURL {

  public static  login = environment.BASE_URL + '/login';
  public static  logout = environment.BASE_URL + '/logout';
  public static  registration = environment.BASE_URL + '/registration';
  public static  confirm_registration = environment.BASE_URL + '/confirm-registration';
  public static  forgot_password = environment.BASE_URL + '/forgot-password';
  public static  forbidden = environment.BASE_URL + '/forbidden';

  public static  profile = environment.BASE_URL + '/profiles/';
  public static  people = environment.BASE_URL + '/people/';


  public static  interested = environment.BASE_URL + '/people/interested/';
  public static  interested_request = environment.BASE_URL + '/people/interested/request/';

  public static  crushed = environment.BASE_URL + '/people/crushed/';
  public static  crushed_request = environment.BASE_URL + '/people/crushed/request/';
}
