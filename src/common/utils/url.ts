import * as crypto from 'crypto';

export const generateShortenedUrl = (
  originalUrl: string,
  length = 10,
): string => {
  const url = removeLastSlash(originalUrl);
  const hash = crypto.createHash('sha256').update(url).digest('hex');
  const shortUrl = hash.slice(0, length);

  return shortUrl;
};

export const removeLastSlash = (url: string): string => {
  if (url.endsWith('/')) {
    return url.slice(0, -1);
  }

  return url;
};
