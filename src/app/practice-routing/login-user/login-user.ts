import { CommonModule } from '@angular/common';
import { Component, inject,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-user.html',
  styleUrl: './login-user.scss',
})
export class LoginUser implements OnInit {
  username: string = '';
  password: string = '';
  private router = inject(Router);
  ngOnInit():void { 
    this.username=localStorage.getItem('loggedInUser') || '';
    this.password=localStorage.getItem('loggedInPassword') || '';
    if(this.username && this.password){
      this.router.navigate(['/home']);
    }
  }
  onLogin(form: any) {
    if (form.valid) {
      console.log('Logging in with', this.username, this.password);
      localStorage.setItem('loggedInUser', this.username);
      localStorage.setItem('loggedInPassword', this.password);
      this.router.navigate(['/home']);
    }
  }
}
