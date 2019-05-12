import {environment} from "../environments/environment";

export class AppURL {

  public static  auth = 'auth';
  public static  login = 'login';
  public static  logout = 'logout';
  public static  registration = 'registration';
  public static  forbidden = 'forbidden';
  public static  forgot_password = 'forgot-password';
  public static  confirm_registration = 'confirm-registration';

  public static  auth_login = AppURL.auth +'/'+ AppURL.login;
  public static  auth_logout =  AppURL.auth  +'/'+ AppURL.logout;
  public static  auth_registration =  AppURL.auth + '/' + AppURL.registration;
  public static  auth_forbidden =  AppURL.auth +'/'+ AppURL.forbidden;
  public static  auth_forgot_password =  AppURL.auth + '/' + AppURL.forgot_password;
  public static  auth_confirm_registration =  AppURL.auth + '/' +  AppURL.confirm_registration;

  public static  landing = '';
  public static  profile = 'profile';
  public static  people =  'people';
  public static update = 'update';
  public static interested = 'interested';
  public static crushed = 'crushed';
  public static request = 'request';

  public static  profile_update = AppURL.profile +'/' + AppURL.update;

  public static  people_profile = AppURL.people +'/' + AppURL.profile;
  public static  people_interested = AppURL.people +'/' + AppURL.interested;
  public static  people_crushed = AppURL.people +'/' + AppURL.crushed;

  public static  people_interested_request = AppURL.people +'/' + AppURL.interested +'/'+ AppURL.request;
  public static  people_crushed_request = AppURL.people +'/' + AppURL.crushed +'/'+ AppURL.request;






}
