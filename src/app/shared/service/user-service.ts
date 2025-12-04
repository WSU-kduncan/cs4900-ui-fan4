import { inject, Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';
import { UserDto } from '../models/user.dto';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// This allows UserService to be available application-wide
// Also allows the service to declare its own scope
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Inject HttpClient
  private readonly http = inject(HttpClient);

  // Fake API endpoint
  private readonly apiUrl = 'https://localhost:8080/Fan4/user';

  users = signal<UserDto[]>( [] );      // Signal to hold the list of users

  /**
   * GET request that fetches users from the API
   * @returns Observable<UserDto[]>
   */
  getUsers(): Observable<UserDto[]> {
    
    return this.http.get<UserDto[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          return of([]); // Return an empty array on error
        })
      )
  }

  // Method to add a new user
  addUser(username: string, name: string) {
    const birthdate = "";
    const newUser: UserDto = {username: username, name: name, birthdate: birthdate};
    //this.users.update(currentUsers => [...currentUsers, newUser]); // signal requires an update function to modify its value
  }

}
