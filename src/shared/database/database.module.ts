import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { AddressRepository } from './repositories/address.repository';
import { GamesRepository } from './repositories/games.repository';
import { PlatformsRepository } from './repositories/platforms.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    AddressRepository,
    GamesRepository,
    PlatformsRepository,
  ],
  exports: [
    UsersRepository,
    AddressRepository,
    GamesRepository,
    PlatformsRepository,
  ],
})
export class DatabaseModule {}
