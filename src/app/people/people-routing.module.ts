import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PeopleProfileComponent} from "./profile/people-profile.component";
import {PeopleHomeComponent} from "./home/people-home.component";
import {PrivateLayoutComponent} from "../layout/private-layout/private-layout.component";
import {AuthGuard} from "../auth/auth-guard";
import {AppURL} from "../AppURL";
import {UserRole} from "../UserRole";
import {InterestedListComponent} from "./interested/interested-list.component";
import {CrushListComponent} from "./crushed/crush-list.component";
import {CrushRequestedComponent} from "./crushed-request/crush-requested.component";
import {InterestedRequestedComponent} from "./interested-request/interested-requested.component";

const routes: Routes = [
  {
    path: '', component: PrivateLayoutComponent,
    canActivate:[AuthGuard],
    data:{
      requiredRoles:[UserRole.user]
    },
    children:[
      { path:'', component: PeopleHomeComponent },
      { path:AppURL.profile, component: PeopleProfileComponent },
      { path:AppURL.interested, component: InterestedListComponent },
      { path:AppURL.interested +'/'+ AppURL.request, component: InterestedRequestedComponent },
      { path:AppURL.crushed, component: CrushListComponent },
      { path:AppURL.crushed +'/'+ AppURL.request, component: CrushRequestedComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
