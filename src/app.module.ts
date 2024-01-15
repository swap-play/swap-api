import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './shared/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { AddressModule } from './modules/address/address.module';
import { MulterModule } from '@nestjs/platform-express';
import { storage } from 'src/shared/config/upload';
import { GamesModule } from './modules/games/games.module';
import { PlatformsModule } from './modules/platforms/platforms.module';

@Module({
  imports: [
    MulterModule.register({ storage }),
    UsersModule,
    DatabaseModule,
    AuthModule,
    AddressModule,
    GamesModule,
    PlatformsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
