import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-libro',
  templateUrl: './create-libro.component.html',
  styleUrls: ['./create-libro.component.css']
})
export class CreateLibroComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      libroId: [],
      titulo: ['', Validators.required],
      autor: [],
      fechaEmision: [],
      paginas: [],
      presentacion: []

    });
  }

  fnReturn(): void {
    this.router.navigate(['libro']);
  }

  onSubmit(): void {

  }
}
