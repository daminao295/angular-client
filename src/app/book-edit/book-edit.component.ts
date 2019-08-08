import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import {BookService} from '../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Book = new Book;
  
  constructor(private bookService: BookService, route: ActivatedRoute) {
    const idRout: string  =  route.snapshot.paramMap.get('id');
    const id: number = new Number(idRout).valueOf();
    this.getBookById(id);
    console.log("id: " +id);
   }

  ngOnInit() {
  }

  createBook(){
    console.log("createBook");
    console.log(this.book);
    this.bookService.createBook(this.book);
  }

  getBookById(id: number){
    this.bookService.getBookById(id).subscribe(data => {
        console.log("POST Request is successful ", data);
        this.book = data;
        },
        error  => {
        console.log("Error", error);
          });
    console.log(this.book);
  }

  onSubmit(){
    console.log("onSubmit createBook");
    this.bookService.createBook(this.book);
  }

}
