export class ShortUrl {
  public readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  toJSON() {
    return this.url;
  }
}
