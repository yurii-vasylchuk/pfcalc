import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // @ts-ignore
    if (request.url.startsWith('/api') && environment['apiUrl'] != null) {
      // @ts-ignore
      return next.handle(request.clone({url: `${environment['apiUrl']}${request.url}`}));
    } else {
      return next.handle(request);
    }
  }
}
