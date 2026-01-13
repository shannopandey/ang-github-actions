import { Routes } from '@angular/router';
import { Home } from './practice-routing/home/home';
import { LoginUser } from './practice-routing/login-user/login-user';


export const routes: Routes = [
    {
        path: '',
        component: LoginUser,
        title: 'Login',
    },
    {
        path: 'home',
        component: Home,
        title: 'Home',
    },
    {
        path: 'about',
        loadComponent:() => import('./practice-routing/about/about').then(m => m.About),
        title: 'About',
    },
    {
        path: 'contact',
        loadComponent:() => import('./practice-routing/contact/contact').then(m => m.Contact),
        title: 'Contact',
    }
];
