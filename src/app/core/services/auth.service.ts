import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
export interface AuthData {
    email: string;
    password: string;
}

export interface callsource {
    source: string;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {
         
    constructor(private http: HttpClient) {}

    login(source: callsource, credentials: AuthData): Observable<any> {
        if (source.source === 'admin') {
            localStorage.setItem('adminLoggedInUser', JSON.stringify(credentials));
            return of({ success: true });
        } else {
            localStorage.setItem('loggedInUser', JSON.stringify(credentials));
            return of({ success: true });
        }
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('loggedInUser');
    }

    isAdminLoggedIn(): boolean {
        return !!localStorage.getItem('adminLoggedInUser');
    }

    isUserLoggedIn(): boolean {    
        return !!localStorage.getItem('loggedInUser');
    }

}