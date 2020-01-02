import { Injectable } from '@angular/core';
import {IUser} from '../user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;
  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string) {
    const loginInfo = {
      username,
      password
    };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http
      .post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser> data['user'];
      }))
      .pipe(catchError( err => {
        this.handleError('loginUser', err);
        return of(false);
      }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateProfile(newValues) {
    this.currentUser = {
      ...this.currentUser,
      ...newValues
    };

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = <IUser> data;
        }
      }))
      .subscribe();
  }

  logout() {
    this.currentUser = null;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('/api/logout', {}, options);
  }

  private handleError<T>(operation="operation", results?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(results as T);
    };
  }
}
