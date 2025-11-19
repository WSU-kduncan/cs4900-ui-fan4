import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';


// This allows UserService to be available application-wide
// Also allows the service to declare its own scope
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Data - Class Property (can be accessed in component and template)
  users = signal<User[]>([
    {id: '1', name: "asmith" },
    {id: '2', name: "bwayne" },
    {id: '3', name: "ckent" },
    {id: '4', name: "jdoe" },
    {id: '5', name: "tony_stark123" }
  ]);

  // Method to add a new user
  addUser(user: User) {
    this.users.update(currentUsers => [...currentUsers, user]); // signal requires an update function to modify its value
  }
}
