import { Component, OnInit} from '@angular/core';
import {AppURL} from "../../AppURL";

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit{

  appUrl = AppURL;
  ngOnInit() {
  
  }
}
