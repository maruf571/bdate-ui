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
import {InterestedListComponent} from "./interested/interested-list.component";
import {CrashListComponent} from "./crashed/crash-list.component";
import {InterestedButtonComponent} from "./common/interested-button.component";
import {CrushedButtonComponent} from "./common/crushed-button.component";
import {InterestedService} from "./interested-service";
import {CrushedService} from "./crushed-service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PeopleRoutingModule,
    LayoutModule,
  ],
  declarations: [
    PeopleHomeComponent,
    PeopleProfileComponent,
    InterestedListComponent,
    CrashListComponent,
    InterestedButtonComponent,
    CrushedButtonComponent,
  ],
  exports: [
  ],
  providers:[
    Title,
    PeopleService,
    CrushedService,
    InterestedService,
    AuthGuard,
  ]
})
export class PeopleModule { }
