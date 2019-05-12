import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {AppURL} from "../../AppURL";
import {Profile} from "../../profile/profile";
import {CrushedService} from "../crushed-service";

@Component({
  selector: 'app-interested-list',
  templateUrl: './crush-list.component.html',
  styleUrls: ['./crush-list.component.css']
})
export class CrushListComponent implements OnInit {
  profiles: Profile[] = [];
  appUrl = AppURL;

  constructor(
    private titleService: Title,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private crushedService: CrushedService
  ) { }

  ngOnInit() {
    this.crushedService.findAll()
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
