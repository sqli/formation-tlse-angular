import { Injectable } from '@angular/core';
import { Author } from './author';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthorService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>('/api/authors');
  }

  get(id: number): Observable<Author> {
    return this.http.get<Author>(`/api/authors/${id}`);
  }

  create(author: Author): Observable<Author> {
    return this.http.post<Author>(`/api/authors/`, JSON.stringify(author), {headers: this.headers});
  }

}
