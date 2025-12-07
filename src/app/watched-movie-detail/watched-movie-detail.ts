import { Component, inject, input } from '@angular/core';
import { WatchedMovieListComponent } from '../watched-movie-list.component/watched-movie-list.component';
import { WatchedMovie, WatchedMovieService } from '../watched-movie-service'

@Component({
  selector: 'app-watched-movie-detail',
  imports: [],
  templateUrl: './watched-movie-detail.html',
  styleUrl: './watched-movie-detail.scss',
})
export class WatchedMovieDetail {
  watchedMovie = input.required<WatchedMovie>();

  watchedMovieService = inject(WatchedMovieService)

  deleteWatchedMovie(movieId: number, user:string){
    this.watchedMovieService.deleteWatchedMovie(movieId, user).subscribe({
      next: (statusCode) => {
        console.log('Delete successful, status:', statusCode);

        // Force watchedMovieList to update
        this.watchedMovieService.needToUpdateSwitch.update(current => !current)

      },
      error: (error) => {
        console.error('Delete failed:', error);
        this.watchedMovieService.needToUpdateSwitch.update(current => !current)
      }
    });
  }
}

