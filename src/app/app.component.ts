import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularClient';
  
  constructor(private authService: AuthenticationService) { 

  }

  logout() {
    console.log("AppComponent logout");
    this.authService.logOut();
  }

}
