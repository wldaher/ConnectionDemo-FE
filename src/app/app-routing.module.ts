import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGamesComponent } from './pages/video-games/video-games.component';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';

// Ordering of routes matters.  The first path that matches the route provided is what will be used.
// This means wildcard routes need to be listed last or they will always activate
const routes: Routes = [
  {
    path: 'video-games',
    component: VideoGamesComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
  {
    path: '**/*',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
