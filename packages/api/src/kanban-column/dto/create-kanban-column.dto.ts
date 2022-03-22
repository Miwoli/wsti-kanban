import { ApiProperty } from '@nestjs/swagger'

export class CreateKanbanColumnDto {
  @ApiProperty()
  readonly name: string
}
