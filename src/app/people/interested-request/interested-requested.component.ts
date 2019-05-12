import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {AppURL} from "../../AppURL";
import {Profile} from "../../profile/profile";
import {InterestedService} from "../interested-service";

@Component({
  selector: 'app-interested-requested-list',
  templateUrl: './interested-requested.component.html',
  styleUrls: ['./interested-requested.component.css']
})
export class InterestedRequestedComponent implements OnInit {
  profiles: Profile[] = [];
  appUrl = AppURL;
  constructor(
    private titleService: Title,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private interestedService: InterestedService
  ) { }

  ngOnInit() {
    this.interestedService.findAllRequest()
      .subscribe(
        resp => this.profiles = resp
      );
  }

  removeFromList(profile: Profile){
    this.interestedService.removeFromList(profile.id)
      .subscribe(
        resp => this.ngOnInit()
      )
  }

  startChat(profile) {

  }
}
