import { Component } from '@angular/core';
import { HomePage } from './home-page/home-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WatchedMovieListComponent, WatchedMovieForm, RouterOutlet, UserList, MovieListComponent, MovieForm, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
