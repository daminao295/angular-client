import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.findAll().subscribe(data => {
      this.books = data;
    });
  }



}
