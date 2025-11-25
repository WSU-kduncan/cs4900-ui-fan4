import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService, Movie } from '../movie-service';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.scss',
})
export class MovieForm {
  movieService = inject(MovieService);
  private readonly fb = inject(FormBuilder);

  movieForm: FormGroup;

  constructor() {
    this.movieForm = this.initializeForm();
  }

  private initializeForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      director: [''],
      genre: [''],
      releaseDate: ['']
    });
  }

  onSubmit(): void {
    if (!this.movieForm.valid) return;

    const movie: Movie = {
      ...this.movieForm.value
    }

    this.movieService.addMovie(movie).subscribe({
      next: (res) => {
        console.log('Movie successfully added:', res);
        this.movieForm.reset();
        this.movieService.refreshList?.update(current => !current);
      },
      error: (err) => {
        console.error('Failed to add movie', err);
      }
    });
  }
}
