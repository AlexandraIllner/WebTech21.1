import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from './language';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  baseUrl = 'http://localhost:3000/languages'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Language[]>{
    return this.http.get<Language[]>(this.baseUrl);
  }

  getOne(id: string): Observable<Language>{
    return this.http.get<Language>(this.baseUrl + '/' + id);
  }

  update(id: string, data: Language): Observable<Language> {
    return this.http.patch<Language>(this.baseUrl + '/' + id, data);
  }

  post() {
    console.log("ich muss noch implementiert werden")
  }

  //Typ any, weil evtl. kein Dev-Objekt (mehr) vorhanden --> dann error-Objekt. response gibt den HTTP-Status zurück im backend
  deleteOne(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id, {observe: 'response'});
  }


}
