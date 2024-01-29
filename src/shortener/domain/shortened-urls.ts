import { ShortUrl } from './values-objects/short-url';

export class ShortenedUrlsDomain {
  constructor(
    public shortenedUrl: ShortUrl,
    public originalUrl: string,
    public visitCount: number,
    public lastVisited: string,
    public createdAt: string,
    public id?: string,
    // public creatorId: string
  ) {}
}
