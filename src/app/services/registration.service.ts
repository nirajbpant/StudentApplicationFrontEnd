import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../common/users';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

 loginUserFromRemote(user : Users): Observable<any>{
  return this.httpClient.post<any>("http://localhost:8020/users/login",user);
  }

  registerUserFromRemote(user: Users): Observable<any>{
    return this.httpClient.post<any>("http://localhost:8020/users",user);
  }
}
