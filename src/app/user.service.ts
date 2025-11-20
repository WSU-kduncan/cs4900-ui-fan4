import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserReview {
  username: string;
  movieID: number;
  rating: number;
  writtenReview: string;
  reviewDate: string;
}

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor(private http: HttpClient) {}

  // Currently a local signal to store new reviews but will need to change this when implenting put and post.
  userReviews = signal<UserReview[]>([]);
  
  getReviews(): Observable<UserReview[]> {
    return this.http.get<UserReview[]>('http://localhost:8080/Fan4/review');
  }

  createReview(review: UserReview): Observable<UserReview> {
    return this.http.post<UserReview>('http://localhost:8080/Fan4/review', review);
  }

  deleteReview(username: string, movieID: number) {
    return this.http.delete<void>(`http://localhost:8080/Fan4/review/by-id/username=${username}/movieID=${movieID}`);
  }
  needToUpdateSwitch = signal(false);
}
