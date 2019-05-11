import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicLayoutComponent} from '../layout/public-layout/public-layout.component';
import {LangingHomeComponent} from "./home/langing-home.component";
import {AppURL} from "../AppURL";

const routes: Routes = [
  {
    path: '', component: PublicLayoutComponent,
    children:[
      { path: AppURL.landing, component: LangingHomeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
