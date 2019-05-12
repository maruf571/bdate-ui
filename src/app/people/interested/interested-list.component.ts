import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {AppURL} from "../../AppURL";
import {Profile} from "../../profile/profile";
import {InterestedService} from "../interested-service";

@Component({
  selector: 'app-interested-list',
  templateUrl: './interested-list.component.html',
  styleUrls: ['./interested-list.component.css']
})
export class InterestedListComponent implements OnInit {
  profiles: Profile[] = [];
  appUrl = AppURL;
  constructor(
    private titleService: Title,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private interestedService: InterestedService
  ) { }

  ngOnInit() {
    this.interestedService.findAll()
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
}
