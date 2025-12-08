import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { UserReviewList } from './user-review-list/user-review-list';
import { LoginPage } from './login-page/login-page';
import { MovieDetail } from './movie-detail/movie-detail';
import { MovieForm } from './movie-form/movie-form';
import { Example } from './example/example';

export const routes: Routes = [
  { path: 'movies', component: HomePage },
  { path: 'movie/:id', component: UserReviewList },
  { path: 'login', component: LoginPage},
  { path: 'example', component: Example},


    // Default redirect
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Wildcard route - must be last
  {
    path: '**',
    redirectTo: 'login'
  }
];
