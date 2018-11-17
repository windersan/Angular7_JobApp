import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Login } from './models/login.model';
import { User } from './models/user.model'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { 
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if(errorResponse.error instanceof ErrorEvent) {
      console.error('Client-side error: ', errorResponse.error.message)
    } else {
      console.error('Server-side error: ', errorResponse);
    }
    return throwError(errorResponse.message);
  }


  authenticate(login: Login): Observable<User>{
    console.log('AuthService called');
     return this.httpClient.post<User>('http://arctrade.azurewebsites.net/api/auth', login, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(catchError(this.handleError));
  }


  

}
