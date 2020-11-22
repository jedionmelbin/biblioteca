import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListAutorComponent} from './list-autor/list-autor.component';
import {CreateAutorComponent} from './create-autor/create-autor.component';

const routes: Routes = [

  {
    path: '',
    component: ListAutorComponent
  },
  {
    path: 'create',
    component: CreateAutorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule {
}
