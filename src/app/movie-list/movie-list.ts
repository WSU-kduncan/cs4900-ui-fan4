import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movie-service';
import { MovieDetail } from '../movie-detail/movie-detail';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieDetail],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss',
})
export class MovieListComponent {
  private readonly movieService = inject(MovieService);

  newMovieTitle = signal('');

  movies = this.movieService.movies;

  addMovie() {
    if (!this.newMovieTitle()) return;

    const newId = this.movies().length + 1;
    this.movieService.addMovie({
      id: newId,
      title: this.newMovieTitle(),
      director: 'Unknown',
      genre: 'Unknown',
      releaseDate: new Date(),
    });

    this.newMovieTitle.set('');
  }
}