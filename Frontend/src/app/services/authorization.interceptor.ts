import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthorizationInterceptor implements HttpInterceptor {
  usertoken: string;
  constructor() {this.usertoken=""}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.usertoken){
      const modified = request.clone({
        headers: request.headers.set("authorization",this.usertoken)
      })
      return next.handle(modified);
    }
    return next.handle(request);
  }
}
