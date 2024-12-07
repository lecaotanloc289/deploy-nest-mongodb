import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Song, SongDocument } from './schema/song.schema';
import { DeleteResult, Model, UpdateResult } from 'mongoose';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name) private readonly songModel: Model<SongDocument>,
  ) {}
  async create(createSongDto: CreateSongDto): Promise<Song> {
    const song = await this.songModel.create(createSongDto);
    return song;
  }

  async findAll(): Promise<Song[]> {
    return this.songModel.find();
  }

  async findOne(id: string): Promise<Song> {
    return this.songModel.findById(id);
  }

  async update(
    id: string,
    updateSongDto: UpdateSongDto,
  ): Promise<UpdateResult> {
    return this.songModel.findByIdAndUpdate(id, updateSongDto, { new: true });
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.songModel.deleteOne({ _id: id });
  }
}
