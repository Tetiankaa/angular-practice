import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {WishComponent} from "./components/wish/wish.component";

const routes:Routes = [
  {path:'', component:WishComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class WishRoutingModule{}
