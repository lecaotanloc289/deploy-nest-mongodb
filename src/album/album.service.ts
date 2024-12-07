import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './schema/album.schema';
import { Model } from 'mongoose';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Song } from 'src/songs/schema/song.schema';

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album.name) private readonly albumModel: Model<AlbumDocument>,
  ) {}

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    return this.albumModel.create(createAlbumDto);
  }

  async findAll() {
    return this.albumModel.find().populate('songs', null, Song.name);
  }
}
