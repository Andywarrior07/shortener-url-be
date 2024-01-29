import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MONGO_DB_HOST: Joi.string().required(),
        MONGO_DB_PORT: Joi.string().required(),
        MONGO_DB_NAME: Joi.string().required(),
        HOST: Joi.string().default('localhost'),
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (service: ConfigService) => ({
        uri: `mongodb://${service.get('MONGO_DB_HOST')}:${service.get('MONGO_DB_PORT')}/${service.get('MONGO_DB_NAME')}`,
      }),
    }),
    // MongooseModule.forRoot('mongodb://localhost:27017/short-urls')
  ],
})
export class CoreModule {}
