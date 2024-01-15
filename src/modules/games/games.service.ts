import { Injectable } from '@nestjs/common';
import { GameDto } from './dto/game.dto';
import { GamesRepository } from 'src/shared/database/repositories/games.repository';

@Injectable()
export class GamesService {
  constructor(private readonly gamesRepo: GamesRepository) {}

  async create({ name, image, platformId }: GameDto) {
    return this.gamesRepo.create({
      data: {
        name,
        image,
        platforms: {
          create: { platform: { connect: { id: platformId } } },
        },
      },
    });
  }

  // mudar formatacao
  findAll() {
    return this.gamesRepo.findAll({
      include: { platforms: { include: { platform: true } } },
    });
  }
}
