import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';
import { StorageAvatarService } from './services/storage-avatar.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, StorageAvatarService],
})
export class UsersModule {}
