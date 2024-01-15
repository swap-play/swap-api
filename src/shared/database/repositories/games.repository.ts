import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class GamesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.GameCreateArgs) {
    return this.prismaService.game.create(createDto);
  }

  findAll(findManyDto: Prisma.GameFindManyArgs) {
    return this.prismaService.game.findMany(findManyDto);
  }
}
