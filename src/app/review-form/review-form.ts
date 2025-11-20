import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService, UserReview } from '../user.service';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './review-form.html',
  styleUrl: './review-form.scss',
})
export class ReviewFormComponent {

  userService = inject(UserService);
  private fb = inject(FormBuilder);

  reviewForm: FormGroup;

  constructor() {
    this.reviewForm = this.initializeForm();
  }

  private initializeForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      movieID: ['', [Validators.required]],
      rating: [5, [Validators.required]],
      writtenReview: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(500)]]
    });
  }

  onSubmit(): void {
    if (!this.reviewForm.valid) return;

    const review: UserReview = {
      ...this.reviewForm.value,
      reviewDate: new Date().toISOString()
    };

    this.userService.createReview(review).subscribe({
      next: (res) => {
        console.log('Review successfully saved:', res);
        this.reviewForm.reset({ rating: 5 });

        // Optional: trigger list refresh
        this.userService.needToUpdateSwitch?.update(current => !current);
      },
      error: (err) => {
        console.error('Failed to save review:', err);
      }
    });
  }
}
