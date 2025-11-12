import { Injectable, signal } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  director: string;
  genre: string;
  releaseDate: Date;
}

@Injectable({
  providedIn: 'root',
})

export class MovieService {
  movies = signal<Movie[]>([
    {id: 1, title: 'The Matrix', director: 'Lana Wachowski', genre: 'Sci-Fi', releaseDate: new Date('1999-03-31')},
    {id: 2, title: 'Inception', director: 'Christopher Nolan', genre: 'Sci-Fi', releaseDate: new Date('2010-07-16')},
    {id: 3, title: 'The Dark Knight', director: 'Christopher Nolan', genre: 'Action', releaseDate: new Date('2008-07-18')},
    {id: 4, title: 'Interstellar', director: 'Christopher Nolan', genre: 'Sci-Fi', releaseDate: new Date('2014-11-07')},
  ]);

  addMovie(movie: Movie) {
    this.movies.update(movies => [...movies, movie]);
  }
}
