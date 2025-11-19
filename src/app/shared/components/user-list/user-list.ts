import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user-service';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
  standalone: true,
})
/**
 * The Component class
 *  Contains business logic and data live
 */
export class UserList {
  // Inject the UserService singleton
  private readonly userService = inject(UserService);

  // Access the users signal from the service
  users = this.userService.users;

  
}

