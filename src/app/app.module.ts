import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';


const appRoutes: Routes = [
  { path: 'books', component: BookslistComponent },
  { path: ':id/edit', component: BookEditComponent },
  { path: 'new', component: BookEditComponent },
  { path: 'control-panel', component: ControlPanelComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BookslistComponent,
    BookEditComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
