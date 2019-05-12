import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppURL} from "./AppURL";

const routes: Routes = [

  { path: AppURL.landing, loadChildren: './landing/landing.module#LandingModule'},
  { path: AppURL.auth, loadChildren: './auth/auth.module#AuthModule' },
  { path: AppURL.profile, loadChildren: './profile/profile.module#ProfileModule' },
  { path: AppURL.people, loadChildren: './people/people.module#PeopleModule' },
  //{ path: 'order', loadChildren: './order/order.module#OrderModule' },
  //{ path: 'language', loadChildren: './language/language.module#LanguageModule' },
  //{ path: 'localization', loadChildren: './localization/localization.module#LocalizationModule' },
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
