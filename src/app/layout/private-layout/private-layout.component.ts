import { Component} from '@angular/core';
import {AppURL} from "../../AppURL";
import {faBell} from "@fortawesome/free-solid-svg-icons/faBell";

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: ['./private-layout.component.css']
})
export class PrivateLayoutComponent{
  appUrl = AppURL;
  bell = faBell;

}
