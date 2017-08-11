import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.book = this.bookService.get();
  }

}
