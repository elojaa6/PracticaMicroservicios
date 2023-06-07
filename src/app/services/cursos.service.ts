import { Injectable } from '@angular/core';
import { BookModel } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  public getBooks(): BookModel[]{
    return [
      {
        "id": 1,
        "title": 'Angular Fundamentals',
        "totalPages": 470,
        "author": 'Ram Singh',
        "price":{
          "currency": "INR",
          "value": 80
        }
      },
      {
        "id": 2,
        "title": 'Angular Fundamentals',
        "totalPages": 470,
        "author": 'Ram Singh',
        "price":{
          "currency": "INR",
          "value": 80
        }
      },
      {
        "id": 3,
        "title": 'Angular Fundamentals',
        "totalPages": 470,
        "author": 'Ram Singh',
        "price":{
          "currency": "INR",
          "value": 80
        }
      },
      {
        "id": 4,
        "title": 'Angular Fundamentals',
        "totalPages": 470,
        "author": 'Ram Singh',
        "price":{
          "currency": "INR",
          "value": 80
        }
      },
      {
        "id": 5,
        "title": 'Angular Fundamentals',
        "totalPages": 470,
        "author": 'Ram Singh',
        "price":{
          "currency": "INR",
          "value": 80
        }
      },
      {
        "id": 6,
        "title": 'Angular Fundamentals',
        "totalPages": 470,
        "author": 'Ram Singh',
        "price":{
          "currency": "INR",
          "value": 80
        }
      },
      {
        "id": 7,
        "title": 'Angular Fundamentals',
        "totalPages": 470,
        "author": 'Ram Singh',
        "price":{
          "currency": "INR",
          "value": 80
        }
      },
      {
        "id": 8,
        "title": 'Angular Fundamentals',
        "totalPages": 470,
        "author": 'Ram Singh',
        "price":{
          "currency": "INR",
          "value": 80
        }
      },
    ]
  }
}
