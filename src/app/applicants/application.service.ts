import { Injectable } from '@angular/core';
import { Applicant } from '../models/application.model';
import { HttpClient } from '@angular/common/http';
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

}
