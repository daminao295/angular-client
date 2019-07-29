import { Component, OnInit } from '@angular/core';
import { Book } from '../book';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Book;
  
  constructor() { }

  ngOnInit() {
  }

}
