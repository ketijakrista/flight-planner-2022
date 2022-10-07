import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const credentials = localStorage.getItem('credentials');
    const shouldAddCredentials = req.headers.get('Add-Credentials') !== null;

    if (credentials && shouldAddCredentials) {
      const authorizationData = 'Basic ' + btoa(credentials);

      req = req.clone({
        headers: req.headers.delete('Add-Credentials'),
        setHeaders: { Authorization: authorizationData },
      });
    }

    return next.handle(req).pipe(
      catchError((error) => {
        return throwError(error);
      }),
    );
  }
}
