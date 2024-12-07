import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, AlbumSchema } from './schema/album.schema';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }]),
  ],
  providers: [AlbumService],
  controllers: [AlbumController],
})
export class AlbumModule {}
