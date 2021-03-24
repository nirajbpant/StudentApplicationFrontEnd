import { Component, OnInit } from '@angular/core';
import { Library } from 'src/app/common/library';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

   books: Library[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks(){
    this.bookService.getBookList().subscribe((data: Library[])=>{
      console.log(data);
      this.books= data;
    });
  }

}
