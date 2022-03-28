import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Article, LoginCredentials, RegisterCredentials} from '../globals/types';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticle() {
    return this.http.get(environment.backendUrl + "/articles")
  }

  createArticle(article: Article) {
    return this.http.post(environment.backendUrl + "/articles", article);
  }

  getUserArticle() {
    return this.http.get(environment.backendUrl + "/articles/user");
  }
}
