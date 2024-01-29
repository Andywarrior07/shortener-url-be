import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ShortenedUrls,
  ShortenedUrlsSchema,
} from './schemas/shortened-urls.schema';
import { ShortenerRepository } from '@/shortener/application/ports/shortener.repository';
import { OdmShortenerRepository } from './repositories/shortener.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ShortenedUrls.name, schema: ShortenedUrlsSchema },
    ]),
  ],
  providers: [
    {
      provide: ShortenerRepository,
      useClass: OdmShortenerRepository,
    },
  ],
  exports: [ShortenerRepository],
})
export class OdmUrloPersistenceModule {}
