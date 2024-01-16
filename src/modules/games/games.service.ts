import { ConflictException, Injectable } from '@nestjs/common';
import { GameDto } from './dto/game.dto';
import { GamesRepository } from 'src/shared/database/repositories/games.repository';
import { deleteUploadFile } from 'src/shared/utils/deleteUploadFile';

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

  async updateImage(gameId: string, imageFilename: string) {
    const game = await this.getGameById(gameId);

    if (!game) {
      throw new ConflictException('Unable to change game image.');
    }

    if (game.image) {
      await deleteUploadFile(game.image);
    }

    return await this.gamesRepo.update({
      where: { id: gameId },
      data: { image: imageFilename },
      select: { image: true },
    });
  }

  getGameById(gameId: string) {
    return this.gamesRepo.findUnique({
      where: { id: gameId },
    });
  }

  // mudar formatacao || RAW QUERY
  findAll() {
    return this.gamesRepo.findAll({
      include: { platforms: { include: { platform: true } } },
    });
  }
}
