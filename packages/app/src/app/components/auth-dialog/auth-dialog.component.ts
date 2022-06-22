import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent {
  isRegister: boolean

  firstName: string
  lastName: string
  login: string
  password: string

  constructor(
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    private _authService: AuthService,
    private _snackBar: MatSnackBar
  ) { }

  onCancel(): void {
    this.dialogRef.close()
  }

  onSave(): void {
    this.isRegister ? this.register() : this.signin()
  }

  private register() {
    this._authService.register({
      firstName: this.firstName,
      lastName: this.lastName,
      login: this.login,
      password: this.password
    }).pipe(
      switchMap(() => this._authService.login(this.login, this.password))
    ).subscribe({
      next: () => {
        this._snackBar.open(`Welcome ${this.firstName}!`, undefined, {
          duration: 3000,
          panelClass: 'mat-snack-bar-success'
        })
        this.dialogRef.close()
      },
      error: (err: HttpErrorResponse) => {
        this._snackBar.open(`Error: ${err.message}`, undefined, {
          duration: 3000,
          panelClass: 'mat-snack-bar-error',
        })
      }
    })
  }

  private signin() {
    this._authService.login(this.login, this.password)
    .subscribe({
      next: () => {
        this._snackBar.open(`Welcome ${this.login}!`, undefined, {
          duration: 3000,
          panelClass: 'mat-snack-bar-success'
        })
        this.dialogRef.close()
      },
      error: (err: HttpErrorResponse) => {
        this._snackBar.open(`Error: ${err.message}`, undefined, {
          duration: 3000,
          panelClass: 'mat-snack-bar-error',
        })
      }
    })
  }
}
