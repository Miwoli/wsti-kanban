import { HttpErrorResponse } from '@angular/common/http'
import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Note } from 'src/app/model/note'
import { ColumnService } from 'src/app/services/column.service'

@Component({
  selector: 'app-column-dialog',
  templateUrl: './column-dialog.component.html',
  styleUrls: ['./column-dialog.component.css'],
})
export class ColumnDialogComponent {
  columnName: string = ''
  constructor(
    public dialogRef: MatDialogRef<ColumnDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { id?: number; name: string; notes: Note[] },
    private _snackBar: MatSnackBar,
    private _columnService: ColumnService,
  ) {
    if (this.data?.id) this.columnName = this.data.name
  }

  onCancel(): void {
    this.dialogRef.close(this.columnName)
  }
  onSave(): void {
    this.data?.id ? this.updateColumn() : this.newColumn()
  }

  private updateColumn() {
    this._columnService
      .updateColumn({
        name: this.columnName,
        id: this.data.id,
        notes: this.data.notes,
      })
      .subscribe({
        next: () => {
          this._snackBar.open(`Column ${this.columnName} updated!`, undefined, {
            duration: 3000,
            panelClass: 'mat-snack-bar-success',
          })
          this.dialogRef.close(this.columnName)
        },
        error: (err: HttpErrorResponse) => {
          this._snackBar.open(`Error: ${err.message}`, undefined, {
            duration: 3000,
            panelClass: 'mat-snack-bar-error',
          })
        },
      })
  }

  private newColumn() {
    this._columnService
      .createColumn({ name: this.columnName, notes: [] })
      .subscribe({
        next: () => {
          this._snackBar.open(`Column ${this.columnName} created!`, undefined, {
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
