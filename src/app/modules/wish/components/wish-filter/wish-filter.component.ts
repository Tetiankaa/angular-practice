import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit{
  filterList='';
  @Output() filter = new EventEmitter<string>();

  ngOnInit(): void {
    this.filterList='0';
  }

  changeFilter() {
    this.filter.emit(this.filterList)
  }

}
