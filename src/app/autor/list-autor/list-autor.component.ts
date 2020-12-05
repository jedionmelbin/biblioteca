import {Component, OnInit} from '@angular/core';
import {Autor} from '../model/autor';
import {AutorService} from '../services/autor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-autor',
  templateUrl: './list-autor.component.html',
  styleUrls: ['./list-autor.component.css']
})
export class ListAutorComponent implements OnInit {

  autores: Autor[];

  constructor(private router: Router, private autorService: AutorService) {

  }

  getAutors() {
    this.autorService.getAutors().subscribe((response) => {
       this.autores = response;
    }, err => {
      console.log(<any>err);
    });
  }

  ngOnInit(): void {
    this.getAutors();
  }

}
