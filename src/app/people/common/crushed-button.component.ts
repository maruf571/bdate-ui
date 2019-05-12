import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../profile/profile";
import {CrushedService} from "../crushed-service";

@Component({
  selector: 'app-crushed-button',
  template: `
    <a class="btn btn-primary" (click)="addToCrashList(profile)">Crushed</a>
  `,
})
export class CrushedButtonComponent {
  @Input() profile: Profile;

  constructor(
    private crushedService: CrushedService
  ) { }

  addToCrashList(profile){
    this.crushedService.addToCrashList(profile.id)
      .subscribe(
        resp => console.log(resp)
      );
  }
}
