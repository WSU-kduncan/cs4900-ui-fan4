import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface WatchedMovie{
  user: string;
  movieID: number;
  watchedDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class WatchedMovieService {

  constructor(private http: HttpClient){}

  needToUpdateSwitch = signal(false); // Ask about in class

  createWatchedMovie(newWatchedMovie : WatchedMovie): Observable<WatchedMovie>{
    console.log(newWatchedMovie);
    return this.http.post<WatchedMovie>('http://localhost:8080/Fan4/watched-movie', newWatchedMovie);
  }

  getWatchedMovies(): Observable<WatchedMovie[]>{
    return this.http.get<WatchedMovie[]>('http://localhost:8080/Fan4/watched-movie'); // Required adding CORS file in API
  }

  deleteWatchedMovie(movieID: number, user: string): Observable<HttpResponse<any>> {
    return this.http.delete<WatchedMovie>(`http://localhost:8080/Fan4/watched-movie/${movieID}/${user}`, { observe: 'response' }).pipe(
      map((response: { status: any; }) => response.status));
  }
}
