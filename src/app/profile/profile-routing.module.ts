import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicLayoutComponent} from '../layout/public-layout/public-layout.component';
import {ProfileCreateComponent} from "./profile-create/profile-create.component";
import {ProfileViewComponent} from "./profile-view/profile-view.component";
import {PrivateLayoutComponent} from "../layout/private-layout/private-layout.component";
import {AppURL} from "../AppURL";

const routes: Routes = [
  {
    path: '', component: PrivateLayoutComponent,
    children:[
      { path:'', component: ProfileViewComponent },
      { path: AppURL.update, component: ProfileCreateComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
