import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  username: string;

  constructor(private http: HttpClient){
    this.username = "asmith"; // Hardcoded to match current login page
  }
}
