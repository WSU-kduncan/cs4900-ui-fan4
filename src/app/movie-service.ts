import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  movieID: number;
  title: string;
  director: string;
  genre: string;
  releaseDate: Date;
}

@Injectable({
  providedIn: 'root',
})

export class MovieService {
  constructor(private http: HttpClient) {}

  movies = signal<Movie[]>([]);

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:8080/Fan4/movie');
  }

  addMovie(movie: Movie) {
    this.movies.update(movies => [...movies, movie]);
  }
}
