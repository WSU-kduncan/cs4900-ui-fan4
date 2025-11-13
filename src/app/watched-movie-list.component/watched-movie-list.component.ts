import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { WatchedMovieService } from '../watched-movie-service';



@Component({
  selector: 'app-watched-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './watched-movie-list.component.html',
  styleUrl: './watched-movie-list.component.scss',
})
export class WatchedMovieListComponent {


  watchedMovieService = inject(WatchedMovieService);

  newWatchedMovieDate = signal<string>(''); // Maybe remove string specifier?

  addNewWatchedMovie() {
    // Check for null values
    if (this.newWatchedMovieDate() == null){return;}

    // All hardcoded values except inputted movieID value for now
    this.watchedMovieService.addWatchedMovie(
      {id: 2, name: 'jdoe', watchedDate: this.newWatchedMovieDate()}
    )
  }
}
