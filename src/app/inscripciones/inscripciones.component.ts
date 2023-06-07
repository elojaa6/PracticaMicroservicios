import { Component, OnInit } from '@angular/core';
import { InscripcionService } from '../services/inscripcion.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  inscripcion: any

  constructor(
    public inscripcionService: InscripcionService,
  ){}

  ngOnInit(): void{
    this.cargarInformacion()
  }

  cargarInformacion() {
    this.inscripcionService.getAll().subscribe(info => {
      this.inscripcion = info,
        console.log(info)
    },error => {
      console.log(error)
    })
  }
}
