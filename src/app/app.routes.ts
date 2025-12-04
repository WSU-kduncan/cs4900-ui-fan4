import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { UserReviewList } from './user-review-list/user-review-list';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'movie/:id', component: UserReviewList },
];
