import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { KanbanColumnModule } from './kanban-column/kanban-column.module'
import { KanbanNoteModule } from './kanban-note/kanban-note.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // USER & PASSWORD ARE FOR LOCAL, DEV PURPOSE ONLY. THEY SHOULD BE STORED In .ENV/EXTERNAL FILE/ENVS!!!
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'pass',
      database: 'kanban',
      synchronize: true,
      autoLoadEntities: true,
    }),
    KanbanColumnModule,
    KanbanNoteModule,
  ],
})
export class AppModule {}
