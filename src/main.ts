import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('GengarAPI')
    .setDescription(
      'GengarAPI, an API to provide better formatted data from PokeAPI for FlutterDex App',
    )
    .setVersion(process.env.VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.API_PORT);
}
bootstrap();
