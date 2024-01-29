import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { generateShortenedUrl } from '@/common/utils/url';
import { CreateShortenerCommand } from './commands/create-shortener.command';
import { ShortenerRepository } from './ports/shortener.repository';
import { ShortenerFactory } from '../domain/factories/shortener.factory';

@Injectable()
export class ShortenersService {
  constructor(
    private readonly shortenerRepository: ShortenerRepository,
    private readonly shortenerFactory: ShortenerFactory,
    private readonly configService: ConfigService,
  ) {}

  async createShortenedUrl(createShortenerCommand: CreateShortenerCommand) {
    const { originalUrl } = createShortenerCommand;
    //! Validar que no exista en la base de datos originalUrl, si existe retornal shortenedUrl de ese registro
    const shortenedUrl = generateShortenedUrl(originalUrl);
    const shortenedUrlData = this.shortenerFactory.create(
      originalUrl,
      shortenedUrl,
    );

    return this.shortenerRepository.save(shortenedUrlData);
  }

  async getShortenedUrl(url: string): Promise<string> {
    // TODO: Validar que exista la url en la base de datos
    const shortenedUrl = await this.shortenerRepository.findByUrl(url);

    if (!shortenedUrl) {
      const host = this.configService.get('HOST');

      return `${host}/not-found`;
    }
    return shortenedUrl.originalUrl;
  }
}
