import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './partial/footer/footer.component';
import {NavbarComponent} from './partial/navbar/navbar.component';
import {SidebarComponent} from './partial/sidebar/sidebar.component';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {PublicLayoutComponent} from './public-layout/public-layout.component';
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {AuthService} from "../auth/auth.service";
import {PrivateLayoutComponent} from "./private-layout/private-layout.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AdminLayoutComponent,
    PublicLayoutComponent,
    AuthLayoutComponent,
    PrivateLayoutComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AdminLayoutComponent,
    PublicLayoutComponent,
    AuthLayoutComponent,
    PrivateLayoutComponent,
  ],
  providers:[
    AuthService
  ]
})
export class LayoutModule { }
