import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface WatchedMovie{
  name: string;
  id: number;
  watchedDate: string;
}

@Component({
  selector: 'app-watched-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './watched-movie-list.component.html',
  styleUrl: './watched-movie-list.component.scss',
})
export class WatchedMovieListComponent {

  // Recreation of DB for watched movies on user `jdoe` user page
  // movieID is now id
  // user is now name
  watchedMovies = signal<WatchedMovie[]>([ // Should be set to import DTO later (I think)
    {id: 1, name: 'jdoe', watchedDate: '2023-05-01'},
    {id: 2, name: 'jdoe', watchedDate: '2023-05-05'}
  ]);

}
