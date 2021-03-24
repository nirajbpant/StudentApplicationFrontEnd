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
    
  }
    
