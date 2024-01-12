import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*',
  });

  app.use(
    '/tmp/uploads',
    express.static(join(__dirname, '..', 'tmp', 'uploads')),
  );

  await app.listen(3000);
}
bootstrap();
