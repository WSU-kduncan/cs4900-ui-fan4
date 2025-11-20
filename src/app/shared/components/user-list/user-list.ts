import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user-service';
import { UserDetail } from '../user-detail/user-detail';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule, UserDetail],
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

  newUserName = signal(''); 

  // Method that gets called when the "Add User" button is clicked
  addUser() {
    const newUser = this.newUserName().trim();

    if (newUser) {
      this.userService.addUser(newUser);
      this.newUserName.set(''); // Clear the input field after adding
    }
  }
}

