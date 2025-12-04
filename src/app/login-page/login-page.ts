import { Component, signal } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPage {

  username = signal<string>('');
  password = signal<string>('');
  errorMessage = signal<string>('');
  loginForm: FormGroup;

  constructor(
    private router: Router
  ) {}

  onLogin() {

    this.errorMessage.set('');

    if (!this.username() || !this.password()) {
      this.errorMessage.set('Username and password are required.');
      return;
    }

    // Hardcoded user password check
    if (this.username() === 'asmith' && this.password() === 'password') {
      this.router.navigate(['/movies']);
    } else {
      this.errorMessage.set('Invalid username or password.');
    }
  }
}
