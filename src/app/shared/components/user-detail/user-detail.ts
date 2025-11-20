import { Component, input } from '@angular/core';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
/**
 * Child Component class that displays the details of a user
 * Receives user data via signal input from parent component
 */
export class UserDetail {
  // Required signal input provided by parent component
  user = input.required<User>();
}
