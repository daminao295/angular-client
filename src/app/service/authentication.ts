import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {User} from '../model/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  // authenticate(username, password) {
  //   if (username === "admin" && password === "admin") {
  //     sessionStorage.setItem('username', username)
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  authenticate(username, password) {
    console.log("AuthenticationService authenticate method");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User>('http://localhost:8080/validateLogin',{headers}).pipe(
     map(
       userData => {
         console.log("userData " +userData);
        sessionStorage.setItem('username',username);
        let authString = 'Basic ' + btoa(username + ':' + password);
        sessionStorage.setItem('basicauth', authString);
        return userData;
       }
     ), 

    );
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
