import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {invalidEmail} from "./invalidEmail";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  constructor() {
  }
  ngOnInit(): void {
  }

 contactForm = new FormGroup({
   senderName: new FormControl('',Validators.required),
   senderEmail: new FormControl('',[Validators.required, Validators.email, invalidEmail]),
   senderMessage: new FormControl('',[Validators.required, Validators.minLength(10)]),
 })

  submitForm(){

  }


}
