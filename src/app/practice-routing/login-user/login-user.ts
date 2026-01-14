import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  imports: [FormsModule],
  templateUrl: './login-user.html',
  styleUrl: './login-user.scss',
})
export class LoginUser {
  username: string = '';
  password: string = '';
  private router = inject(Router);
  onLogin() {
    console.log('Logging in with', this.username, this.password);
    this.router.navigate(['/home']);
  }
}
