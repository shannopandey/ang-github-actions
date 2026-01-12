import { Routes } from '@angular/router';
import { Home } from './practice-routing/home/home';

export const routes: Routes = [
    {
        path: '',
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
