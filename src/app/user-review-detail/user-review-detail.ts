import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserReview } from '../user.service';

@Component({
  selector: 'app-user-review-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-review-detail.html',
  styleUrl: './user-review-detail.scss',
})

export class UserReviewDetail {
  review = input.required<UserReview>();
}
