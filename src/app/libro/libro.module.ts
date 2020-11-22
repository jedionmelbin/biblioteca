import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibroRoutingModule } from './libro-routing.module';
import { CreateLibroComponent } from './create-libro/create-libro.component';
import { ListLibroComponent } from './list-libro/list-libro.component';


@NgModule({
  declarations: [CreateLibroComponent, ListLibroComponent],
  imports: [
    CommonModule,
    LibroRoutingModule
  ]
})
export class LibroModule { }
