import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Library } from 'src/app/common/library';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  bookId: number;
  books: Library;
  constructor(private router: Router, private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.books= new Library();
    this.bookId= this.route.snapshot.params['bookId'];
    this.bookService.getOneBook(this.bookId)
    .subscribe(data=> {
      console.log(data);
      this.books= data;
    },
    error => console.log(error)
    );
  }


  updateBook(){
    this.bookService.updateBook(this.bookId, this.books)
    .subscribe(data =>{
      console.log(data);
    },
    error=>
      console.log(error));
    
      this.books= new Library();
      this.goToList();
  }


  onSubmit(){
    this.updateBook();
  }

  goToList(){
    this.router.navigate(['/books']);
  }
}
