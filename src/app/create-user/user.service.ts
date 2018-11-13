import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models/user.model'; 
import { UserId } from '../models/userId.model'; 


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  create(user: User): Observable<UserId>{
    return this.httpClient.post<UserId>('http://localhost:1337/api/users', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

  }




}
