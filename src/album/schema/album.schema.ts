import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Song } from 'src/songs/schema/song.schema';

@Schema()
export class Album {
  @Prop({ required: true }) title: string;
  @Prop({ type: [Types.ObjectId], ref: 'songs' }) songs: Song[];
}
export type AlbumDocument = HydratedDocument<Album>;
export const AlbumSchema = SchemaFactory.createForClass(Album);
