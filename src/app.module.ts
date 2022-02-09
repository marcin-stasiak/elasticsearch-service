import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { join } from 'path';

import appConfig from './configs/app.config';
import databaseConfig from './configs/database.config';
import serverConfig from './configs/server.config';

import { AttributesModule } from './endpoints/attributes/attributes.module';
import { CategoriesModule } from './endpoints/categories/categories.module';
import { ProductsModule } from './endpoints/products/products.module';
import { SearchModule } from './integrations/search/search.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, databaseConfig, serverConfig],
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        autoSchemaFile: 'src/schema.gql',
        debug: configService.get<boolean>('development'),
        playground: configService.get<boolean>('development'),
      }),
      inject: [ConfigService],
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
        logging: configService.get<boolean>('development'),
      }),
      inject: [ConfigService],
    }),
    ProductsModule,
    SearchModule,
    AttributesModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
