import { Component } from '@angular/core';
import { MovieDetail } from "../movie-detail/movie-detail";
import { MovieListComponent } from "../movie-list/movie-list";
import { MovieForm } from "../movie-form/movie-form";
import { UserList } from "../shared/components/user-list/user-list";
import { UserReviewList } from "../user-review-list/user-review-list";
import { WatchedMovieListComponent } from "../watched-movie-list.component/watched-movie-list.component";
import { WatchedMovieForm } from "../watched-movie-form/watched-movie-form";
import { UserDetail } from "../shared/components/user-detail/user-detail";

@Component({
  selector: 'app-example',
  imports: [MovieListComponent, MovieForm, UserList, WatchedMovieListComponent, WatchedMovieForm],
  templateUrl: './example.html',
  styleUrl: './example.scss',
})
export class Example {

}
