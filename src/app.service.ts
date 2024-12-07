import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getEnvVariables() {
    return { port: this.configService.get<number>('port') };
  }
  getHello(): string {
    return 'Hello World!';
  }
}
