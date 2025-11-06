import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserReviewList } from "./user-review-list/user-review-list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserReviewList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('collectiviews');
}
