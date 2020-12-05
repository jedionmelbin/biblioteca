import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaReservaComponent} from './lista-reserva/lista-reserva.component';
import {CreateReservaComponent} from './create-reserva/create-reserva.component';

const routes: Routes = [
  {
    path: '',
    component: ListaReservaComponent
  },
  {
    path: 'create',
    component: CreateReservaComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
