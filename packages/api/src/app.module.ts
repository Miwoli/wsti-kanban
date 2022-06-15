import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { KanbanColumnModule } from './kanban-column/kanban-column.module'
import { KanbanNoteModule } from './kanban-note/kanban-note.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './auth/jwt-auth.guard'

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // USER & PASSWORD ARE FOR LOCAL, DEV PURPOSE ONLY. THEY SHOULD BE STORED In .ENV/EXTERNAL FILE/ENVS!!!
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'kanban',
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    UsersModule,
    KanbanColumnModule,
    KanbanNoteModule,
  ],
})
export class AppModule {}
