import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './User/add/add.component';
import { EditComponent } from './User/edit/edit.component';
import { GetComponent } from './User/get/get.component';

const routes: Routes = [
  {path: 'get', component : GetComponent},
  {path: 'add', component : AddComponent},
  {path: 'edit', component : EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
