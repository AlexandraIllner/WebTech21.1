import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer } from './developer';

@Injectable({
  providedIn: 'root'
})
export class DevService {
  baseUrl = 'http://localhost:3000/developers'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Developer[]>{
    return this.http.get<Developer[]>(this.baseUrl);
  }

  getOne(id: string): Observable<Developer>{
    return this.http.get<Developer>(this.baseUrl + '/' + id);
  }

  update(id: string, data: Developer): Observable<Developer> {
    return this.http.patch<Developer>(this.baseUrl + '/' + id, data);
  }

  create(data: Developer): void {
    this.http.post<Developer>(this.baseUrl, data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

  //Typ any, weil evtl. kein Dev-Objekt (mehr) vorhanden --> dann error-Objekt. response gibt den HTTP-Status zurück im backend
  deleteOne(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id, {observe: 'response'});
  }


}
