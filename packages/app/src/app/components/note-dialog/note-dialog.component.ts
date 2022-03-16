import { HttpErrorResponse } from '@angular/common/http'
import { Component, Inject, Input, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { NoteService } from 'src/app/services/note.service'

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.css'],
})
export class NoteDialogComponent {
  title: string = ''
  description: string = ''

  constructor(
    public dialogRef: MatDialogRef<NoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { kanbanColumn: number },
    private _snackBar: MatSnackBar,
    private _noteService: NoteService,
  ) {}

  onCancel(): void {
    this.dialogRef.close()
  }

  onSave(): void {
    this._noteService
      .createNote({
        title: this.title,
        description: this.description,
        kanbanColumn: this.data.kanbanColumn,
      })
      .subscribe({
        next: () => {
          this._snackBar.open(`Note ${this.title} created!`, undefined, {
            duration: 3000,
            panelClass: 'mat-snack-bar-success',
          })
          this.dialogRef.close()
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
