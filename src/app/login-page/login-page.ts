import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPage {

  loginForm: FormGroup;
  errorMessage = signal<string>('');

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.errorMessage.set('');

    if (this.loginForm.invalid) {
      this.errorMessage.set('Username and password are required.');
      return;
    }

    const { username, password } = this.loginForm.value;

    if (username === 'asmith' && password === 'password') {
      this.router.navigate(['/movies']);
    } else {
      this.errorMessage.set('Invalid username or password.');
    }
  }
}
