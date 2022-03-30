import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from "./login.service";
import {CookieService} from "ngx-cookie";

@Injectable({providedIn: "root"})
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService, private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userToken = this.cookieService.get('yabe-auth');
    if (userToken){
      const modified = request.clone({
        headers: request.headers.set("authorization", userToken)
      })
      return next.handle(modified);
    }
    return next.handle(request);
  }
}
