import { Injectable } from '@angular/core';
import {LoginCredentials, RegisterCredentials} from "../globals/types";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginVisible: boolean | undefined;
  loggedIn: boolean = false;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    const token = cookieService.get('yabe-auth');
    if (token) {
      this.loggedIn = true;
    }
  }

  closeLoginModal(): void {
    this.loginVisible = false;
  }

  openLoginModal(): void {
    this.loginVisible = true;
  }

  login(credentials: LoginCredentials) {
    return this.http.post(environment.backendUrl + "/users/login", credentials);
  }

  register(credentials: RegisterCredentials) {
    return this.http.post(environment.backendUrl + "/users/register", credentials);
  }
}
