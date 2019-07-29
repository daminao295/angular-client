import { Component, OnInit } from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent implements OnInit {

   books : Book[];

  constructor() { 
    this.books = [
      new Book(1, 'Windstorm', '1993-03-12'),
      new Book(13, 'Bombasto', '1993-03-12'),
      new Book(15, 'Magneta', '1993-03-12'),
      new Book(20, 'Tornado', '1993-03-12')
    ];
  }

  ngOnInit() {

  }

}
