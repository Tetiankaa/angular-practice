import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-wish-form',
  templateUrl: './wish-form.component.html',
  styleUrl: './wish-form.component.css'
})
export class WishFormComponent {
  newWishText='';

  @Output() text=new EventEmitter<string>();

  addNewWish() {
    this.text.emit(this.newWishText);
    this.newWishText = '';
  }
}
