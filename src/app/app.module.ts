import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EventService} from "../shared/services/EventService";
import {WishModule} from "./modules/wish/wish.module";
import {ContactModule} from "./modules/contact/contact.module";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WishModule,
    ContactModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
 })
export class AppModule { }
