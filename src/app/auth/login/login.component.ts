import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from "../user";
import {AuthService} from "../auth.service";
import {error} from "@angular/compiler/src/util";
import {AppURL} from "../../AppURL";


@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    user: User = new User();
    loading = false;
    submitted = false;
    returnUrl: string;
    error: string = '';

    constructor(
        private activeRoute: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) {}

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'] || AppURL.people;
    }

  onSubmit(user: User){
      this.authService.login(user.email, user.password)
        .subscribe(
          resp => this.router.navigate([this.returnUrl]),
          error => {
            console.log(error.message);
            this.error = error.message;
            this.loading = false;
          }
        )
  }
}
