import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../profile/profile";
import {CrushedService} from "../crushed-service";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";

@Component({
  selector: 'app-crushed-button',
  template: `    
    <a class="btn btn-primary" (click)="addToList(profile)">
      <fa-icon [icon]="heart"></fa-icon>
      Crushed
    </a>
  `,
})
export class CrushedButtonComponent {
  @Input() profile: Profile;

  heart = faHeart;
  constructor(
    private crushedService: CrushedService
  ) { }

  addToList(profile){
    this.crushedService.addToList(profile.id)
      .subscribe(
        resp => console.log(resp)
      );
  }
}
