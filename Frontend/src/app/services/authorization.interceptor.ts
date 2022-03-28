import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {BackendService} from "./backend.service";

@Injectable({providedIn: "root"})
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private backend: BackendService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.backend.token){
      const modified = request.clone({
        headers: request.headers.set("authorization", this.backend.token)
      })
      return next.handle(modified);
    }
    return next.handle(request);
  }
}
