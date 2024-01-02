import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {path:'', redirectTo:'wishes',pathMatch:"full"},
  {path:'wishes',loadChildren:()=>import('./modules/wish/wish.module').then(m=>m.WishModule)},
  {path:'contact',loadChildren:()=>import('./modules/contact/contact.module').then(m=>m.ContactModule)},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
