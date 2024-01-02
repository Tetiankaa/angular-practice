import {Component, Input} from '@angular/core';
import {IWish} from "../../../../interfaces/IWish";



@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() items:IWish[]

}
