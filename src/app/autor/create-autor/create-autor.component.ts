import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AutorService} from '../services/autor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-autor',
  templateUrl: './create-autor.component.html',
  styleUrls: ['./create-autor.component.css']
})
export class CreateAutorComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private autorService: AutorService) {
  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      autorId: [],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      genero: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: []
    });
  }

  onSubmit() {
    this.autorService.addAutor(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['autor']);
      });
  }


}
