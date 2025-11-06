import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss',
})
export class MovieListComponent {
  movies = [
    {id: 1, title: 'The Matrix', director: 'Lana Wachowski', genre: 'Sci-Fi', releaseDate: '1999-03-31'},
    {id: 2, title: 'Inception', director: 'Christopher Nolan', genre: 'Sci-Fi', releaseDate: '2010-07-16'},
    {id: 3, title: 'The Dark Knight', director: 'Christopher Nolan', genre: 'Action', releaseDate: '2008-07-18'},
    {id: 4, title: 'Interstellar', director: 'Christopher Nolan', genre: 'Sci-Fi', releaseDate: '2014-11-07'},
  ];
}
