import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/curso.model';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit  {

  books: any

  

  constructor(
    public cursoService:CursosService
  ){}

  ngOnInit(): void{
    console.log(this.cursoService.getBooks())
    this.books = this.cursoService.getBooks();
    console.log(this.books);
  }

}
