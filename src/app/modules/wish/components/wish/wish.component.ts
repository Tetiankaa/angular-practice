import {Component, OnInit} from '@angular/core';
import {WishService} from "../../../../../shared/services/wish.service";
import {IWish} from "../../../../interfaces/IWish";

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit{
  items:IWish[];

  filterList='';


  constructor(private wishService:WishService) {

  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe({
      next:(value)=>{
        this.items=value;
      },
      error:(e)=>{
        alert(e.message)
      }
    })

    this.visibleItems
  }

  get visibleItems():IWish[]{
    let value = this.filterList;

    if (value === '0'){
      return this.items
    }else if (value === '1'){
      return this.items.filter(item=>!item.isComplete)
    }else if (value === '2'){
      return this.items.filter(item=>item.isComplete)
    }
    return this.items
  }

}
