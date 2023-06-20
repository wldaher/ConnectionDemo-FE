import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: Book[] = [];

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    // use the environment file so that the proper url for each environment is used
    this.httpClient.get<Book[]>(`${environment.apiUrl}/Book`).subscribe({
      next: (results) => {
        this.books = results;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  toggleRead(book: Book): void {
    this.httpClient.post<Book>(`${environment.apiUrl}/Book`, book).subscribe({
      next: (update) => {
        book.read = update.read;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
