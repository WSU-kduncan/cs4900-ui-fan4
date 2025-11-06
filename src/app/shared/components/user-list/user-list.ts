import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
/**
 * The Component class
 *  Contains business logic and data live
 */
export class UserList {
  // Data - Class Property (can be accessed in component and template)
  users: User[] = [
    {id: '1', name: "asmith" },
    {id: '2', name: "bwayne" },
    {id: '3', name: "ckent" },
    {id: '4', name: "jdoe" },
    {id: '5', name: "tony_stark123" }
  ]
}

/** 
 * Defines variables for User object
 *   TODO: I should put this in its own file so I can import it anywhere cleanly
 */
export interface User {
  id: string;
  name: string;
}