import { Book } from './../entities/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {
  books: Book[] = [];

  titleFilter: string = '';
  authorFilter: string = '';

  constructor() {}

  ngOnInit(): void {
    this.books = [
      {
        id: 1,
        title: 'Odysseia',
        author: 'Homeros',
        description: 'Long way back',
        price: 12.3,
        published: '1922-03-03T22:00:00.000Z',
      },
      {
        id: 2,
        title: 'Hobbit',
        author: 'Tolkien',
        description: 'There and back',
        price: 11.2,
        published: '1937-02-02T22:00:00.000Z',
      },
      {
        id: 3,
        title: 'Two towers',
        author: 'Tolkien',
        description: 'Some balls?',
        price: 13.4,
        published: '1954-10-05T22:00:00.000Z',
      },
      {
        id: 4,
        title: 'Player piano',
        author: 'Vonnegut',
        description: 'Engineers for-ever',
        price: 14.9,
        published: '1952-08-31T22:00:00.000Z',
      },
    ];
  }

  canShow(book: Book): boolean {
    return (
      book.title.toLowerCase().includes(this.titleFilter.toLowerCase()) &&
      book.author.toLowerCase().includes(this.authorFilter.toLowerCase())
    );
  }
}
