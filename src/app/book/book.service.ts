import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookService {

  _books: Book[] = [
    {
      id: 1,
      title: 'Quatrevingt-treize',
      author: 'Hugo',
    },
    {
      id: 2,
      title: 'Le Colonel Chabert',
      author: 'Balzac',
    },
    {
      id: 3,
      title: 'Germinal',
      author: 'Zola',
    }];

  constructor() { }

  get(): Book {
    return this._books[0];
  }

  getAll(): Book[] {
    return this._books;
  }

}
