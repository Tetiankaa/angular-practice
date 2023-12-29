import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { WishListComponent } from './components/wish-list/wish-list.component';
import { WishFormComponent } from './components/wish-form/wish-form.component';
import { WishFilterComponent } from './components/wish-filter/wish-filter.component';
import { WishListItemComponent } from './components/wish-list-item/wish-list-item.component';
import {EventService} from "../shared/services/EventService";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    WishFormComponent,
    WishFilterComponent,
    WishListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
 })
export class AppModule { }
