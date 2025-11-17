import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
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

  newWatchedMovieDate = signal<string>(''); // Maybe remove string specifier?

  watchedMovies = toSignal(this.watchedMovieService.getWatchedMovies(), { initialValue: [] })

  addNewWatchedMovie() {
    // Checks for null values
    if (this.newWatchedMovieDate() == null){return;}

    // All hardcoded values except inputted movieID value for now
    this.watchedMovieService.addWatchedMovie(
      {id: 2, name: 'jdoe', watchedDate: this.newWatchedMovieDate()}
    )
  }
}
