import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../movie-service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss',
})
export class MovieDetail {
  movie = input.required<Movie>();
}
