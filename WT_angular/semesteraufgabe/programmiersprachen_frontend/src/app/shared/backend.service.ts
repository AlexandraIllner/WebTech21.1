import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Developer } from './developer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  developersUrl = 'http://localhost:3000/developers'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Developer[]>{
    return this.http.get<Developer[]>(this.developersUrl);
  }
}
