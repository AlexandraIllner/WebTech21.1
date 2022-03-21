//(3) 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //(4) Observable: design pattern, verhält sich wie "Abonnenement" vgl. Listener
import { Member } from './member'; //(4) Member importieren

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/members'; //(3) Var für URL-Verwendung, 3000/members, weil dort alle REST-API-Endpunkte

  //(3) dependency injection; ermöglicht HTTP-Fkt, private Var http wird in den folgenden Fkt verwendet
  constructor(private http: HttpClient) { }

  //(4)eigene Fkt für GET-Anfrage ans backend mit Rückgabe typisiertes Observable -> Member-Array
  getAll(): Observable<Member[]>{
    return this.http.get<Member[]>(this.baseUrl); //(4) Aufruf der get-Fkt über Var http mit baseURL als Param, typisiert mit Member[]
  }

  //(7a) parametrisiertes Routing um Datensatz von Member xy zu holen, GET-Endpunkt
  getOne(id: string): Observable<Member>{
    return this.http.get<Member>(this.baseUrl + '/' + id);
  }

  //(8) Update --> PATCH-Endpunkt
  update(id: string, data: Member): Observable<Member> {
    return this.http.patch<Member>(this.baseUrl + '/' + id, data);
  }

  //(8) DELETE-Endpunkt, mit any typisiert, weil response leer oder ein error sein kann
  deleteOne(id: string): Observable<any>{
    return this.http.delete<any>(this.baseUrl + '/' + id, {observe: 'response'}); //(8) hier wird ein Observable erzuegt, falls es sonst keins gäbe (s.o.)
  } 
/* 
  //(8) POST -> create
  createOne(id: "00",data: Member): Observable<Member> {
    return this.http.post<Member>(this.baseUrl + '/' + id, data )
  } */
}
