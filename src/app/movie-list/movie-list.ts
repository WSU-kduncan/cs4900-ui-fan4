import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { MovieService, Movie } from '../movie-service';
import { MovieDetail } from '../movie-detail/movie-detail';
import { toSignal } from '@angular/core/rxjs-interop';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieDetail],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss',
})
export class MovieListComponent {
  movieService = inject(MovieService);

  movies = signal<Movie[]>([]);
  newMovieTitle = signal('');

  thumbnailMapByTitle: Record<string, string> = {
    "The Matrix": "/matrixThumbnail.png",
    "Inception": "/inceptionThumbnail.png",
    "The Dark Knight": "/darkKnightThumbnail.png",
    "Interstellar": "/interstellarThumbnail.png"
  };

  constructor() {
    effect(() => {
      this.movieService.refreshList();
      this.loadMovies();
    });
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (movies: Movie[]) => {
        const moviesWithThumbs = movies.map(m => ({
          ...m,
          thumbnailUrl: this.thumbnailMapByTitle[m.title] || "/fallback.png"
        }));
        this.movies.set(moviesWithThumbs);
        console.log('Updated movie list with thumbnails');
      },
      error: (err) => {
        console.error('Could not load movies:', err);
      }
    });
  }

  addMovie() {
    if (!this.newMovieTitle()) return;

    const newMovie: Movie = {
      title: this.newMovieTitle(),
      director: 'Unknown',
      genre: 'Unknown',
      releaseDate: new Date()
    };

    this.movieService.addMovie(newMovie).subscribe({
      next: (res) => {
        console.log('Movie successfully added:', res);
        this.newMovieTitle.set('');
        this.movieService.refreshList.update(current => !current);
      },
      error: (err) => {
        console.error('Failed to add movie:', err);
      }
    });
  }

  deleteMovie(movieID: number) {
    this.movieService.deleteMovie(movieID).subscribe({
      next: (statusCode) => {
        console.log('Delete successful, status: ', statusCode);

        this.movieService.refreshList.update(current => !current)
      },
      error: (error) => {
        console.error('Delete failed: ', error);
        this.movieService.refreshList.update(current => !current)
      }
    })
  }
}