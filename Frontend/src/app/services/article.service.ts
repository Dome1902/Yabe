import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Article, createArticle, LoginCredentials, RegisterCredentials} from '../globals/types';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticle(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(environment.backendUrl + "/articles/available")
  }

  getArticleById(id: string): Observable<Article> {
    return this.http.get<Article>(environment.backendUrl + "/articles/" + id);
  }

  createArticle(article: createArticle) {
    return this.http.post(environment.backendUrl + "/articles", article);
  }

  editArticle(article: Article) {
    return this.http.put(environment.backendUrl + '/articles/' + article._id, article);
  }

  getUserArticle(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(environment.backendUrl + "/articles/user");
  }
}
