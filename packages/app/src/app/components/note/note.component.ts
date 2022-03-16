import { Component, Input, OnInit } from '@angular/core'
import { Note } from 'src/app/model/note'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input()
  note: Note

  constructor() {}
}
