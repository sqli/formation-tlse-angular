import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {
  books: Book[];
  message: String;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(books => this.books = books);
  }

  onClick(book: Book): void {
    this.message = `You click on ${book.title} !`
  }
}
