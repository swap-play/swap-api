import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UserDto } from './dto/user.dto';

import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';
import { IsPublic } from 'src/shared/decorators/IsPublic';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/shared/config/upload';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @IsPublic()
  @Post()
  create(@Body() userDto: UserDto) {
    return this.usersService.create(userDto);
  }

  @Put()
  update(@ActiveUserId() userId: string, @Body() userDto: UpdateUserDto) {
    return this.usersService.update(userId, userDto);
  }

  @Patch('/avatar')
  @UseInterceptors(FileInterceptor('avatar', { storage }))
  updateUserAvatar(
    @ActiveUserId() userId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.usersService.updateAvatar(userId, file.filename);
  }

  @Get('/me')
  me(@ActiveUserId() userId: string) {
    return this.usersService.getUserById(userId);
  }

  @IsPublic()
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
