import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WatchedMovieService } from '../watched-movie-service';
import { WatchedMovieListComponent } from '../watched-movie-list.component/watched-movie-list.component';
import { LoginService } from '../login-service';

@Component({
  selector: 'app-watched-movie-form',
  standalone: true,
  imports: [ReactiveFormsModule, ],
  templateUrl: './watched-movie-form.html',
  styleUrl: './watched-movie-form.scss',
})
export class WatchedMovieForm {
  
  
  watchedMovieService = inject(WatchedMovieService);
  loginService = inject(LoginService);
  private readonly fb = inject(FormBuilder);

  watchedMovieForm: FormGroup;

  constructor() {
    this.watchedMovieForm = this.initializeForm();
  }

  private initializeForm(): FormGroup {
    return this.fb.group({
      user: [this.loginService.username, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      movieID: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
      watchedDate: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (!this.watchedMovieForm.valid) {
      return;
    }

    const user = this.loginService.username;
    const movieID = this.watchedMovieForm.get('movieID')?.value;
    const watchedDate = this.watchedMovieForm.get('watchedDate')?.value;

    this.watchedMovieService.createWatchedMovie({ movieID, user, watchedDate})
      .subscribe({
        next: (res) => {
          console.log('Movie successfully saved:', res);
          this.watchedMovieForm.reset();
          this.watchedMovieService.needToUpdateSwitch.update(current => !current);
        },
        error: (err) => {
          console.error('Failed to save movie:', err);
        }
      });
  }
}
