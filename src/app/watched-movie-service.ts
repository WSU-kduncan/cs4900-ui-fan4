import { Injectable, signal } from '@angular/core';
import { WatchedMovieListComponent } from './watched-movie-list.component/watched-movie-list.component';

export interface WatchedMovie{
  name: string;
  id: number;
  watchedDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class WatchedMovieService {
  watchedMovies = signal<WatchedMovie[]>([
    {id: 1, name: 'jdoe', watchedDate: '2023-05-01'},
    {id: 2, name: 'jdoe', watchedDate: '2023-05-05'}
  ]);

  addWatchedMovie(newWatchedMovie : WatchedMovie){
    this.watchedMovies.update((currentWatchedMovies) => [...currentWatchedMovies, newWatchedMovie]);
  }
}
