import {Component, Input} from '@angular/core';
import {IWish} from "../../../../interfaces/IWish";
import {EventService} from "../../../../../shared/services/EventService";


@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() item:IWish;

  constructor(private eventService:EventService) {
  }
  get cssClasses(){
    // return this.item.isComplete ? 'strikeout text-muted' : ''
    // return this.item.isComplete ? ['strikeout', 'text-muted'] : []
    return {'strikeout text-muted':this.item.isComplete}
  }

  toggleFulfilled() {
    this.item.isComplete = !this.item.isComplete;
  }

  removeWish() {
    this.eventService.emit('removeWish',this.item);
  }
}
