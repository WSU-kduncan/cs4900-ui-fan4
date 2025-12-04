import { Component } from '@angular/core';
import { HomePage } from './home-page/home-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
