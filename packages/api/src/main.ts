import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { readFileSync } from 'fs'

async function bootstrap() {
  const httpsOptions = {
    key: readFileSync('./cert/key.pem'),
    cert: readFileSync('./cert/local.crt'),
  }

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  })
  app.enableCors()
  const config = new DocumentBuilder()
    .setTitle('WSTI Kanban API')
    .setDescription('Endpoints for the WSTI Kanban project')
    .setVersion('0.1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('', app, document)

  await app.listen(3000)
}
bootstrap()
