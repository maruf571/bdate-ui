import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../profile/profile";
import {InterestedService} from "../interested-service";
import {faGrinHearts} from "@fortawesome/free-solid-svg-icons/faGrinHearts";

@Component({
  selector: 'app-interested-button',
  template: `
    <a class="btn btn-primary" (click)="addToInterestedList(profile)">
      <fa-icon [icon]="grinHeart"></fa-icon>
      Interested
    </a>
  `,
})
export class InterestedButtonComponent {
  @Input() profile: Profile;

  grinHeart = faGrinHearts;
  constructor(
    private interestedService: InterestedService
  ) { }

  addToInterestedList(profile){
    this.interestedService.addToInterestedList(profile.id)
      .subscribe(
        resp => console.log(resp)
      );
  }
}
