import { Component, signal, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WatchedMovieListComponent } from "./watched-movie-list.component/watched-movie-list.component";
import { WatchedMovieForm } from "./watched-movie-form/watched-movie-form";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WatchedMovieListComponent, WatchedMovieForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('collectiviews');
}
