import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateLibroComponent} from './create-libro/create-libro.component';
import {ListLibroComponent} from './list-libro/list-libro.component';

const routes: Routes = [
  {
    path: '',
    component: ListLibroComponent
  },
  {
    path: 'create',
    component: CreateLibroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibroRoutingModule {
}
