import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
export interface AuthData {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {
         
    constructor(private http: HttpClient) {}

    login(credentials: AuthData): Observable<any> {
        return this.http.post<any>('https://jsonplaceholder.typicode.com/posts/', credentials);
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('loggedInUser');
    }
}