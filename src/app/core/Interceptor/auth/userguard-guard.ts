import { CanActivateFn, CanMatchFn } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { inject } from '@angular/core';

export const userguardGuard: CanMatchFn = (route, UrlSegments) => {
  console.log('user guard triggered for can match');
  const authService = inject(AuthService);
  return authService.isUserLoggedIn();
};
