import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {AppURL} from "../../AppURL";
import {Profile} from "../../profile/profile";
import {CrushedService} from "../crushed-service";
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";

@Component({
  selector: 'app-interested-requested-list',
  templateUrl: './crush-requested.component.html',
  styleUrls: ['./crush-requested.component.css']
})
export class CrushRequestedComponent implements OnInit {
  profiles: Profile[] = [];
  appUrl = AppURL;

  constructor(
    private titleService: Title,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private crushedService: CrushedService
  ) { }

  ngOnInit() {
    this.crushedService.findAllRequest()
      .subscribe(
        resp => this.profiles = resp
      )
  }

  removeFromList(profile){
    this.crushedService.removeFromList(profile.id)
      .subscribe(
        resp => this.ngOnInit()
      )
  }
}
