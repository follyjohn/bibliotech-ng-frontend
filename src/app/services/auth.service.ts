import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth$ = new BehaviorSubject<boolean>(false);
  token: string;
  userId: string;

  constructor(private router: Router,
              private http: HttpClient) {
    this.isAuth$.next(!!JSON.parse(localStorage.getItem('authData')));
  }

  createNewUser(userName: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:3000/api/auth/signup',
        {
          userName,
          email,
          password
        })
        .subscribe(
          () => {
            this.login(email, password).then(
              () => {
                resolve();
              }
            ).catch(
              (error) => {
                reject(error);
              }
            );
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:3000/api/auth/login',
        {
          email,
          password
        })
        .subscribe(
          (authData: { token: string, userId: string }) => {
            this.token = authData.token;
            this.userId = authData.userId;
            this.isAuth$.next(true);
            // TODO:verifier "remeber me"
            localStorage.setItem('authData', JSON.stringify(authData));
            localStorage.setItem('userId', authData.userId);
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  logout() {
    localStorage.removeItem('authData');
    localStorage.removeItem('userId');
    this.isAuth$.next(false);
    this.userId = null;
    this.token = null;
    this.router.navigate(['/login']);
  }
}
