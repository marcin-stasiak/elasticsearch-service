import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  if (!configService.get<boolean>('development')) {
    app.use(helmet());
  }

  await app.listen(configService.get<number>('port'));
}
bootstrap();
