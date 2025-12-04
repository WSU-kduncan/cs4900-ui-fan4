import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage = "";

  constructor(
    private router: Router
  ) {}

  onLogin() {
    this.errorMessage = '';

    if (!this.username.trim() || !this.password.trim()) {
      this.errorMessage = 'Username and password are required.';
      return;
    }

    // Hardcoded user password check
    if (this.username === 'asmith' && this.password === 'password') {
      this.router.navigate(['/movies']);
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }
}