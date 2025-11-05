import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WatchedMovieListComponent } from "./watched-movie-list.component/watched-movie-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WatchedMovieListComponent, WatchedMovieListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('collectiviews');
}
