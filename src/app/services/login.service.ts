import { Injectable } from '@angular/core';
import { LoginQuery } from '../models/login.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isAuthorized = new BehaviorSubject(false);

  constructor(private router: Router) {
    this.isAuthorized.next(!!localStorage.getItem('credentials'));
  }

  login(query: LoginQuery): void {
    const credentials = query.username + ':' + query.password;

    localStorage.setItem('credentials', credentials);
    this.isAuthorized.next(true);
  }

  logout(): void {
    localStorage.removeItem('credentials');
    this.isAuthorized.next(false);
    this.router.navigate(['/']);
  }

  getIsAuthorized(): Observable<boolean> {
    return this.isAuthorized.asObservable();
  }
}
