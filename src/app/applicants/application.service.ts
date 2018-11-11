import { Injectable } from '@angular/core';
import { Applicant } from '../models/application.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClient: HttpClient) { 
  }

  getApplicants(): Observable<Applicant[]>{
    return this.httpClient.get<Applicant[]>('http://localhost:1337/api/manage/');
  }

  postApplication(applicant: Applicant): Observable<Applicant>{
    console.log('AuthService called');
     return this.httpClient.post<Applicant>('http://localhost:1337/api/auth', applicant, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    
  }

}
