import { HttpErrorResponse } from '@angular/common/http'
import { Component, Input, Output, EventEmitter } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Note } from 'src/app/model/note'
import { NoteService } from 'src/app/services/note.service'
import { NoteDialogComponent } from '../note-dialog/note-dialog.component'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input()
  note: Note

  @Output()
  removed: EventEmitter<void> = new EventEmitter()

  constructor(
    public dialog: MatDialog,
    private _noteService: NoteService,
    private _snackBar: MatSnackBar,
  ) {}

  onEdit(): void {
    const dialogRef = this.dialog.open(NoteDialogComponent, {
      width: '250px',
      disableClose: true,
      data: this.note,
    })

    dialogRef.afterClosed().subscribe({
      next: (result: Note) => {
        this.note = result
      },
    })
  }

  onRemove(): void {
    this._noteService.removeNote(this.note).subscribe({
      next: () => {
        this._snackBar.open(`Note ${this.note.title} removed!`, undefined, {
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
}
