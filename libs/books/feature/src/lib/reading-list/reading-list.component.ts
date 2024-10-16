import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, undoAction } from '@tmo/books/data-access';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss'],
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(
    private readonly store: Store,
    private matSnackBar: MatSnackBar
  ) {}
  
  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    const snackBar = this.matSnackBar.open('Removed', 'Undo');
    snackBar.onAction().subscribe(() => {
      this.store.dispatch(undoAction());
    });
  }
}
