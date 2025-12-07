import { CommonModule } from '@angular/common';
import { Component, DestroyRef, effect, inject, signal, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, UserReview } from '../user.service';
import { UserReviewDetail } from "../user-review-detail/user-review-detail";
import { WatchedMovieDetail } from "../watched-movie-detail/watched-movie-detail";
import { WatchedMovie, WatchedMovieService } from '../watched-movie-service'
import { LoginService } from '../login-service';

@Component({
  selector: 'app-user-review-list',
  standalone: true,
  imports: [CommonModule, UserReviewDetail, WatchedMovieDetail],
  templateUrl: './user-review-list.html',
  styleUrls: ['./user-review-list.scss'],
})
export class UserReviewList implements OnInit {

  userService = inject(UserService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  destroyRef = inject(DestroyRef);

  reviews = signal<UserReview[]>([]);
  newReviewText = signal('');
  showReviewForm = signal(false);

  loginService = inject(LoginService);
  watchedMovieService = inject(WatchedMovieService);
  
  // Movie ID from route
  movieId = signal<number>(1);

  isWatched: boolean = false;
  watchedMovieEntry = signal<WatchedMovie | null>(null);

  deleteSignal = signal<boolean>(false);

  constructor() {
    effect(() => {
      this.watchedMovieService.needToUpdateSwitch();
      this.getWatchedMovie(this.movieId(), this.loginService.username);
    });

    effect(() => {
      this.userService.needToUpdateSwitch();
      this.loadReviews();
    });
  }

  ngOnInit(): void {
    // Get movieId from route params
    this.route.params.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(params => {
      const id = +params['id'];
      this.movieId.set(id);
      this.loadReviews();
      this.getWatchedMovie(id, this.loginService.username);
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
    this.router.navigate(['movies']);
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

getWatchedMovie(movieID: number, user: string) {
    this.watchedMovieService.getWatchedMovie(movieID, user).subscribe({
      next: (watchedMovie: WatchedMovie) => {
        if (watchedMovie) {
          this.watchedMovieEntry.set(watchedMovie);
          this.isWatched = true;
        } else {
          this.watchedMovieEntry.set(null);
          this.isWatched = false;
        }
      },
      error: (err) => {
        console.error('Failed to load watched movie:', err);
        this.watchedMovieEntry.set(null);
      }
    });
  }

  deleteWatchedMovie(movieID: number,user: string) {
    this.watchedMovieService.deleteWatchedMovie(movieID, user).subscribe({
      next: (statusCode) => {
        console.log('Delete successful, status:', statusCode);

        // Force watchedMovieList to update
        this.deleteSignal.update(current => !current);

      },
      error: (error) => {
        console.error('Delete failed:', error);
        this.watchedMovieService.needToUpdateSwitch.update(current => !current)
      }
    });
  }
}