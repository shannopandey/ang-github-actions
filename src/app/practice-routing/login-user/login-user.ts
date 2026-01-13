import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  imports: [FormsModule],
  templateUrl: './login-user.html',
  styleUrl: './login-user.scss',
})
export class LoginUser {
  username: string = '';
  password: string = '';

  onLogin() {
    console.log('Logging in with', this.username, this.password);
  }
}
