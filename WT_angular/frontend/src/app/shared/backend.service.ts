//(3)
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //(4) Observable: design pattern, verhält sich wie "Abonnenement" vgl. Listener
import { Member } from './member'; //(4) Member importieren

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/members'; //(3) Var für URL, 3000/members, weil dort alle REST-API-Endpunkte

  //(3) dependency injection; ermöglicht HTTP-Fkt, private Var http wird unten verwendet
  constructor(private http: HttpClient) { }

  //(4)eigene Fkt für GET-Anfrage ans backend mit Rückgabe typisiertes Observable -> Member-Array
  getAll(): Observable<Member[]>{
    return this.http.get<Member[]>(this.baseUrl); //(4) Aufruf der get-Fkt über Var http mit baseURL als Param, typisiert mit Member[]
  }

  //(7a) parametrisiertes Routing um Datensatz von Member xy zu holen
  getOne(id: string): Observable<Member>{
    return this.http.get<Member>(this.baseUrl + '/' + id);
  }
}
