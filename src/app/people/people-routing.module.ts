import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PeopleProfileComponent} from "./profile/people-profile.component";
import {PeopleHomeComponent} from "./home/people-home.component";
import {PrivateLayoutComponent} from "../layout/private-layout/private-layout.component";
import {AuthGuard} from "../auth/auth-guard";
import {AppURL} from "../AppURL";
import {UserRole} from "../UserRole";

const routes: Routes = [
  {
    path: '', component: PrivateLayoutComponent,
    canActivate:[AuthGuard],
    data:{
      requiredRoles:[UserRole.user]
    },
    children:[
      { path:'', component: PeopleHomeComponent },
      { path:AppURL.profile, component: PeopleProfileComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
