import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book = {
    id: 1,
    title: 'Quatrevingt-treize',
    author: 'Hugo'
  };

  constructor() { }

  ngOnInit() {
  }

}
