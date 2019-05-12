import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';


@Component({
    templateUrl: 'confirm.registration.component.html'
})
export class ConfirmRegistrationComponent implements OnInit {

    user:any = {};
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router) {}

    ngOnInit() {
      // get token from url

      // set post request to the server

      // if response is ok, show congratulations message or show sorry message
    }
}
