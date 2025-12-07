import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  username: string;

  constructor(private http: HttpClient){
    this.username = "asmith";
  }

  //! TODO: implement login user check
  // login(movieID){}
}
