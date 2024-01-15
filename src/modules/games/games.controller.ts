import { Controller, Get, Post, Body } from '@nestjs/common';
import { GamesService } from './games.service';
import { GameDto } from './dto/game.dto';

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
}
