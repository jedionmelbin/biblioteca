import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorRoutingModule } from './autor-routing.module';
import { CreateAutorComponent } from './create-autor/create-autor.component';
import { ListAutorComponent } from './list-autor/list-autor.component';


@NgModule({
  declarations: [CreateAutorComponent, ListAutorComponent],
  imports: [
    CommonModule,
    AutorRoutingModule
  ]
})
export class AutorModule { }
