import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Library } from 'src/app/common/library';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  books: Library = new Library();
  submitted = false;

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
  }

  newBook(): void{
    this.submitted=false;
    this.books= new Library();
  }

  save(){
    this.bookService.createBook(this.books).subscribe(data =>{
      console.log(data)
      this.books= new Library();
      this.goToList();
    },
      error=> console.log(error)
      );

  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  goToList(){
    this.router.navigate(['/books']);
  }


}
