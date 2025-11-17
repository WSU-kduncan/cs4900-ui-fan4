import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService, Movie } from '../movie-service';
import { MovieDetail } from '../movie-detail/movie-detail';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieDetail],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss',
})
export class MovieListComponent {
  movieService = inject(MovieService);

  movies = toSignal(this.movieService.getMovies(), { initialValue: [] });

  newMovieTitle = signal('');

  addMovie() {
    if (!this.newMovieTitle()) return;

    const newId = this.movies().length + 1;
    this.movieService.addMovie({
      movieID: newId,
      title: this.newMovieTitle(),
      director: 'Unknown',
      genre: 'Unknown',
      releaseDate: new Date(),
    });

    this.newMovieTitle.set('');
  }
}