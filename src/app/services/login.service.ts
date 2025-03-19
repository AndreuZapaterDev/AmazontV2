import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  apiPath = 'http://127.0.0.1:8000';

  loggedUser: any;

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.apiPath}/api/usuarios`);
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get(`${this.apiPath}/api/usuarios/${id}`);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiPath}/api/login`, { email, password });
  }

  setLoggedUser(user: any) {
    this.loggedUser = user;
  }

  getLoggedUser() {
    return this.loggedUser;
  }

  logout() {
    this.loggedUser = null;
  }
}
