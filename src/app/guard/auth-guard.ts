import { CanActivateFn } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  console.log('auth guard triggered');
  const authService = inject(AuthService);
  return authService.isLoggedIn();
};
