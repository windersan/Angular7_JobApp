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

   getApplicant(id: number): Observable<Applicant>{
     console.log('ApplicationService called');
    return this.httpClient.get<Applicant>('http://localhost:1337/api/applications/' + id);
  }

  postApplication(applicant: Applicant): Observable<Applicant>{
    console.log('ApplicationService called');
     return this.httpClient.post<Applicant>('http://localhost:1337/api/applications', applicant, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    
  }

}
