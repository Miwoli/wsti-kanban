import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Note } from '../model/note'

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private apiUrl = `${environment.apiUrl}/kanban-note`

  constructor(private http: HttpClient) {}

  public getNotes(columnId?: number): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl, {
      params: {
        columnId: columnId ? columnId : '',
      },
    })
  }

  public createNote(note: Note): Observable<void> {
    return this.http.post<void>(this.apiUrl, note)
  }

  public updateNote(note: Note): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${note.id}`, note)
  }

  public removeNote(note: Note): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${note.id}`)
  }
}
