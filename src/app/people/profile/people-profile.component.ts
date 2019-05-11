import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleService} from "../people.service";
import {Profile} from "../../profile/profile";
import {AppURL} from "../../AppURL";

@Component({
  selector: 'app-people-profile',
  templateUrl: './people-profile.component.html',
  styleUrls: ['./people-profile.component.css']
})
export class PeopleProfileComponent implements OnInit {

  appUrl = AppURL;
  profile: Profile;
  constructor(
    private titleService: Title,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private peopleService: PeopleService,
  ) { }

  ngOnInit() {
    const id:string = this.activeRoute.snapshot.queryParamMap.get('id');
    if(id != null) {
      this.peopleService.findById(id)
        .subscribe(
          resp => this.profile = resp
        )
    }

  }
}
