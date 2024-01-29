import { Body, Controller, Get, Param, Post, Redirect } from '@nestjs/common';
import { CreateShortenerDto } from './dto/create-shortener.dto';
import { CreateShortenerCommand } from '@/shortener/application/commands/create-shortener.command';
import { ShortenersService } from '@/shortener/application/shorteners.service';

@Controller('')
export class ShortenersController {
  constructor(private readonly shortenersService: ShortenersService) {}

  @Post('/')
  async createShortenedUrl(@Body() { originalUrl }: CreateShortenerDto) {
    return this.shortenersService.createShortenedUrl(
      new CreateShortenerCommand(originalUrl),
    );
  }

  @Get('/:url')
  @Redirect('https://www.facebook.com', 302)
  async getShortenedUrl(@Param('url') url: string) {
    return {
      url: await this.shortenersService.getShortenedUrl(url),
    };
  }
}
