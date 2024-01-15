import { Injectable } from '@nestjs/common';
import { PlatformDto } from './dto/platform.dto';
import { PlatformsRepository } from 'src/shared/database/repositories/platforms.repository';

@Injectable()
export class PlatformsService {
  constructor(private readonly platformsRepo: PlatformsRepository) {}
  create(createPlatformDto: PlatformDto) {
    return this.platformsRepo.create({ data: createPlatformDto });
  }

  findAll() {
    return this.platformsRepo.findAll();
  }
}
