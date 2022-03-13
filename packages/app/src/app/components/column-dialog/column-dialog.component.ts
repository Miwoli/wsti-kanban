import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
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
    private _snackBar: MatSnackBar,
    private _columnService: ColumnService,
  ) {}

  onCancel(): void {
    this.dialogRef.close()
  }
  onSave(): void {
    this._columnService.createColumn({ name: this.columnName }).subscribe({
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
