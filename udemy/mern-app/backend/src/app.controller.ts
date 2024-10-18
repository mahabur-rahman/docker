import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('name')
export class AppController {
  constructor(private readonly AppService: AppService) {}

  @Post()
  async createName(@Body('name') name: string) {
    return this.AppService.create(name);
  }

  @Get()
  async allDatas() {
    return this.AppService.allData();
  }
}
