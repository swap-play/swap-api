import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PlatformsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.PlatformCreateArgs) {
    return this.prismaService.platform.create(createDto);
  }

  findAll() {
    return this.prismaService.platform.findMany();
  }
}
