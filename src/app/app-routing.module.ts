import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppURL} from "./AppURL";
import {ForbiddenComponent} from "./auth/forbidden/forbidden.component";

const routes: Routes = [

  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: AppURL.landing, loadChildren: './landing/landing.module#LandingModule'},
  { path: AppURL.auth, loadChildren: './auth/auth.module#AuthModule' },
  { path: AppURL.profile, loadChildren: './profile/profile.module#ProfileModule' },
  { path: AppURL.people, loadChildren: './people/people.module#PeopleModule' },
  //{ path: 'project', loadChildren: './project/project.module#ProjectModule' },
  //{ path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  //{ path: 'order', loadChildren: './order/order.module#OrderModule' },
  //{ path: 'language', loadChildren: './language/language.module#LanguageModule' },
  //{ path: 'localization', loadChildren: './localization/localization.module#LocalizationModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
