import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { AddressRepository } from './repositories/address.repository';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, AddressRepository],
  exports: [UsersRepository, AddressRepository],
})
export class DatabaseModule {}
