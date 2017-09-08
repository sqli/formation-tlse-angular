import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BookService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }

  get(id: number): Observable<Book> {
    return this.http.get<Book>(`/api/books/${id}`);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(`/api/books/`, JSON.stringify(book), {headers: this.headers});
  }

}
