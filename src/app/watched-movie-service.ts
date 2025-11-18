import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WatchedMovie{
  username: string;
  movieID: number;
  watchedDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class WatchedMovieService {

  constructor(private http: HttpClient){}

  watchedMovies = signal<WatchedMovie[]>([]);

  addWatchedMovie(newWatchedMovie : WatchedMovie){
    this.watchedMovies.update((currentWatchedMovies) => [...currentWatchedMovies, newWatchedMovie]);
  }

  getWatchedMovies(): Observable<WatchedMovie[]>{
    return this.http.get<WatchedMovie[]>('http://localhost:8080/Fan4/watched-movie'); // Required adding CORS file in API
  }
}
