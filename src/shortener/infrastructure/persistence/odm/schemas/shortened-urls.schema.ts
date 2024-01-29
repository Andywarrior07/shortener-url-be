import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class ShortenedUrls {
  _id?: string;

  @Prop({ type: String })
  public shortenedUrl: string;

  @Prop({ type: String })
  public originalUrl: string;

  @Prop({ type: Number })
  public visitCount: number;

  @Prop({ type: String })
  public lastVisited: string;

  @Prop({ type: String })
  public createdAt: string;
}

export type ShortenedUrlsDocument = HydratedDocument<ShortenedUrls>;
export const ShortenedUrlsSchema = SchemaFactory.createForClass(ShortenedUrls);

ShortenedUrlsSchema.index({
  shortenedUrl: 1,
});
