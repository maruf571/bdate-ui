import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from "../user";
import {AuthService} from "../auth.service";


@Component({
    templateUrl: 'registration.component.html'
})
export class RegistrationComponent {

  public user: User = new User();
  error: string = "";

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService
  ) { }

  onSubmit(user: User){
    this.authService.registration(user)
      .subscribe(
        resp => {
          this.router.navigate(['/auth/login'])
        },
        error => {
          console.log(error);
          this.error = error.message
        }
      )
  }
}
