import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Album } from './schema/album.schema';

@Controller('albums')
export class AlbumController {
  constructor(private albumService: AlbumService) {}

  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto): Promise<Album> {
    return this.albumService.create(createAlbumDto);
  }

  @Get()
  findAll(): Promise<Album[]> {
    return this.albumService.findAll();
  }
}
