import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {AppURL} from "../../AppURL";

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.css']
})
export class PublicLayoutComponent implements OnInit{

  isLogin = false;
  appUrl = AppURL;
  constructor(
    private authService: AuthService
  ){}

  ngOnInit() {
    this.isLogin =  this.authService.isLoggedIn();
  }
}
