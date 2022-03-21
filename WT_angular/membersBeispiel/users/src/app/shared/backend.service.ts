import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  userRoute = 'http://localhost:3000/users';
  memberRoute = 'http://localhost:3000/members';

  constructor(private http: HttpClient) { }

  registerNewUser(user: User): Observable<User>{
    return this.http.post<User>(this.userRoute, user);
  }

  checkIfExist(email: string): Observable<User>{
    return this.http.get<User>(this.userRoute + '/' + email);
  }

  loginUser(email: string, password: string): Observable<any>{
    return this.http.post<User>(this.userRoute+ '/login/' + email, { password: password });
  }
}
