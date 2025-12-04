import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  searchQuery = 'Fantastic'; // Hardcoded for now to match mockup
}

