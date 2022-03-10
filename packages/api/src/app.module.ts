import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { KanbanColumnModule } from './kanban-column/kanban-column.module'
import { KanbanNoteModule } from './kanban-note/kanban-note.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // USER & PASSWORD ARE FOR LOCAL, DEV PURPOSE ONLY. THEY SHOULD BE STORED In .ENV/EXTERNAL FILE/ENVS!!!
      type: 'mysql',
      host: 'host.docker.internal',
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
