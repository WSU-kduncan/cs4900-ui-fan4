import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { WatchedMovieService } from '../watched-movie-service';
import { WatchedMovieDetail } from "../watched-movie-detail/watched-movie-detail";
import { toSignal } from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-watched-movie-list',
  standalone: true,
  imports: [CommonModule, WatchedMovieDetail],
  templateUrl: './watched-movie-list.component.html',
  styleUrl: './watched-movie-list.component.scss',
})
export class WatchedMovieListComponent {

  watchedMovieService = inject(WatchedMovieService);

  newWatchedMovieDate = signal<string>('');

  watchedMovies = toSignal(this.watchedMovieService.getWatchedMovies(), { initialValue: [] })

  loadWatchedMovies(): void {
    this.watchedMovieService.getWatchedMovies()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (movies: any[]) => {
          this.watchedMovies.set(movies);
        },
        error: (error) => {
          console.error('Failed to load watched movies:', error);
        }
      });
  }
}
