import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { BasicAuthInterceptorService } from './service/basic-auth-interceptor.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BookslistComponent, canActivate:[AuthGaurdService] },
  { path: 'books/:id/edit', component: BookEditComponent },
  { path: 'books/new', component: BookEditComponent },
  { path: 'control-panel', component: ControlPanelComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/new', component: UserEditComponent },
  { path: 'users/:id/edit', component: UserEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookslistComponent,
    BookEditComponent,
    ControlPanelComponent,
    UserListComponent,
    UserEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthInterceptorService, multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
