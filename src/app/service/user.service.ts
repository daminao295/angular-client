import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = '';

  constructor(private http: HttpClient) {
    this.userUrl = "http://localhost:8080/users"
  }

  public createUser(user: User) {
    console.log("service");
    console.log(user);
    this.http.post(this.userUrl, user)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }

      );
    console.log("after")
  }

  public getUserById(id: number){
    var bookUrl = "http://localhost:8080/user/" + id;
    return this.http.get<User>(bookUrl);
  }

  public findAll() {
    return this.http.get<User[]>(this.userUrl);
  }


}
