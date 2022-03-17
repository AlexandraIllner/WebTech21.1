//(0) httpclient importieren
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//(1) automatische importe nach getAll()
import { Observable } from 'rxjs';
import { Language } from './language';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  //(1) backend-adresse
  baseUrl = 'http://localhost:3000/languages';

  //(0) dependency injection
  constructor(private http: HttpClient) {}
    
  //(1a) eigene fkt mit typisierter rückgabe, notwendiges subscribe erfolgt in table.comp.ts (subscribe deprecated)
    getAll(): Observable<Language[]>{
      //(1a) aufruf get() von httpclient mit adresse d. backend mit rückgabe eines arrays aus lang-objeketen
      return this.http.get<Language[]>(this.baseUrl);
    }

    //(2a) eigene fkt für aufruf der get-fkt in rest-api m. param name, erzeugt lang-observable & liest name aus & hängt sie an url
    getOneByName(name: string): Observable<Language>{
      return this.http.get<Language>(this.baseUrl + '/' + name);
    }

    //(2a) eigene fkt für aufruf der get-fkt in rest-api m. param id, erzeugt lang-observable & liest id aus & hängt sie an url
    getOne(id: string): Observable<Language>{
      return this.http.get<Language>(this.baseUrl + '/' + id);
    }

    //(2c) update-fkt. mit param id und im form eingegebenen daten spricht patch-fkt der rest-api an und übergibt daten dem body des request-objekts
    update(id: string, data: Language): Observable<Language> {
      return this.http.patch<Language>(this.baseUrl + '/' + id, data);
    }

    //(2c) ruft mit param id rest-api-delete-fkt auf; weil datensatz schon gelöscht worden sein könnte ist typ des observables any, damit error gesendet werden kann
    // rest-api sendet http-status 204 o. 404 in response, {observe: 'response'} sorgt dafür, dass in jedem fall eine response gesendet wird
    // weiter in table.comp.ts
    deleteOne(id: string): Observable<any>{
      return this.http.delete<any>(this.baseUrl + '/' + id, {observe: 'response'});
    }

    create(data: any): Observable<Language> {
      return this.http.post<Language>(this.baseUrl, data)
    }
}

