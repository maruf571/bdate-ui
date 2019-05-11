import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {Profile} from "../profile";
import {ProfileService} from "../profile-service";
import {AppURL} from "../../AppURL";

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent implements OnInit {

  appUrl = AppURL;
  public profile: Profile = new Profile();
  error: string = "";
  constructor(
    private titleService: Title,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.queryParamMap.get('id');
    if(id != null){
      this.profileService.findById(id)
        .subscribe(resp => {
          this.profile = resp
        })
    }
  }

  onSubmit(profile: Profile){
    this.profileService.save(profile)
      .subscribe(
        resp => this.router.navigate(['/profile']),
        error => this.error = error.message
      );
  }


}
