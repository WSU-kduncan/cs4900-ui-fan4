import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { WatchedMovie, WatchedMovieService } from '../watched-movie-service';
import { WatchedMovieDetail } from "../watched-movie-detail/watched-movie-detail";
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-watched-movie-list',
  standalone: true,
  imports: [CommonModule, WatchedMovieDetail],
  templateUrl: './watched-movie-list.component.html',
  styleUrl: './watched-movie-list.component.scss',
})
export class WatchedMovieListComponent {

  constructor() {
  effect(() => {
    this.watchedMovieService.needToUpdateSwitch();
    this.loadWatchedMovies();
  });
}


  watchedMovieService = inject(WatchedMovieService);

  newWatchedMovieDate = signal<string>('');

  watchedMovies = signal<WatchedMovie[]>([]);

  ngOnInit(): void{
    this.loadWatchedMovies();
  }

  loadWatchedMovies(): void {
    this.watchedMovieService.getWatchedMovies()
      .subscribe({
        next: (movies: any[]) => {
          this.watchedMovies.set(movies);
          console.log('Updated watched movies list');
        },
        error: (error) => {
          console.error('Failed to load watched movies:', error);
        }
      });
  }
}
