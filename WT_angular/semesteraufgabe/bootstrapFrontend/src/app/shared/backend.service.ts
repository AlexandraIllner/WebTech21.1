import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from './language';
import { Developer } from './developer';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  //definiert im backend in server.js
  baseUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  //language-Funktionen
  getAllLang(): Observable<Language[]>{
    //definiert im backend in languagesR
    return this.http.get<Language[]>(this.baseUrl + 'languages/all');
  }

  getOneLang(id: string): Observable<Language>{
    return this.http.get<Language>(this.baseUrl + 'languages/' + id);
  }

  updateLang(id: string, data: Language): Observable<Language> {
    return this.http.patch<Language>(this.baseUrl + 'languages/' + id, data);
  }

  createLang(data: Language): Observable<Language> {
    console.log("LangService: create - data:");
    console.log(data);
    return this.http.post<Language>(this.baseUrl + 'languages', data);      
  }

  //Typ any, weil evtl. kein Lang-Objekt (mehr) vorhanden --> dann error-Objekt. response gibt den HTTP-Status zurück im backend
  deleteOneLang(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + 'languages/' + id, {observe: 'response'});
  }

  //developer-Funktionen
  getAllDev(): Observable<Developer[]>{
    return this.http.get<Developer[]>(this.baseUrl + 'developers/all');
  }
  

  getOneDev(id: string): Observable<Developer>{
    return this.http.get<Developer>(this.baseUrl + 'developers/' + id);
  }

  //was funktioniert hier nicht??????????????
  getCollaborators(token: string): Observable<Developer[]>{
    console.log("getCollaborators(" + token + ')');
    //return this.http.get<Developer[]>(this.baseUrl + 'developers/dev/collaboration' + token);
    return this.http.get<Developer[]>(this.baseUrl + 'developers/dev/' + token);
  }

  updateDev(id: string, data: Developer): Observable<Developer> {
    return this.http.patch<Developer>(this.baseUrl + 'developers/' + id, data);
  }

  createDev(data: Developer): Observable<Developer> {
    this.http.post<Developer>(this.baseUrl + 'developers', data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
      return this.http.patch<Developer>(this.baseUrl + 'developers/', data);
  }

  //Typ any, weil evtl. kein Dev-Objekt (mehr) vorhanden --> dann error-Objekt. response gibt den HTTP-Status zurück im backend
  deleteOneDev(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + 'developers/' + id, {observe: 'response'});
  }


}
