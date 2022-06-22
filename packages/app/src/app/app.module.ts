import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { ColumnComponent } from './components/column/column.component'
import { NoteComponent } from './components/note/note.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatRippleModule } from '@angular/material/core'
import { MatButtonModule } from '@angular/material/button'
import { ColumnDialogComponent } from './components/column-dialog/column-dialog.component'
import { NoteDialogComponent } from './components/note-dialog/note-dialog.component'
import { FormsModule } from '@angular/forms'
import { ColumnService } from './services/column.service'
import { NoteService } from './services/note.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './services/auth.interceptor'
import { AuthService } from './services/auth.service'
import { TokenStorageService } from './services/token-storage.service';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    NoteComponent,
    ColumnDialogComponent,
    NoteDialogComponent,
    AuthDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatRippleModule,
    MatButtonModule,
  ],
  providers: [
    ColumnService,
    NoteService,
    AuthService,
    TokenStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
