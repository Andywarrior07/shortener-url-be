import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShortenersController } from '../presenters/http/shorteners.controller';
import { ShortenersService } from './shorteners.service';
import { ShortenerFactory } from '../domain/factories/shortener.factory';
import { ShortenersInfrastructureModule } from '../infrastructure/persistence/shorteners-infrastructure.module';

@Module({
  controllers: [ShortenersController],
  providers: [ShortenersService, ShortenerFactory],
  imports: [ConfigModule, ShortenersInfrastructureModule],
})
export class ShortenersModule {}
