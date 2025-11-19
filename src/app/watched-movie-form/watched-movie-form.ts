import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WatchedMovieService } from '../watched-movie-service';

@Component({
  selector: 'app-watched-movie-form',
  imports: [ReactiveFormsModule],
  templateUrl: './watched-movie-form.html',
  styleUrl: './watched-movie-form.scss',
})
export class WatchedMovieForm {

  watchedMovieService = inject(WatchedMovieService);

  private readonly fb = inject(FormBuilder);

  watchedMovieForm: FormGroup

  constructor(){
    this.watchedMovieForm = this.initializeForm();
  }

  private initializeForm(): FormGroup{
    return this.fb.group({
      user: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      movieID: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
      watchedDate: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    
    if (!this.watchedMovieForm.valid){
      return;
    }

    const user = this.watchedMovieForm.get('user')?.value;
    const movieID = this.watchedMovieForm.get('movieID')?.value;
    const watchedDate = this.watchedMovieForm.get('watchedDate')?.value;

    this.watchedMovieService.createWatchedMovie({movieID,user,watchedDate})

    this.watchedMovieForm.reset();

    this.watchedMovieService.getWatchedMovies();//! should be updating signal automatically
  }
}
