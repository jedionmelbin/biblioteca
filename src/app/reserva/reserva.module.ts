import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { CreateReservaComponent } from './create-reserva/create-reserva.component';
import { ListaReservaComponent } from './lista-reserva/lista-reserva.component';


@NgModule({
  declarations: [CreateReservaComponent, ListaReservaComponent],
  imports: [
    CommonModule,
    ReservaRoutingModule
  ]
})
export class ReservaModule { }
