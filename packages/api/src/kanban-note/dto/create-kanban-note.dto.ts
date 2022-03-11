export class CreateKanbanNoteDto {
  readonly title: string
  readonly description?: string
  readonly kanbanColumn: number
}
