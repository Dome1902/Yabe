import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials, RegisterCredentials } from '../globals/types';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  server = "http://localhost:4000"

  //TODO Save token from login response
  token = ""

  constructor(private http: HttpClient) { }

  login(credentials: LoginCredentials) {
    return this.http.post(this.server + "/users/login", credentials);
  }

  register(credentials: RegisterCredentials) {
    return this.http.post(this.server + "/users/register", credentials);
  }

  getArticle() {
    return this.http.get(this.server + "/articles")
  }
}
