import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { UserReviewList } from './user-review-list/user-review-list';
import { LoginPage } from './user-login-page/login-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'movie/:id', component: UserReviewList },
  { path: 'login', component: LoginPage},


    // Default redirect
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  // Wildcard route - must be last
  {
    path: '**',
    redirectTo: '/login'
  }
];
