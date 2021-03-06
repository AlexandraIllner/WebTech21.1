/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from './language';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  //definiert im backend in server.js
  baseUrl = 'http://localhost:3000/languages'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Language[]>{
    //definiert im backend in languagesR
    return this.http.get<Language[]>(this.baseUrl + '/all');
  }

  getOne(id: string): Observable<Language>{
    return this.http.get<Language>(this.baseUrl + '/' + id);
  }

  update(id: string, data: Language): Observable<Language> {
    return this.http.patch<Language>(this.baseUrl + '/' + id, data);
  }

  create(data: Language): Observable<Language> {
    console.log("LangService: create - data:");
    console.log(data);
    return this.http.post<Language>(this.baseUrl + '/', data);      
  }

  //Typ any, weil evtl. kein Dev-Objekt (mehr) vorhanden --> dann error-Objekt. response gibt den HTTP-Status zurück im backend
  deleteOne(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id, {observe: 'response'});
  }


}
 */