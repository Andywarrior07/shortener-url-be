import { ShortenedUrlsDomain } from '@/shortener/domain/shortened-urls';
import { ShortenedUrls } from '../schemas/shortened-urls.schema';
import { ShortUrl } from '@/shortener/domain/values-objects/short-url';

export class ShortenedUrlMapper {
  static toDomain(shortenedUrlData: ShortenedUrls): ShortenedUrlsDomain {
    const shortenedUrl = new ShortUrl(shortenedUrlData.shortenedUrl);

    return {
      id: shortenedUrlData._id,
      createdAt: shortenedUrlData.createdAt,
      lastVisited: shortenedUrlData.lastVisited,
      originalUrl: shortenedUrlData.originalUrl,
      visitCount: shortenedUrlData.visitCount,
      shortenedUrl,
    } as ShortenedUrlsDomain;
  }

  static toPersistence(
    shortenedUrl: Partial<ShortenedUrlsDomain>,
  ): ShortenedUrls {
    return {
      _id: shortenedUrl.id,
      createdAt: shortenedUrl.createdAt,
      lastVisited: shortenedUrl.lastVisited,
      originalUrl: shortenedUrl.originalUrl,
      shortenedUrl: shortenedUrl.shortenedUrl.url,
      visitCount: shortenedUrl.visitCount,
    } as ShortenedUrls;
  }
}
