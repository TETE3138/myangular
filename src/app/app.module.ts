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



const appRoute: Routes = [
  { path: "", component: UserComponent },
  { path: "about", component: AboutusComponent },
  { path: "beer", component: BeerComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    BeerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [GetphotoService,GetBeerPhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
