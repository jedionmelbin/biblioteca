import { Component, OnInit } from '@angular/core';
import {Libro} from '../../libro/model/Libro';
import {LibroService} from '../../libro/services/libro.service';

@Component({
  selector: 'app-lista-reserva',
  templateUrl: './lista-reserva.component.html',
  styleUrls: ['./lista-reserva.component.css']
})
export class ListaReservaComponent implements OnInit {

  libros: Libro[];

  constructor(private libroService: LibroService) {

  }

  getLibros() {
    this.libroService.getLibro().subscribe((response) => {
      this.libros = response;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
    this.getLibros();
  }
}
