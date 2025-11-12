import { Injectable, signal } from '@angular/core';

export interface UserReview {
  id: number;
  username: string;
  rating: number;
  review: string;
}

@Injectable({
  providedIn: 'root',
})

export class UserService {
  userReviews = signal<UserReview[]>([
    {
      id: 1,
      username: 'john_doe',
      rating: 5,
      review: 'The guy below is lying.',
    },
    {
      id: 2,
      username: 'jane_smith',
      rating: 4,
      review: 'I always tell the truth, the guy above or below is lying.',
    },
    {
      id: 3,
      username: 'alice_jones',
      rating: 3,
      review: 'Average movie, nothing special.',
    },
  
  ]); 

  addReview(review: UserReview) {
    this.userReviews.update(reviews => [...reviews, review]);
  }
}
