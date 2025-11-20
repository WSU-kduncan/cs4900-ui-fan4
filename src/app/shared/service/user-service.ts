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
  addUser(username: string) {
    const userId = (this.users().length + 1).toString();
    const newUser: User = { id: userId, name: username };
    this.users.update(currentUsers => [...currentUsers, newUser]); // signal requires an update function to modify its value
  }

}
