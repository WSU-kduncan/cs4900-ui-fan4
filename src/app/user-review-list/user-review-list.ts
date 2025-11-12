import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { UserReviewDetail } from "../user-review-detail/user-review-detail";

@Component({
  selector: 'app-user-review-list',
  standalone: true,
  imports: [CommonModule, UserReviewDetail],
  templateUrl: './user-review-list.html',
  styleUrls: ['./user-review-list.scss'],
})

export class UserReviewList {
  // Inject the service
  userService = inject(UserService);

  // Signal for the input text
  newReviewText = signal('');

  // Reference the reviews from the service
  userReviews = this.userService.userReviews;

  // Method to add a review via the service
  addNewReview() {
    if (!this.newReviewText()) return; // ignore empty input

    const newId = this.userReviews().length + 1;
    this.userService.addReview({
      id: newId,
      username: 'new_user', // could be dynamic later
      rating: 5,
      review: this.newReviewText()
    });

    this.newReviewText.set(''); // clear input
  }
}
