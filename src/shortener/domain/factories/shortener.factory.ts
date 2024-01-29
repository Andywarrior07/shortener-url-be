import { Injectable } from '@nestjs/common';
import { todayToString } from '@/common/utils/date';
import { ShortenedUrlsDomain } from '../shortened-urls';
import { ShortUrl } from '../values-objects/short-url';

@Injectable()
export class ShortenerFactory {
  create(originalUrl: string, shortenedUrl: string): ShortenedUrlsDomain {
    const createdAt = todayToString();
    const visitCount = 0;
    const lastVisited = createdAt;

    return new ShortenedUrlsDomain(
      new ShortUrl(shortenedUrl),
      originalUrl,
      visitCount,
      lastVisited,
      createdAt,
    );
  }
}
