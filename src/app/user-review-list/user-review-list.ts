import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, UserReview } from '../user.service';
import { UserReviewDetail } from "../user-review-detail/user-review-detail";

@Component({
  selector: 'app-user-review-list',
  standalone: true,
  imports: [CommonModule, UserReviewDetail],
  templateUrl: './user-review-list.html',
  styleUrls: ['./user-review-list.scss'],
})
export class UserReviewList implements OnInit {

  userService = inject(UserService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  reviews = signal<UserReview[]>([]);
  newReviewText = signal('');
  showReviewForm = signal(false);
  
  // Movie ID from route
  movieId = signal<number>(1);

  constructor() {
    effect(() => {
      this.userService.needToUpdateSwitch();
      this.loadReviews();
    });
  }

  ngOnInit(): void {
    // Get movieId from route params
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.movieId.set(id);
      this.loadReviews();
    });
  }

  loadReviews(): void {
    this.userService.getReviews().subscribe({
      next: (reviews: UserReview[]) => {
        // Filter reviews for this movie
        const movieReviews = reviews.filter(r => r.movieID === this.movieId());
        this.reviews.set(movieReviews);
        console.log('Updated reviews list');
      },
      error: (err) => {
        console.error('Failed to load reviews:', err);
      }
    });
  }

  toggleReviewForm() {
    this.showReviewForm.update(v => !v);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  addNewReview() {
    if (!this.newReviewText()) return;

    const newReview: UserReview = {
      username: 'asmith',
      movieID: this.movieId(),
      rating: 5,
      writtenReview: this.newReviewText(),
      reviewDate: new Date().toISOString()
    };

    this.userService.createReview(newReview).subscribe({
      next: (res) => {
        console.log('Review successfully saved:', res);
        this.newReviewText.set('');
        this.showReviewForm.set(false);
        this.userService.needToUpdateSwitch.update(current => !current);
      },
      error: (err) => {
        console.error('Failed to save review:', err);
      }
    });
  }

  deleteReview(review: UserReview): void {
    this.userService.deleteReview(review.username, review.movieID).subscribe({
      next: () => {
        console.log(`Deleted review for ${review.username} / movie ${review.movieID}`);
        this.userService.needToUpdateSwitch.update(current => !current);
        },
      error: (err) => {
        console.error('Failed to delete review:', err);
      }
    });
  }
}
