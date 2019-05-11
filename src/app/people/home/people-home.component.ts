import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {Profile} from "../../profile/profile";
import {PeopleService} from "../people.service";
import {AppURL} from "../../AppURL";

@Component({
  selector: 'app-people-home',
  templateUrl: './people-home.component.html',
  styleUrls: ['./people-home.component.css']
})
export class PeopleHomeComponent implements OnInit {

  profiles: Profile [] = [];
  appUrl = AppURL;
  constructor(
    private titleService: Title,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.peopleService.findAll()
      .subscribe( resp => this.profiles = resp)
  }
}
