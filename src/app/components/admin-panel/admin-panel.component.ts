import { Component, OnInit } from '@angular/core';
import { Library } from 'src/app/common/library';
import { BookService } from 'src/app/services/book.service';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  books: Library[];
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.listBooks();

  }

  listBooks(){
    this.bookService.getBookList().subscribe((data: Library[])=>{
      console.log(data);
      this.books= data;
    });
  }
  deleteBook(id: number){
    this.bookService.deleteBook(id)
    .subscribe(
      data=> {
        console.log(data);
        this.books = this.books.filter(item => item.bookId!= id);
      },
      error=>console.log(error)
    );
  }

  updateData(id : number){
   //this.router.navigate(['update'],id);
  }

}
