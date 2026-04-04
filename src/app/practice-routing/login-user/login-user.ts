import { CommonModule } from '@angular/common';
import { Component, inject,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-user.html',
  styleUrl: './login-user.scss',
})
export class LoginUser implements OnInit {
  username: string = '';
  password: string = '';
  source: string = '';
  private router = inject(Router);
  private authService = inject(AuthService);
  ngOnInit():void { 
    this.username=localStorage.getItem('loggedInUser') || '';
    this.password=localStorage.getItem('loggedInPassword') || '';
    if(this.username && this.password){
      this.router.navigate(['/home']);
    }
  }
  onLogin(form: any) {
    console.log('form data', this.source);
    
    if (form.valid) {
      this.authService.login({ source: this.source }, { email: this.username, password: this.password }).subscribe(
        (response) => {
          console.log('logged in succesfully');
          localStorage.setItem('loggedInUser', this.username);
          localStorage.setItem('loggedInPassword', this.password);
          this.router.navigate(['/home']);
        }
      );
    }
  }
}
