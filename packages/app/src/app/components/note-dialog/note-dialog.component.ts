import { HttpErrorResponse } from '@angular/common/http'
import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Note } from 'src/app/model/note'
import { NoteService } from 'src/app/services/note.service'

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.css'],
})
export class NoteDialogComponent {
  title: string
  description: string

  constructor(
    public dialogRef: MatDialogRef<NoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      kanbanColumn: number
      id?: number
      title?: string
      description?: string
    },
    private _snackBar: MatSnackBar,
    private _noteService: NoteService,
  ) {
    if (this.data.id) {
      this.title = this.data.title ?? ''
      this.description = this.data.description ?? ''
    }
  }

  onCancel(): void {
    this.dialogRef.close()
  }

  onSave(): void {

    this.data.id ? this.updateNote() : this.newNote()
  }

  private updateNote() {
    this._noteService
      .updateNote({
        id: this.data.id,
        title: this.title,
        description: this.description,
        kanbanColumn: this.data.kanbanColumn,
      })
      .subscribe({
        next: () => {
          this._snackBar.open(`Note ${this.title} updated!`, undefined, {
            duration: 3000,
            panelClass: 'mat-snack-bar-success',
          })
          this.dialogRef.close({
            id: this.data.id,
            title: this.title,
            description: this.description,
            kanbanColumn: this.data.kanbanColumn,
          })
        },
        error: (err: HttpErrorResponse) => {
          this._snackBar.open(`Error: ${err.message}`, undefined, {
            duration: 3000,
            panelClass: 'mat-snack-bar-error',
          })
        },
      })
  }

  private newNote() {
    this._noteService
      .createNote({
        title: this.title,
        description: this.description,
        kanbanColumn: this.data.kanbanColumn,
      })
      .subscribe({
        next: (note: Note) => {
          this._snackBar.open(`Note ${this.title} created!`, undefined, {
            duration: 3000,
            panelClass: 'mat-snack-bar-success',
          })
          this.dialogRef.close(note)
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
