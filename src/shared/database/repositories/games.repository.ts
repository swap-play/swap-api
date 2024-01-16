import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class GamesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.GameCreateArgs) {
    return this.prismaService.game.create(createDto);
  }

  update(updateDto: Prisma.GameUpdateArgs) {
    return this.prismaService.game.update(updateDto);
  }

  findAll(findManyDto: Prisma.GameFindManyArgs) {
    return this.prismaService.game.findMany(findManyDto);
  }

  findUnique(findUniqueDto: Prisma.GameFindUniqueArgs) {
    return this.prismaService.game.findUnique(findUniqueDto);
  }
}
