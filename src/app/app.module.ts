import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BeerComponent } from './components/beer/beer.component'
import { FormsModule } from '@angular/forms'
import { GetphotoService } from './services/getphoto.service'
import { GetBeerPhotoService} from './services/getbeerphoto.service'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginService } from './services/login.service' ;
import {AuthguardGuard} from './authguard.guard';
import { UserManagementService } from './services/user-management.service';
import { UserManagementComponent } from './components/user-management/user-management.component'

const appRoute: Routes = [
  { path: "", component: LoginComponent },
  {path: 'home',component: HomeComponent},
  {path: 'user',component: UserComponent},
  { path: "about",canActivate: [AuthguardGuard], component: AboutusComponent },
  { path: "beer", component: BeerComponent },
  {path: 'user-management',canActivate: [AuthguardGuard],component: UserManagementComponent},
  {path: '**',canActivate: [AuthguardGuard],component: LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    BeerComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserManagementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [GetphotoService,
    GetBeerPhotoService,
    LoginService,
    AuthguardGuard,UserManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
