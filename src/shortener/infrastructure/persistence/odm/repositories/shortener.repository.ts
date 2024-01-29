import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShortenedUrls } from '../schemas/shortened-urls.schema';
import { ShortenerRepository } from '@/shortener/application/ports/shortener.repository';
import { ShortenedUrlsDomain } from '@/shortener/domain/shortened-urls';
import { ShortenedUrlMapper } from '../mappers/url.mapper';

@Injectable()
export class OdmShortenerRepository implements ShortenerRepository {
  constructor(
    @InjectModel(ShortenedUrls.name)
    private readonly model: Model<ShortenedUrls>,
  ) {}

  async save(shortenedUrl: ShortenedUrlsDomain): Promise<ShortenedUrlsDomain> {
    const persistenceData = ShortenedUrlMapper.toPersistence(shortenedUrl);
    const shortenerUrl = await this.model.create(persistenceData);

    return ShortenedUrlMapper.toDomain(shortenerUrl);
  }

  async findByUrl(shortenedUrl: string): Promise<ShortenedUrlsDomain> {
    const shortenerUrl = await this.model.findOne({ shortenedUrl }).lean();

    if (!shortenerUrl) {
      return;
    }

    return ShortenedUrlMapper.toDomain(shortenerUrl);
  }
}
