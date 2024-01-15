import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { PlatformDto } from './dto/platform.dto';

@Controller('platforms')
export class PlatformsController {
  constructor(private readonly platformsService: PlatformsService) {}

  @Post()
  create(@Body() createPlatformDto: PlatformDto) {
    return this.platformsService.create(createPlatformDto);
  }

  @Get()
  findAll() {
    return this.platformsService.findAll();
  }
}
