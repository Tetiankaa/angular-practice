import {Component, OnInit} from '@angular/core';
import {WishItem} from "../shared/models/wishitem";
import {EventService} from "../shared/services/EventService";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  items:WishItem[] = [
    new WishItem('To buy a phone'),
    new WishItem('Get coffee'),
    new WishItem('Do chores', true)
  ];
  title = 'wishlist';

  filterList='';

  constructor(private eventService:EventService) {
    this.eventService.listen('removeWish',(wish:WishItem)=>{
     let itemToDelete =  this.items.findIndex(item=>item.wishText === wish.wishText);
     this.items.splice(itemToDelete,1);
    })
  }

  ngOnInit(): void {
    this.visibleItems
  }

  get visibleItems() : WishItem[] {
    let value = this.filterList;

    if (value === '0'){
      return  this.items;
    }else if (value === '1'){
      return  this.items.filter(item=>!item.isComplete)
    }else if (value === '2'){
      return  this.items.filter(item=>item.isComplete)
    }
    return this.items
  }
  saveWish(text: string) {
    this.items.push(new WishItem(text));
  }



}
