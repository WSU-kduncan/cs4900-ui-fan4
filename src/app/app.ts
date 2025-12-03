import { Component, signal, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list';
import { MovieForm } from './movie-form/movie-form';
import { UserReviewList } from "./user-review-list/user-review-list";
import { UserList } from './shared/components/user-list/user-list';
import { WatchedMovieListComponent } from "./watched-movie-list.component/watched-movie-list.component";
import { WatchedMovieForm } from "./watched-movie-form/watched-movie-form";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WatchedMovieListComponent, WatchedMovieForm, RouterOutlet, UserList, MovieListComponent, MovieForm, UserReviewList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('collectiviews');
}
