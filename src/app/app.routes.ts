import { Routes } from '@angular/router';
import { Home } from './practice-routing/home/home';
import { LoginUser } from './practice-routing/login-user/login-user';
import path from 'path';
import { authGuard } from './guard/auth-guard';
import { adminguardGuard } from './core/Interceptor/auth/adminguard-guard';
import { userguardGuard } from './core/Interceptor/auth/userguard-guard';


export const routes: Routes = [
    {
        path: '',
        component: LoginUser,
        title: 'Login',
    },
    {
        path: 'home',
        loadComponent: () => import('./practice-routing/home/home').then(m => m.Home),
        title: 'Home',
        canMatch : [adminguardGuard]
    },
    {
        path: 'home',
        loadComponent: () => import('./practice-routing/home/home').then(m => m.Home),
        title: 'Home',
        canMatch : [userguardGuard]
    },
    {
        path: 'about',
        loadComponent: () => import('./practice-routing/about/about').then(m => m.About),
        title: 'About',
    },
    {
        path: 'contact',
        loadComponent: () => import('./practice-routing/contact/contact').then(m => m.Contact),
        title: 'Contact',
    },
    {
        path: 'profile/:id',
        loadComponent: () => import('./practice-routing/user-profile/user-profile').then(c=> c.UserProfile),
        canActivate: [authGuard],
        title: 'Profile',
    }
];
