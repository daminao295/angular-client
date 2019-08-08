import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Book } from '../model/book'


@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookUrl = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
    this.bookUrl = "http://localhost:8080/books"
  }

  public createBook(book: Book) {
    console.log("service");
    console.log(book);
    this.http.post(this.bookUrl, book)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {

          console.log("Error", error);

        }

      );

    console.log("after")
  }
  /*
  public updateCustomer(customer: Customer){}
  */
  public deleteCustomer(id: number) { }

  public getBookById(id: number) {
    var bookUrl = "http://localhost:8080/book/" + id;
    return this.http.get<Book>(bookUrl);
  }

  public findAll() {
    return this.http.get<Book[]>(this.bookUrl);
  }


}
