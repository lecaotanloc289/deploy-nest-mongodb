import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsModule } from './songs/songs.module';
import { AlbumModule } from './album/album.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { validate } from './env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: ['.env.development', '.env.production'],
      envFilePath: [`${process.cwd()}/.env.${process.env.NODE_ENV}`],
      load: [configuration],
      isGlobal: true,
      // validate: validate,
    }),
    // MongooseModule.forRoot('mongodb://localhost:27017/spotify'),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    SongsModule,
    AlbumModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
