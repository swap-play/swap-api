import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  UseInterceptors,
  UploadedFile,
  Param,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { GameDto } from './dto/game.dto';
import { FileInterceptor } from '@nestjs/platform-express';

import { storage } from 'src/shared/config/upload';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  create(@Body() createGameDto: GameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Patch('/image/:gameId')
  @UseInterceptors(FileInterceptor('image', { storage }))
  updateUserAvatar(
    @Param('gameId') gameId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.gamesService.updateImage(gameId, file.filename);
  }
}
