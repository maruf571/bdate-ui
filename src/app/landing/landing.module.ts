import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutModule} from '../layout/layout.module';
import {FormsModule} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {LandingRoutingModule} from "./landing-routing.module";
import {LangingHomeComponent} from "./home/langing-home.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LandingRoutingModule,
    LayoutModule,
  ],
  declarations: [
    LangingHomeComponent,
  ],
  exports: [
  ],
  providers:[
    Title,
  ]
})
export class LandingModule { }
