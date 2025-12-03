import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';

import { routes } from './app.routes';
import { WatchedMovieService } from './watched-movie-service';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { UserService } from './shared/service/user-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    WatchedMovieService,
    UserService
  ]
};
