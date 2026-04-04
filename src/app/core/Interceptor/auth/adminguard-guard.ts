import { CanMatchFn } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { inject } from '@angular/core';

export const adminguardGuard: CanMatchFn = (route, UrlSegments) => {
   console.log('admin guard triggered for can match');
  const authService = inject(AuthService);
  return authService.isAdminLoggedIn();
};
