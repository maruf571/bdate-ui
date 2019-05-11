import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutModule} from '../layout/layout.module';
import {FormsModule} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {ProfileRoutingModule} from "./profile-routing.module";
import {ProfileCreateComponent} from "./profile-create/profile-create.component";
import {ProfileViewComponent} from "./profile-view/profile-view.component";
import {ProfileService} from "./profile-service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    LayoutModule,
  ],
  declarations: [
    ProfileCreateComponent,
    ProfileViewComponent,
  ],
  exports: [
  ],
  providers:[
    Title,
    ProfileService,
  ]
})
export class ProfileModule { }
