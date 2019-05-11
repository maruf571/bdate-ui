import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutModule} from '../layout/layout.module';
import {FormsModule} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {PeopleRoutingModule} from "./people-routing.module";
import {PeopleProfileComponent} from "./profile/people-profile.component";
import {PeopleHomeComponent} from "./home/people-home.component";
import {PeopleService} from "./people.service";
import {AuthGuard} from "../auth/auth-guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PeopleRoutingModule,
    LayoutModule,
  ],
  declarations: [
    PeopleHomeComponent,
    PeopleProfileComponent
  ],
  exports: [
  ],
  providers:[
    Title,
    PeopleService,
    AuthGuard,
  ]
})
export class PeopleModule { }
