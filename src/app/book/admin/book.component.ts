import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Author } from '../author';

import { BookService } from '../book.service';
import { AuthorService } from '../author.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService, AuthorService]
})
export class BookComponent implements OnInit {

  model:Book = new Book();
  authors: Author[];

  constructor(private bookService: BookService, private authorService: AuthorService) { 
  }

  ngOnInit() {
    this.authorService.getAll().subscribe(authors => this.authors = authors);
  }

  onSubmit() {
    this.bookService.create(this.model).subscribe(data => console.log(data));
  }

}
