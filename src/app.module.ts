import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { ShortenersModule } from './shortener/application/shorteners.module';

@Module({
  imports: [CoreModule, ShortenersModule],
})
export class AppModule {}
