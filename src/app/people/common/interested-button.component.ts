import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../profile/profile";
import {InterestedService} from "../interested-service";

@Component({
  selector: 'app-interested-button',
  template: `
    <a class="btn btn-primary" (click)="addToInterestedList(profile)">Interested</a>
  `,
})
export class InterestedButtonComponent {
  @Input() profile: Profile;

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
