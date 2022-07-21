import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  //Handle error 401 and 403
  private handleInterceptorError(err: any): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
      return err.message;
    }
    if (err.status === 502) {
      return err.message;
    }
    return throwError(err);
  }

  //Interceptor method
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let jwtToken = request.clone({
      setHeaders: {
        Authorization: 'bearer ' + localStorage.getItem('token'),
      },
    });
    return next
      .handle(jwtToken)
      .pipe(catchError((error) => this.handleInterceptorError(error)));
  }
}

//Handling errors
function throwError(err: any): Observable<any> {
  throw new Error(err);
}
