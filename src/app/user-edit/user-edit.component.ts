import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User;

  constructor(private ususerService: UserService, route: ActivatedRoute) {
    const idRout: string  =  route.snapshot.paramMap.get('id');
    const id: number = new Number(idRout).valueOf();
    this.getUserById(id);
    console.log("id: " +id);
   }

  ngOnInit() {
  }

  createUser(){
    console.log("createUser");
    console.log(this.user);
    this.ususerService.createUser(this.user);
  }

  getUserById(id: number){
    this.ususerService.getUserById(id).subscribe(data => {
        console.log("POST Request is successful ", data);
        this.user = data;
        },
        error  => {
        console.log("Error", error);
          });
    console.log(this.user);
  }

}
