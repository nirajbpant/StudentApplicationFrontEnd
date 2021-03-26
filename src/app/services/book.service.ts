import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Library } from '../common/library';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl= 'http://localhost:8020/books';


  constructor(private httpClient: HttpClient) { }


  getBookList(): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.baseUrl}`);
  }
    
  deleteBook(id: number){
    return this.httpClient.delete(`${this.baseUrl}/${id}`,{responseType: 'text'});
  }

  createBook(libray: object): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, libray);
  }

  updateBook(id: number, value:any): Observable<Object>{
    return this.httpClient.put(`http://localhost:8020/books/update/${id}`, value);
  }

  getOneBook(id: number): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }


  }
    
