import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookService {

  constructor() { }

  get(): Book {
    return {
      id: 1,
      title: 'Quatrevingt-treize',
      author: 'Hugo',
    };
  }

}
