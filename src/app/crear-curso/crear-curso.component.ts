import { Component } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { Catalogo } from '../models/catalogo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent {

  crearCursoRequest: Catalogo = new Catalogo();

  form!: FormGroup;


  constructor(
    private cursoService: CursosService,
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      lugar: ['', Validators.required],
      fecha: ['', Validators.required],
      cantidad: ['', Validators.required],
    });
   }

  crearCurso() {
    // Aquí puedes acceder a los datos del formulario a través de this.crearCursoRequest
    console.log(this.crearCursoRequest);
    this.crearCursoRequest.nombre = this.form.get('nombre')?.value;
    this.crearCursoRequest.lugar = this.form.get('lugar')?.value;
    this.crearCursoRequest.fecha = this.form.get('fecha')?.value;
    this.crearCursoRequest.cantidad = this.form.get('cantidad')?.value;
    console.log(this.crearCursoRequest);


    this.cursoService.crearCurso(this.crearCursoRequest)
      .subscribe(
        response => {
          // Manejar la respuesta exitosa del servidor aquí
          this.form.reset;
          console.log(response);
        },
        error => {
          // Manejar el error de la solicitud aquí
          const errorObject = error; 
          const err = errorObject.error;
          console.log(err)
        }
      );

  }

}
