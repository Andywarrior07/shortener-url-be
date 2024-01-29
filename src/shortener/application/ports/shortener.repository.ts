import { ShortenedUrlsDomain } from '@/shortener/domain/shortened-urls';

export abstract class ShortenerRepository {
  abstract save(
    shortenedUrl: ShortenedUrlsDomain,
  ): Promise<ShortenedUrlsDomain>;
  abstract findByUrl(url: string): Promise<ShortenedUrlsDomain>;
}
