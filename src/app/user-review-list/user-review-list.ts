import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService, UserReview } from '../user.service';
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

  reviews = toSignal(this.userService.getReviews(), { initialValue: [] });

  // Signal for the input text
  newReviewText = signal('');

  // Method to add a review via the service
  addNewReview() {
    if (!this.newReviewText()) return; // ignore empty input

    this.userService.addReview({
      username: 'new_user', // could be dynamic later
      movieID: 1,
      rating: 5,
      writtenReview: this.newReviewText(),
      reviewDate: new Date().toISOString()
    });

    this.newReviewText.set(''); // clear input
  }

  // Will probably need to implement a post method for the new review button.
}
