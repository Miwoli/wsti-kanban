import { HttpErrorResponse } from '@angular/common/http'
import { Component, Input, Output, EventEmitter } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Column } from 'src/app/model/column'
import { ColumnService } from 'src/app/services/column.service'

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
    private _columnService: ColumnService,
    private _snackBar: MatSnackBar,
  ) {}

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
}
