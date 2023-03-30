import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './bookInterface';
import { of, map } from 'rxjs';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BookDataServiceService {

  constructor() { }

  BOOKS: Book[] = [
    { id: 1, name: "angular", price: "1000", description: "angular tutorial" },
    { id: 2, name: "javaScript", price: "5000", description: "js tutorial" },
    { id: 3, name: "react", price: "9000", description: "react tutorial" },
  ];

  getBooks(): Observable<Book[]> {
    return of(this.BOOKS)
    // return this.BOOKS
  }

  getBook(id: any): Observable<Book[]> {
    return this.getBooks().pipe(map((books: any) => books.find((item: any) => item.id === id)))
  }

}
