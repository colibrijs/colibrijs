import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
    cors: true,
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Colibrijs API')
    .setExternalDoc('OpenAPI schema', './swagger-json')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);

  const config = app.get(ConfigService);
  const logger = new Logger();

  app.enableShutdownHooks();

  await app.listen(
    config.getOrThrow('SERVER_PORT'),
    config.getOrThrow('SERVER_HOST'),
    (_, address) => logger.log(`Server is running on the ${address}`)
  );
}

bootstrap();
