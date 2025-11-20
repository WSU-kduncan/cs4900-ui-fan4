import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
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

  userService = inject(UserService);

  reviews = signal<UserReview[]>([]);
  newReviewText = signal('');

  constructor() {
    // Effect: reload reviews whenever needToUpdateSwitch toggles
    effect(() => {
      this.userService.needToUpdateSwitch();
      this.loadReviews();
    });
  }

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.userService.getReviews().subscribe({
      next: (reviews: UserReview[]) => {
        this.reviews.set(reviews);
        console.log('Updated reviews list');
      },
      error: (err) => {
        console.error('Failed to load reviews:', err);
      }
    });
  }

  addNewReview() {
    if (!this.newReviewText()) return;

    const newReview: UserReview = {
      username: 'asmith',
      movieID: 1,
      rating: 5,
      writtenReview: this.newReviewText(),
      reviewDate: new Date().toISOString()
    };

    this.userService.createReview(newReview).subscribe({
      next: (res) => {
        console.log('Review successfully saved:', res);
        this.newReviewText.set('');
        // Toggle to refresh list
        this.userService.needToUpdateSwitch.update(current => !current);
      },
      error: (err) => {
        console.error('Failed to save review:', err);
      }
    });
  }

  deleteReview(review: UserReview): void {
    this.userService.deleteReview(review.username, review.movieID) //.subscribe({
      //next: () => {
        //console.log(`Deleted review for ${review.username} / movie ${review.movieID}`);
        //// Trigger list refresh
        this.userService.needToUpdateSwitch.update(current => !current);
        //},
      //error: (err) => {
        //console.error('Failed to delete review:', err);
      //}
    //});
  }
}
