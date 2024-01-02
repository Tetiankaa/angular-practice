import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WishListComponent} from "./components/wish-list/wish-list.component";
import {WishListItemComponent} from "./components/wish-list-item/wish-list-item.component";
import {WishFormComponent} from "./components/wish-form/wish-form.component";
import {WishFilterComponent} from "./components/wish-filter/wish-filter.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { WishComponent } from './components/wish/wish.component';
import {WishRoutingModule} from "./wish-routing.module";

@NgModule({
  declarations: [
    WishListComponent,
    WishListItemComponent,
    WishFormComponent,
    WishFilterComponent,
    WishComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    WishRoutingModule
  ],
  exports: [
    WishListComponent,
    WishListItemComponent,
    WishFormComponent,
    WishFilterComponent,
    WishComponent
  ]
})
export class WishModule { }
