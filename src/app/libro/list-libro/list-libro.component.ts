import {Component, OnInit} from '@angular/core';
import {LibroService} from '../services/libro.service';
import {Libro} from '../model/Libro';

@Component({
  selector: 'app-list-libro',
  templateUrl: './list-libro.component.html',
  styleUrls: ['./list-libro.component.css']
})
export class ListLibroComponent implements OnInit {

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
