import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Article, LoginCredentials, RegisterCredentials} from '../globals/types';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  token = ""

  constructor(private http: HttpClient) { }

  login(credentials: LoginCredentials) {
    return this.http.post(environment.backendUrl + "/users/login", credentials);
  }

  register(credentials: RegisterCredentials) {
    return this.http.post(environment.backendUrl + "/users/register", credentials);
  }

  getArticle() {
    return this.http.get(environment.backendUrl + "/articles")
  }

  createArticle(article: Article) {
    return this.http.post(environment.backendUrl + "/articles", article);
  }
}
