import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { join } from 'path';

import databaseConfig from './configs/database.config';
import serverConfig from './configs/server.config';

import { ProductsModule } from './endpoints/products/products.module';
import { ElasticSearchModule } from './integrations/elastic-search/elastic-search.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig, serverConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        database: configService.get<string>('database.name'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        autoLoadEntities: true,
        synchronize: true,
        logging: configService.get<string>('environment') === 'developer',
      }),
      inject: [ConfigService],
    }),
    ProductsModule,
    ElasticSearchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
