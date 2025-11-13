import { Component, input } from '@angular/core';
import { WatchedMovieListComponent } from '../watched-movie-list.component/watched-movie-list.component';
import { WatchedMovie } from '../watched-movie-service'

@Component({
  selector: 'app-watched-movie-detail',
  imports: [],
  templateUrl: './watched-movie-detail.html',
  styleUrl: './watched-movie-detail.scss',
})
export class WatchedMovieDetail {
  watchedMovie = input.required<WatchedMovie>();
}