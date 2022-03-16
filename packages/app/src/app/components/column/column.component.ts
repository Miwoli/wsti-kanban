import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop'
import { HttpErrorResponse } from '@angular/common/http'
import { Component, Input, Output, EventEmitter } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Column } from 'src/app/model/column'
import { Note } from 'src/app/model/note'
import { ColumnService } from 'src/app/services/column.service'
import { NoteService } from 'src/app/services/note.service'
import { NoteDialogComponent } from '../note-dialog/note-dialog.component'

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent {
  @Input()
  column: Column

  @Output()
  removed: EventEmitter<void> = new EventEmitter()

  constructor(
    public dialog: MatDialog,
    private _columnService: ColumnService,
    private _noteService: NoteService,
    private _snackBar: MatSnackBar,
  ) {}

  onNewNote(kanbanColumn?: number): void {
    const dialogRef = this.dialog.open(NoteDialogComponent, {
      width: '250px',
      data: {
        kanbanColumn,
      },
    })

    dialogRef.afterClosed().subscribe({
      next: () => this.getNotes(),
      error: (err: HttpErrorResponse) => {
        this._snackBar.open(`Error: ${err.message}`, undefined, {
          duration: 3000,
          panelClass: 'mat-snack-bar-error',
        })
      },
    })
  }

  onRemove(): void {
    this._columnService.deleteColumn(this.column).subscribe({
      next: () => {
        this._snackBar.open(`Column ${this.column.name} removed!`, undefined, {
          duration: 3000,
          panelClass: 'mat-snack-bar-success',
        })
        this.removed.emit()
      },
      error: (err: HttpErrorResponse) => {
        this._snackBar.open(`Error: ${err.message}`, undefined, {
          duration: 3000,
          panelClass: 'mat-snack-bar-error',
        })
      },
    })
  }

  onDrop(event: CdkDragDrop<Note[]>, columnId?: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )

      const updatedNote = event.item.data
      updatedNote.kanbanColumn = columnId
      this._noteService.updateNote(updatedNote).subscribe({
        error: (err: HttpErrorResponse) => {
          this._snackBar.open(`Error: ${err.message}`, undefined, {
            duration: 3000,
            panelClass: 'mat-snack-bar-error',
          })
        },
      })
    }
  }

  private getNotes(): void {
    this._noteService.getNotes(this.column.id).subscribe((notes) => {
      this.column.notes = notes
    })
  }
}
