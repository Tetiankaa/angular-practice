import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { ContactComponent } from './components/contact/contact.component';
import {ContactRoutingModule} from "./contact-routing.module";



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactRoutingModule
  ],
  exports:[
    ContactComponent
  ]
})
export class ContactModule { }
