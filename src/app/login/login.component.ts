import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginservice: AuthenticationService) { }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
    }


  // login(): void {
  //   console.log( );
  //   var username = this.loginForm.get("username").value;
  //   var password = this.loginForm.get("password").value;
  //   if (username == 'admin' && password == 'admin') {
  //     this.router.navigate(["books"]);
  //   } else {
  //     alert("Invalid credentials");
  //   }
  //  }

  onSubmit() {
    this.login();
  }  


  login() {
    var username = this.loginForm.get("username").value;
    var password = this.loginForm.get("password").value;
    (this.loginservice.authenticate(username, password).subscribe(
      data => {
        console.log("authenticate succesfull");
        console.log(data);
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        console.log("authenticate not succesfull");
        console.log(error);
        this.invalidLogin = true
      }
    )
    );
    console.log(this.invalidLogin);
  }

  logOut() {
    this.loginservice.logOut();
  }
}

