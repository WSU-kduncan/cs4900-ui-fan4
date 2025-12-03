import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Movie {
  movieID?: any;
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

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>('http://localhost:8080/Fan4/movie', movie);
  }

  deleteMovie(movieID: number): Observable<HttpResponse<any>> {
    return this.http.delete<Movie>(`http://localhost:8080/Fan4/movie/${movieID}`, { observe: 'response' }).pipe(
      map((response: { status: any; }) => response.status));
  }

  refreshList = signal(false);
}
