import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { Column } from '../model/column'

@Injectable()
export class ColumnService {
  private apiUrl = `${environment.apiUrl}/kanban-column`
  constructor(private http: HttpClient) {}

  public getColumns(): Observable<Column[]> {
    return this.http.get<Column[]>(this.apiUrl)
  }

  public getColumn(id: number): Observable<Column> {
    return this.http.get<Column>(`${this.apiUrl}/${id}`)
  }

  public createColumn(column: Column): Observable<void> {
    return this.http.post<void>(this.apiUrl, column)
  }

  public updateColumn(column: Column): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${column.id}`, column)
  }

  public deleteColumn(column: Column): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${column.id}`)
  }
}
