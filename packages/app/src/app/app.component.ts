import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component'
import { ColumnDialogComponent } from './components/column-dialog/column-dialog.component'
import { Column } from './model/column'
import { AuthService } from './services/auth.service'
import { ColumnService } from './services/column.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WSTI Kanban'
  columns: Column[]
  isDragDisabled: boolean

  constructor(
    public dialog: MatDialog,
    public authService: AuthService,
    private _columnService: ColumnService,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(value => this.isDragDisabled = !value)
    this.getColumns()
  }

  onNewColumn(): void {
    const dialogRef = this.dialog.open(ColumnDialogComponent, {
      width: '250px',
      disableClose: true
    })

    dialogRef.afterClosed().subscribe({
      next: () => this.getColumns(),
      error: (err: HttpErrorResponse) => {
        this._snackBar.open(`Error: ${err.message}`, undefined, {
          duration: 3000,
          panelClass: 'mat-snack-bar-error',
        })
      },
    })
  }

  onColumnRemoved(): void {
    this.getColumns()
  }

  onLogin(): void {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      width: '250px',
      disableClose: true
    })

    dialogRef.afterClosed().subscribe({
      error: (err: HttpErrorResponse) => {
        this._snackBar.open(`Error: ${err.message}`, undefined, {
          duration: 3000,
          panelClass: 'mat-snack-bar-error'
        })
      }
    })
  }

  onLogout(): void {
    this.authService.logout()
  }

  private getColumns(): void {
    this._columnService.getColumns().subscribe((columns) => {
      this.columns = columns
    })
  }
}
