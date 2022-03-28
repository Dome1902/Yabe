import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from "./login.service";

@Injectable({providedIn: "root"})
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.loginService.token){
      const modified = request.clone({
        headers: request.headers.set("authorization", this.loginService.token)
      })
      return next.handle(modified);
    }
    return next.handle(request);
  }
}
