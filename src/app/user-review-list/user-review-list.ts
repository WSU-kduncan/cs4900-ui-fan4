import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { readableStreamLikeToAsyncGenerator } from 'rxjs/internal/util/isReadableStreamLike';

interface UserReview { // Declares variables that will be used in the user review list
  id: number;
  username: string;
  rating: number;
  review: string;
}

@Component({ // Defines the UserReviewList component
  selector: 'app-user-review-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-review-list.html',
  styleUrl: './user-review-list.scss',

})
export class UserReviewList { // Creates a list of user reviews
  userReviews: UserReview[] = [
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
  ];   
}
